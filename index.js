var express = require('express');

var app = express();

app.get('/', function(req, res) {
   res.send("<h1>Instructions:</h1><p>To add numbers, visit /sum/[first number]/[second number]</br>To subtract numbers, visit sub/[first number]/[secondnumber]</br>To multiply numbers, visit /mult/[first number]/[second number]</br>To divide numbers, visit /div/[first number]/[second number]</p>") // Your HTML would go here. 
});

app.get('/sum/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x + y;
	res.send(x + " + " + y + " = " + sum);
});

app.get('/sub/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x - y;
	res.send(x + " - " + y + " = " + sum);
});

app.get('/mult/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x * y;
	res.send(x + " * " + y + " = " + sum);
});

app.get('/div/:x/:y', function(req, res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x / y;
	res.send(x + " / " + y + " = " + sum);
});

app.listen(3000);