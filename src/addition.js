(function()
{
	"use strict";
	var assert = require('chai').assert;
	
	describe("Addition", function()
	{
		it("Adds two numbers", function()
		{
			assert.equal( add( 3,4 ), 7 );
		});
	});

	function add(a,b)
	{
		return a + b;
	}

	
}());
