var sys = require('sys'),
	daemonize = require('./fork').daemonize;

console.log("Going rogue.");
daemonize();
console.log("Anything?");

var timer = setTimeout(function () {
	clearTimeout(timer);
}, 15000);
