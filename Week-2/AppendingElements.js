var div = document.createElement("div");
var h1 = document.createElement("h1");
h1.textContent = "Welcome to my JS site";



var newP = document.createElement('p');
newP.textContent = 'All of this was created with Javascript';



var ol = document.createElement("OL");
var li = document.createElement('LI');
var text = document.createTextNode("this is a list");



li.appendChild(text);
ol.appendChild(li);
div.appendChild(ol);
div.appendChild(h1);
div.appendChild(newP);
document.body.appendChild(div);
