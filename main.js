var current = "powderblue";
var next = "red";

function changeBackgroundColor(){
	document.body.style.backgroundColor = next;
	let temp = current;
	current = next;
	next = temp;
}


