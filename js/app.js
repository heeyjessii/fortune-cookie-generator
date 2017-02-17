/*function hi() {
  var changeDiv = document.getElementById("fortune-cookie-text");
  changeDiv.innerHTML = "You will be " + i;
  console.log(changeDiv);
}*/

var fortunes = ["You will be happy" , "Life's gonna bite you on the butt" , "Life will be difficult, but it'll be worth it in the end" , "You will be rich" , "You're gonna be poooor"];
var fortune = "";
var saidAll=false;

function hi() {
	if (saidAll==false) {
		var button = document.getElementById('onlyButton');
		var box = document.getElementById('fortune-cookie-text');
		var list = document.getElementById('list');
		var li = document.getElementById('li');
		button.innerHTML = "Keep Clicking Me!";

		if(fortune!= "") {
			var node = document.createElement('LI');
			var textnode = document.createTextNode(fortunes);
			node.appendChild(textnode);
			document.getElementById("list").appendChild(node);
		}
		if (fortunes.length>0) {
			var num;
			num - Math.floor(Math.random()*fortunes.length);
			fortune = fortunes[num];

			fortunes.splice(0, 1);
			box.innerHTML = + fortune;
		}
		else {
			button.innerHTML = "You ran out of fortunes, oops";
			saidAll=true;
		}
	}
}