var moment = require('moment');


// Input: query string
// Output: the unix timestamp and date corresponding to the string,
//         null if it does not match a timestamp
var processQuery = function(queryStr) {
	var isNum = /^\d+$/.test(queryStr);
	var output = {
		"unix": null,
		"natural": null
	};
	if (isNum === true) {
		var months = [
			'January','February','March',
			'April','May','June',
			'July','August','September',
			'October','November','December'
		];

		var timestamp = parseInt(queryStr);
		if (timestamp === 0) {
			output["natural"] = "January 1 1970";
			output["unix"] = 0;
		} else {
			var date = new Date(timestamp*1000);
			var month = months[date.getMonth()],
				day = date.getDate(),
				year = date.getFullYear(),
				hour = date.getHours(),
				min = date.getMinutes(),
				sec = date.getSeconds();

				var naturalDate = month + ' ' + day + ' ' + year;
				+ ' ' + hour + ' ' + ' ' + min + ' ' + sec;
			if(date != "Invalid Date") {
				console.log("HERE ");
				output["natural"] = naturalDate;
				output["unix"] = timestamp;
			}
		}
	} else {
		var parsedDate = moment(queryStr);
		if(parsedDate.isValid()) {
			var unixEpoch = parsedDate.unix();

			output["natural"] = parsedDate.format("MMMM D YYYY");
			output["unix"] = unixEpoch;
		}
	}
	return output;
};

exports.processQuery = processQuery;