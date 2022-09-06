function display() { var value = document.getElementById("cod ").value; if (value != "استعرض الكود") { document.bgCod = value; document.cookie = "cod=" + value; } } window.onload = function () { if (document.cookie.length != 0) { var array = document.cookie.split("="); document.getElementById("cod").value = array[1]; document.bgCod = array[1]; } 
} 
function getValues() {
var options = document.getElementById('cod').options;
var options_count = document.getElementById('cod').options.length;
var value = [];

for(var i = 0; i < options_count; i++) {
if(options[i].selected) {
value.push(options[i].value);
}
}

alert(JSON.stringify(value));
}

