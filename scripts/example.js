function showpic(wh) {
	var source = wh.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = wh.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}

function count(){
	var body_element = document.getElementsByTagName('body')[0];
	alert (body_element.childNodes.length);
}

function popUP(winURL){
	window.open(winURL,"popup","width=320,height=480");
}
