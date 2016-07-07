var should = require('should');
	tsConverter = require('../timestampConverter.js');

describe('timestamp conversion', function() {
	it('should return null for an invalid unix timestamp', function() {
		var input = "239842384982394";
		var expectedOutput = {"unix": null, "natural": null};

		var output = tsConverter.processQuery(input);

		output.should.be.eql(expectedOutput);
	});

	it('should correctly parse a natural date', function() {
		var input = "January 2, 1990";
		var expectedOutput = {"unix": 631238400, "natural": "January 2, 1990"};

		var output = tsConverter.processQuery(input);

		output.should.be.eql(expectedOutput);
	})

});