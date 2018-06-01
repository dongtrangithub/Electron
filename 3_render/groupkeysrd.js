const ipc = require('electron').ipcRenderer
var groupname = document.getElementById('groupname')
var domian = document.getElementById('domian')
var keys = document.getElementById('keys')
var buttonthem = document.getElementById('btnthem')
var ulmenu = document.getElementById('ulmenu')
var test = document.getElementById('test')
var test = document.getElementById('test')
var viewgroup = document.getElementById('viewgroup')
var tabcontent = document.getElementById("tabcontent");
var table = document.getElementById("table");
function loaddata(arg) {
  $('#ulmenu li').remove()
  var tr1 = document.createElement('tr');
  var td1 = document.createElement('td');
  for (i = 0; i < arg.length; i++) {
    li = document.createElement('li');
    a = document.createElement('a');
    a.setAttribute('data-toggle', 'pill')
    a.setAttribute('href', `#menu${i}`)
    text1 = document.createTextNode(arg[i].group);
    a.appendChild(text1)
    li.appendChild(a);
    ulmenu.appendChild(li)
    // createElement(i)
    //------///
    divmenu = document.createElement('div')
    h3 = document.createElement('h3')
    text1 = document.createTextNode('Từ khóa');
    
    divmenu.setAttribute('id', `menu${i}`)
    divmenu.setAttribute('class', 'tab-pane fade')
    divtable = document.createElement('div')
    button = document.createElement('button')
    span = document.createElement('span')
    text1 = document.createTextNode('Cập nhật');
    span.setAttribute('class', `glyphicon glyphicon-refresh`)
    $(button).attr({
      'class' :"btn btn-success",
       'style':"margin-top:40px",
    })
    button.appendChild(span)
    button.appendChild(text1)
    
    table1 = document.createElement('table')
    $(divtable).attr(
      {
        "height": '300px',
        "overflow": 'auto',
        "width": '500px'
      });     
    tr1 = document.createElement('tr');
    th1 = document.createElement('th');
    $(th1).attr(
      {
        "border": '1px solid #dddddd',
		  	"text-align": 'left',
		    	"padding": '8px'
      });
    th2 = document.createElement('th');
    $(th2).attr(
      {
        'border': '1px solid #dddddd',
		  	'text-align': 'left',
		    	'padding': '8px'
      });
    text1 = document.createTextNode('Từ khóa');
    text2 = document.createTextNode('Thứ hạng');
    th1.appendChild(text1)
    th2.appendChild(text2)
    tr1.appendChild(th1)
    tr1.appendChild(th2)
    table1.appendChild(tr1)
    for (a = 0; a < arg[i].data.length; a++) {
      if (arg[i].data[a].nhom == arg[i].group) {
        texth3 = document.createTextNode(`${arg[i].data[a].tenmien}`);
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
         $(td1).attr(
      {
        'border': '1px solid #dddddd',
		  	'text-align': 'left',
		    	'padding': '8px'
      });
    th2 = document.createElement('th');
    $(td2).attr(
      {
        'border': '1px solid #dddddd',
		  	'text-align': 'left',
		    	'padding': '8px'
      });
        var text1 = document.createTextNode(arg[i].data[a].tukhoa);
        if(arg[i].data[a].thuhang==0)
        var text2 = document.createTextNode('ko có trong top 100');
        else
        var text2 = document.createTextNode(arg[i].data[a].thuhang);
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        table1.appendChild(tr);
      }
    }
    h3.appendChild(texth3)
    divtable.appendChild(table1)
    divmenu.appendChild(h3)
    divmenu.appendChild(divtable)
    divmenu.appendChild(button)
    tabcontent.appendChild(divmenu)
  }
}
function createtrtd() {
  for (a = 0; a < arg.data.length; a++) {
    
    if (arg.data[a].nhom == arg[i].group) {
     
      var tr = document.createElement('tr');
      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var text1 = document.createTextNode(arg.data[a].tukhoa);
      var text2 = document.createTextNode(arg.data[a].thuhang);
      td1.appendChild(text1);
      td2.appendChild(text2);
      tr.appendChild(td1);
      tr.appendChild(td2);
      table1.appendChild(tr);
    }
  }
}

viewgroup.addEventListener('click', function () {
  $('#ulmenu li').remove()
  ipc.send('loaddata')
  ipc.on('loaddata', function (event, arg) {
    loaddata(arg)
  })
})
buttonthem.addEventListener('click', function () {
  //$('#ulmenu li').remove()
  function abc() {
        var array = keys.value.split('\n')
        return array
  }
  ipc.send('insertdata',{groupname:groupname.value,domian:domian.value,array:abc()})
  groupname.value = ''
  domian.value = ''
  keys.value = ''
  ipc.on('insertdata', function (event, arg) {
    loaddata(arg)
  })
})







