(function()
{
	"use strict";

	var addition = require("./addition.js");
	var assert = require("chai").assert;

	describe("Addition", function()
	{
		it("Adds two numbers", function()
		{
			assert.equal( addition.add( 3,4 ), 7 );
		});
	});
}());