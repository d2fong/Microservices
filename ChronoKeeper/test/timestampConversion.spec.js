var should = require('should');
	tsConverter = require('../timestampConverter.js');

describe('timestamp conversion', function() {
	it('should return a JSON repsonse', function() {
		var input = "239842384982394";
		var expectedOutput = {"unix": null, "natural": null};

		var output = tsConverter.processQuery(input);

		should.equal(output, expectedOutput);
	})
});