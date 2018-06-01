exports.manager = function () {
    const {app, BrowserWindow} = require('electron')
    win = new BrowserWindow({ width: 1100, height: 700 })
    win.loadURL('file://D:/electron/doan/3_render/manager.html')
   

  require('./seach.js').seach()
  require('./seachmany.js').seach()
  require('./groupkey.js').addgroup()
   
}
