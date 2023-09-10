/*function sum(ih,baga){
	if(i>d){
		console.log(i)
	}else{
		console.log(d)
	}
}
sum(12,10);*/

var body = document.getElementsByTagName('body')[0];
random = Math.floor(Math.random()*9);
console.log(body);
var colors = ['brown','yellow','grey','pink','red','aqua','blue','green','orange'];
var i=-1;
function color(){
	i++;
	body.style.backgroundColor=colors[i];
	if(i>=colors.length-1){
		i=-1;
	}
}
var btn = document.getElementsByTagName('button')[0];
random = Math.floor(Math.random()*9);
console.log(btn);
var buttons = ['brown','yellow','grey','pink','red','aqua','blue','green','orange'];
var i=-1;
function color(){
	i++;
	body.style.backgroundColor=buttons[i];
	btn.innerText = colors[i];
	if(i>=buttons.length-1){
		i=-1;
	}
}