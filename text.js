
function checkcod() {
var fruit = document.getElementById("fruits").value;
switch(fruit) {
case "نيسان":
var amount = "$1.92"
document.getElementById("cod").innerHTML = "The cod of " + fruit + " is " + amount ;
break;
case "مرسيدس":
var amount = ("$6.32,2000.e230" )
document.getElementById("cod").innerHTML = "The cod of " + fruit + " is " + amount ;
break;
case "كيا":
var amount = "$3.11"
document.getElementById("cod").innerHTML = "The cod of " + fruit + " is " + amount;
break;
case "توتا":
var amount = "$2.87"
document.getElementById("cod").innerHTML = "The cod of " + fruit + " is " + amount;
break;
default:
document.getElementById("cod").innerHTML = "عفوا for the inconveniences, " + fruit + " is currently not available.";
}
}

