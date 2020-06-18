var menu = document.getElementById('menu')
var a = 1
var Menu = "opened"
var searchButton = document.getElementById('button')
var search = document.getElementById('input').value
function key() {
	if (a == 1) {
		Menu = "closed"
		a = 2
	}else if (a == 2) {
		Menu = "opened"
		a = 1
	}
};