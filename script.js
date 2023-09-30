
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

const setTheme = theme => document.documentElement.className = theme;




function changeFontSize(type) {


	let ids = ['#fontSizeIn', '#fontSizeDe', '#fontSizeDes', '#fontSizeDes1', '#fontSizeDes2', '#fontSizeDes3', '#fontSizeDes4', '#fontSizeDes5', '#fontSizeDes6', '#fontSizeDes7', '#fontSizeDes8', '#fontSizeDes9', '#fontSizeDes10',  '#fontSizeIn1']

	ids.forEach(id => {
		let el = document.querySelector(id);

		let fontSize = window.getComputedStyle(el, null).getPropertyValue("font-size")

		fontSize = parseFloat(fontSize)
// if(type === normal){
// 	el.style.fontSize = '1rem'
// }

		if (type === "increase") {
			el.style.fontSize = (fontSize + 5) + "px"
		}
		else {
			el.style.fontSize = (fontSize - 5) + "px"

		}
	})
}