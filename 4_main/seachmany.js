
var querystring = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express')
const ipc = require('electron').ipcMain
const {dialog} = require('electron')
var google = require('google-tools')
var mysql = require('mysql')
var app = express();
const async = require('async');
var http = require('http');
exports.seach = function () {
    ipc.on('data', function (event, arg) {
        var domian = arg.domian
        function checkdomian(callback) {
            request(`http://${domian}`, function (err, res) {
                if (err)
                    callback(0)
                else
                    callback(1)
            })
        }
        checkdomian(function (data) {
            if (data == 0)
                dialog.showErrorBox('', 'domian is not available')
            else {
                var urls = []
                for (i = 0; i < arg.array.length; i++) {
                    var key = querystring.stringify({ q: `${arg.array[i]}` })
                    urls.push(`https://www.google.com.vn/search?${key}&num=100`)
                }
                async.map(urls, httpGet, function (err, res) {
                    if (err) return console.log(err);
                    var mang = []
                    for (a = 0; a < res.length; a++) {
                        var ob = {}
                        var array1 = []
                        array1 = res[a].split('\n')
                        var array2 = []
                        for (b = 0; b < array1.length; b++) {
                            if (array1[b] != '')
                                array2.push(array1[b])
                        }
                        var bien = a * 1
                        not = 0
                        for (c = 0; c < array2.length; c++) {
                            not++
                            if (array2[c].indexOf(domian) != -1) {
                                ob.key = arg.array[bien]
                                ob.position = c + 1
                                mang.push(ob)
                                break
                            }
                            if (not == array2.length) {
                                ob.key = arg.array[bien]
                                ob.position = 'Ko co trong top 100'
                                mang.push(ob)
                            }
                        }
                    }
                  //  console.log(mang)
                    event.sender.send('senddata', mang)
                })
            }
        })
        function httpGet(url, callback) {
            const options = {
                url: url,
                json: true
            };
            request(options,
                function (err, res, body) {
                    var $ = cheerio.load(body);
                    var main = ''
                    $('.r a').each(function () {
                        main += $(this).attr('href').substr(7, $(this).attr('href').indexOf('&') - 7) + '\n';
                    });
                    callback(err, main);
                }
            );
        }
    })
}
