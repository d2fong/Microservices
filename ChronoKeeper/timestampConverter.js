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
		var timestamp = parseInt(queryStr);
		var unixEpoch = moment.unix(timestamp);
		var naturalDate = unixEpoch.format('MMMM D YYYY');

		if(naturalDate !== "Invalid date") {
			output["natural"] = naturalDate;
			output["unix"] = timestamp;
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