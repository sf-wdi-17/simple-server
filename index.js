var express = require('express'),
	ejs = require("ejs"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");

var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.render("index", {tsum: "", tsub: "", tmult: "", tdiv: ""});
})


app.post('/', function(req, res) {
	console.log(req.body);
	var sum = Number(req.body.firstSum) + Number(req.body.secondSum) || "";
	var sub = Number(req.body.firstSub) - Number(req.body.secondSub) || "";
	var mult = Number(req.body.firstMult) * Number(req.body.secondMult) || "";
	var div = Number(req.body.firstDiv) / Number(req.body.secondDiv) || "";
	res.render("index", {tsum : sum, tsub : sub, tmult : mult, tdiv : div});
})

// app.post('/sum', function(res,req) {
// 	res.redirect('/');
// })


app.listen(3000);