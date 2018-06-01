
var querystring = require('querystring');
var request = require('request');
var cheerio = require('cheerio');
var express = require('express')
const ipc = require('electron').ipcMain
const {dialog} = require('electron')
var google = require('google-tools')
var mysql = require('mysql')
var app = express();
exports.seach = function () {
        ipc.on('sendseach', function (event, arg) {
                var bien = 0
                var domian = arg.domian
                var key = querystring.stringify({ q: `${arg.keyword}` });
                var insertdata = require('./connectMySQL.js').connectdatabase()
                //  var senddata = require('./connectMySQL.js').connectdatabase()
                //  insertdata.query('DELETE FROM domain')
                // insertdata.query('ALTER TABLE domain AUTO_INCREMENT = 0')
                //   for (var i = 0; i <= 1; i++) {
                //        if(i==0)
                var url1 = `https://www.google.com.vn/search?${key}&num=100`
                //         else
                //    var url2 = `https://www.google.com.vn/search?${key}&start=10`
                function checkdomian(callback) {
                        request(`http://${domian}`, function (err, res) {
                                if (err)
                                        callback(0)
                                else
                                        callback(1)
                        })
                }
                if (domian == '') {
                        request.get(url1, function (err, response, body) {
                                var array1 = new Array()
                                if (!err && response.statusCode == 200) {
                                        var $ = cheerio.load(body);
                                        var main = ''
                                        $('.r a').each(function () {
                                                array1.push($(this).attr('href').substr(7, $(this).attr('href').indexOf('&') - 7))
                                                //   main = $(this).attr('href').substr(7, $(this).attr('href').indexOf('&') - 7);
                                                //  insertdata.query(`INSERT INTO domain (url) VALUES ('${main}')`)
                                        });
                                        bien++
                                        //  if(bien>1)
                                        // event.sender.send('topurl',bien) 
                                        event.sender.send('reseach', array1)
                                }
                        })
                }
                else {
                        checkdomian(function (data) {
                                if (data == 0)
                                        dialog.showErrorBox('', 'domian is not available')
                                else {
                                        request.get(url1, function (err, response, body) {
                                                var array1 = new Array()
                                                if (!err && response.statusCode == 200) {
                                                        var $ = cheerio.load(body);
                                                        var main = ''
                                                        $('.r a').each(function () {
                                                                array1.push($(this).attr('href').substr(7, $(this).attr('href').indexOf('&') - 7))
                                                                //   main = $(this).attr('href').substr(7, $(this).attr('href').indexOf('&') - 7);
                                                                //  insertdata.query(`INSERT INTO domain (url) VALUES ('${main}')`)
                                                        });
                                                        bien++
                                                        //  if(bien>1)
                                                        // event.sender.send('topurl',bien) 
                                                        event.sender.send('reseach', array1)
                                                }
                                        })
                                }
                        })
                }
                // }

                /*  insertdata.query('SELECT * FROM domain',function(err,result){
                       event.sender.send('topurl',result)
                      //  event.returnValue =result
                        console.log(result)
                })*/
                // query.end()
                /*     var pool = mysql.createPool({
                            host: 'localhost',
                            user: 'root',
                            password: null,
                            database: 'seoapp',
                    }); 
                    app.get('/user', function (req, res) {
                            var sql = 'SELECT * FROM `domain` ';
                            pool.query(sql, function (error, result) {
                                    if (error) throw error;
                                    res.json(result);
                                   event.sender.send('topurl',result)
                                //  event.returnValue = result
                              //    console.log(result)
                            });
                          //  console.log(typeof result)
                    });
                    app.listen('2244', '127.0.0.1')*/
                // request('http://localhost:2244/user')

                //   
                /*  ipc.on('getdata',function(event,arg){
                          var senddata = require('./connectMySQL.js').connectdatabase()
                           senddata.query('SELECT * FROM domain',function(err,result){
                                    event.sender.send('topurl',result)  
                            })
                  })*/

        })
}