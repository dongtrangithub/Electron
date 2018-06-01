const ipc = require('electron').ipcRenderer
var keyword = document.getElementById('keyword')
var domian = document.getElementById('domain')
var button = document.getElementById('button')
var rank = document.getElementById('rank')
var url = document.getElementById('test')
const remote = require('electron').remote
const main = remote.require('D:/electron/doan/4_main/seach.js')
button.addEventListener('click', function () {
    ipc.send('sendseach', { keyword: keyword.value, domian: domian.value })
    var Table = document.getElementById("table");
    $("#table tr").remove();
    var tr1 = document.createElement('tr');
    var td1 = document.createElement('td');
    td1.setAttribute("colspan", "2");
    var text1 = document.createTextNode('Google Result');
    td1.appendChild(text1);
    tr1.appendChild(td1);
    table.appendChild(tr1);
    var tr2 = document.createElement('tr');
    var td21 = document.createElement('td');
    td21.style.width = "40px"
    var td22 = document.createElement('td');
    var text21 = document.createTextNode('Rank');
    var text22 = document.createTextNode('Url');
    td21.appendChild(text21);
    td22.appendChild(text22);
    tr2.appendChild(td21);
    tr2.appendChild(td22);
    table.appendChild(tr2);
})
ipc.on('reseach', function (event, arg) {
    for (var i = 0; i < arg.length; i++) {
        if (arg[i].indexOf(domian.value)!= -1 && domian.value!='' ) {
            rank.innerHTML = `Trang web đứng top ${i + 1}`
            break
        }
        else
         rank.innerHTML = `Trang web ko nằm trong top 100`
    }
    for (var i = 0; i < arg.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var text1 = document.createTextNode(i + 1);
        var text2 = document.createTextNode(arg[i]);
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
        if (arg[i].indexOf(domian.value) != -1&&domian.value!='') {
          //  rank.innerHTML = `Trang web đứng top ${i + 1}`
            td1.style.color = "red"
            td2.style.color = "red"
        }     
    }
})





