
var node_list=document.getElementsByTagName("LI");
var i;
for(i=0;i<node_list.length;i++){
	var span=document.createElement("SPAN");
	var txt=document.createTextNode("/u00D7");
	span.className="close";
	span.appendChild(txt);
	node_list[i].appendChild(span);
}


var close=document.getElementsByClassName("close");
for(i=0;i<close.length;i++){
	close[i].onclick=function(){
		var div=this.parentElement;
		div.style.display="none";
	}
}

var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
if(ev.target.tagName==='li'){
	ev.target.classList.toggle('checked');
	alert("checked ");
	}
},false);



function newElement(){
	var li=document.createElement("li");
	var input_value=document.getElementById("input").value;
	var t=document.createTextNode(input_value);
	li.appendChild(t);
	if(input_value==""){
		alert("Write Something!");
	}
	else{
		document.getElementById("myList").appendChild(li);
	}
	document.getElementById("input").value="";

	var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

}

