const {app, BrowserWindow} = require('electron')
const ipc = require('electron').ipcMain
const dialog = require('electron').dialog
let win
app.on('ready', () => {
  win = new BrowserWindow({ width: 1100, height: 700 })
  win.loadURL('file://D:/electron/doan/3_render/DN.html')
  ipc.on('asynchronous-message', function (event, arg) {
    require('./checklogin.js').checklogin(arg.username, arg.password, function (data) {
      if (data == 1)
        win.hide()
    })
  })
})






