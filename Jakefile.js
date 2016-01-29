/* globals task:false, desc:false, complete:false, fail:false,  jake:false */
(function()
{
	"use strict";

	var DEPLOY_DIR	= ".";
	var KARMA_CONFIG = "./karma.conf.js";

	var jsHint = require("simplebuild-jshint");
	var semver = require("semver");
	var karma	= require("simplebuild-karma");
	

	desc("Building Project: .");

	task("default",["checkversion","lint","http", "karma-start"], function()
	{
		console.log("Build OK!");
	});

	desc("Checking Node Version: .");
	task("checkversion", function()
	{
		console.log("Checking Node Version: .");

		var expectedVersion = require("./package.json").engines.node;
		var actualVersion	= process.version;

		if ( semver.neq( actualVersion, expectedVersion ) )
		{
			fail("Expected Node Version " + expectedVersion + ", got " + actualVersion );
		}
	});

	desc("Launching HTTP: .");
	task("http", function()
	{
		jake.exec("node_modules/http-server/bin/http-server " + DEPLOY_DIR, {interactive:true}, complete );
	});

	desc("Linting JS Files: .");
	task("lint", function()
	{
		console.log('Linting JS: .');

		jsHint.checkFiles( { 	files:["Jakefile.js", "./src/**/*.js"],
								options:lintingOptions(),
								globals:lintingGlobals()
							},	complete, fail );
	});

	desc("Starts the Karma server process");
	task("karma-start", function()
	{
		karma.start({configFile:KARMA_CONFIG}, complete, fail );
	});

	desc("Running Karma Tests: .");
	task("karma-test", function()
	{
		karma.run({configFile:KARMA_CONFIG,
			expectedBrowsers:["Firefox 42.0.0 (Mac OS X 10.6.0)"],
			strict:false } , complete, fail );
	});

	function lintingOptions()
	{
		return {
		    "bitwise": "true",
		    "eqeqeq": "true",
		    "forin": "true",
		    "freeze": "true",
		    "futurehostile": "true",
		    "latedef": "nofunc",
		    "noarg": "true",
		    "nocomma": "true",
		    "nonbsp": "true",
		    "nonew": "true",
		    "strict": "true",
		    "undef": "true",
		    "node": "true",
		    "browser": "true"
  		};
	}

	function lintingGlobals()
	{
		return { 
			describe:false,
			it:false,
			before:false,
			beforeEach:false,
			after:false,
			afterEach:false
		};	
	}

}());

