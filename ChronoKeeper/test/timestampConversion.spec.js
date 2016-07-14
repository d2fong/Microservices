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
		var expectedOutput = {"unix": 631256400, "natural": "January 2 1990"};

		var output = tsConverter.processQuery(input);

		output.should.be.eql(expectedOutput);
	});

	it('should correctly interpret a unix timestamp', function() {
		var input = "0";
		var expectedOutput = {"unix": 0, "natural": "January 1 1970"};
		
		var output = tsConverter.processQuery(input);

		output.should.be.eql(expectedOutput);
	});

	it('should correctly map these inputs to outputs', function() {
		var inputs = ["February 1 2121"];
		var expectedOutput = [
			{
				"unix": 4767829200,
				"natural": "February 1 2121"
			}
		];

		var outputs = inputs.map(function(input) {
			return tsConverter.processQuery(input);
		});

		outputs.map(function(timestamp, i) {
			timestamp.should.be.eql(expectedOutput[i]);
		});
	});	

});