counter// this is a single-line comment

inArray
beginWith
redirectPage
/*
* This is a block comment that can
* span multiple lines
*/
var a = 10;
var b = 20;
if( a > b) {
   console.log('a is greater than b');
   return 1;
}
2 + 1
a+a
var message;
message = "Hello";
var variableName = value;
var message = "Hello";
var message = "Hello",
    counter = 100;
    message = 100;
    var message;

console.log(message); // undefined
console.log(counter); // ReferenceError: counter is not defined
function functionName() {
  // logic
}functionName();
function say() {
  var message = "Hi";
  return message;
}
function say() {
    var message = 'Hi';
}
console.log(message); // ReferenceError
// global variable
var message = "Hello";
function say() {
    // local variable
    var message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hello
// global variable
var message = "Hello";
function say() {
    // local variable
    message = 'Hi';
    console.log(message); // which message?
}
say();// Hi
console.log(message); // Hi
function say() {
    message = 'Hi'; // what?
    console.log(message);
}
say(); // Hi
console.log(message); // Hi
"use strict";

function say() {
    message = 'Hi'; // ReferenceError
    console.log(message);
}
say(); // Hi
console.log(message); // Hi
console.log(message); // undefined
var message;
var message;
console.log(message); // undefined
console.log(counter);
var counter = 100;
var counter;
console.log(counter); // undefined
counter = 100;
var counter;
var counter;
counter = 1;
console.log(counter); // 1
var a = 20, b = 10;
{
    let tmp = a;
    a = b;
    b = tmp;
}
console.log(tmp); // ReferenceError
const pi= 3.14;
pi = 3.141; // TypeError: `code` is read-only
