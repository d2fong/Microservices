var express = require('express'),
	moment = require('moment');
var app = express();

app.set('view engine', 'ejs');

// The default route optionally accepts a timestamp parameter
// as input
//
app.get('/:timestamp?', function(req, res) {

	var timestamp = req.params.timestamp;

	if (typeof(timestamp) === 'undefined') {
		res.render('default');
	} else {
		var respData = processQuery(timestamp);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify(respData));
	}
});

// Input: query string
// Output: the unix timestamp and date corresponding to the string,
//         null if it does not match a timestamp
var processQuery = function(queryStr) {
	var isNum = /^\d+$/.test(queryStr);
	if (isNum === true) {
		var timestamp = parseInt(queryStr);
		var date = moment.unix(timestamp)
		return date;
	} else {
		// TODO: handle the case when a string does not match a number 
	}
};


app.get('*', function(req, res) {
	res.send('Invalid Route.')
})

var server = app.listen(8080, function() {
	console.log('Listening on port 8080')
})