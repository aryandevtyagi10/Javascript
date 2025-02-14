// var name = prompt("Compose your tweet");
// // var len = name.length;
// len = name.slice(0,14);
// alert("length of your naeme is " + len);
// // var name = "Aryan dev tyagi";

var name = prompt("What is your name?");
var firstchar = name.slice(0,1);
var upperchar = firstchar.toUpperCase();
var isolate = name.slice(1,name.length);
var lwisolate = isolate.toLowerCase();
var capitalname = upperchar + lwisolate;
alert ("Hello " + capitalname)