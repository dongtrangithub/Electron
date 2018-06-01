var mysql = require('mysql')
const async = require('async');
const ipc = require('electron').ipcMain
var http = require('http');
var request = require('request');
var cheerio = require('cheerio');
var querystring = require('querystring');
const {dialog} = require('electron')
exports.addgroup = function () {
    var getdatabase = require('./connectMySQL.js').connectdatabase()
    function loaddata(event) {
        var array1 = []
        var arrayob
        getdatabase.query('select * from grouprank', function (err, data) {
            arrayob = data
        })
        getdatabase.query('select * from groupname', function (err, data) {
            for (i = 0; i < data.length; i++) {
                ob = {}
                ab = {}
                arrayoj = []
                ob.group = data[i].ten
                ob.data = arrayob
                array1.push(ob)
            }

            for (i = 0; i < array1.length; i++) {
                for (a = 0; a < array1[i].data.length; a++) {
                    
                }
            }
            event.sender.send('loaddata', array1)
        })

    }
    ipc.on('loaddata', function (event, arg) {

        loaddata(event)

    })
    ipc.on('insertdata', function (event, arg) {
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
                insertdata(event, arg)
            }
        })
    })
        function insertdata(event, arg) {
            var domian = arg.domian
            var groupname = arg.groupname
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
                            ob.domian = domian
                            ob.groupname = groupname
                            mang.push(ob)
                            break
                        }
                        if (not == array2.length) {
                            ob.key = arg.array[bien]
                            ob.position = 0
                            ob.domian = domian
                            ob.groupname = groupname
                            mang.push(ob)
                        }
                    }
                }
                getdatabase.query(`INSERT INTO groupname (ten) VALUES('${groupname}')`)

                for (ii = 0; ii < mang.length; ii++) {

                    getdatabase.query(`INSERT INTO grouprank (tukhoa,thuhang,nhom,tenmien) VALUES ('${mang[ii].key}',${mang[ii].position},'${mang[ii].groupname}','${mang[ii].domian}')`)

                }
                loadinsertdata(event)
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
        }

        function loadinsertdata(event) {

            var array1 = []
            var arrayob
            getdatabase.query('select * from grouprank', function (err, data) {
                arrayob = data
            })
            getdatabase.query('select * from groupname', function (err, data) {
                for (i = 0; i < data.length; i++) {
                    ob = {}
                    ab = {}
                    arrayoj = []
                    ob.group = data[i].ten
                    ob.data = arrayob
                    array1.push(ob)
                }

                for (i = 0; i < array1.length; i++) {
                    for (a = 0; a < array1[i].data.length; a++) {

                    }
                }
                event.sender.send('insertdata', array1)
            })
        }



    }