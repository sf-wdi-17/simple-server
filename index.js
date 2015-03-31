var express = require('express');

var app = express();

app.get('/', function(req, res) {
   	res.send("<html><body><h1>Welcome to my browser calculator! Use the url window to add, subtract, multilpy, and divide.</h1></body></html>")

   })
 
 app.get('/add/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x + y;
	res.send("Sum is " +  sum);

})

	app.get('/sub/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x - y;
	res.send("Sum is " + sum);

})

	app.get('/times/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x * y;
	res.send("Sum is " + sum);

})

	app.get('/divide/:x/:y', function(req,res) {
	var x = Number(req.params.x);
	var y = Number(req.params.y);
	var sum = x / y;
	res.send("Sum is " + sum);

});

app.listen(3000);