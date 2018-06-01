const ipc = require('electron').ipcRenderer
var keyword = document.getElementById('keyword')
var domian = document.getElementById('domain')
var button = document.getElementById('button')
var rank = document.getElementById('rank')
var url = document.getElementById('test')
const remote = require('electron').remote
const main = remote.require('D:/electron/doan/4_main/seach.js')

button.addEventListener('click', function () {
    function abc() {
        var array = keyword.value.split('\n')
        return array
    }
    ipc.send('data', {domian:domian.value,array:abc()})
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
    td21.style.width = "200px"
    var td22 = document.createElement('td');
    var text21 = document.createTextNode('Từ Khóa');
    var text22 = document.createTextNode('Thứ Hạng');
    td21.appendChild(text21);
    td22.appendChild(text22);
    tr2.appendChild(td21);
    tr2.appendChild(td22);
    table.appendChild(tr2);
   /* for (var i = 0; i < arg.length; i++) {
        if (arg[i].indexOf(domian.value) != -1 && domian.value != '') {
            rank.innerHTML = `Trang web đứng top ${i + 1}`
            break
        }
        else
            rank.innerHTML = `Trang web ko nằm trong top 100`
    }*/
})
ipc.on('senddata',function(event,reply){
   
 
    for (var i = 0; i < reply.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var text1 = document.createTextNode(reply[i].key);
        var text2 = document.createTextNode(reply[i].position);
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }

})


     





