exports.checklogin = function (username, password, callback) {
    const dialog = require('electron').dialog
    var checklogin = require('./connectMySQL.js').connectdatabase()
   // query.connect()
    checklogin.query(`SELECT * from user where taikhoan ='${username}' and matkhau ='${password}' `, function (err, rows) {
        if (err)
            throw err
        if (rows == '') {
            dialog.showErrorBox('', 'Sai tài khoản hoặc mật khẩu')
        }
        else {
            checklogin.end()
            callback(1)
            require('./manager.js').manager()
        }
    })
}
