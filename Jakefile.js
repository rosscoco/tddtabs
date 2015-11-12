/* globals task:false, desc:false, complete:false, fail:false,  jake:false */




(function()
{
	"use strict";

	var DEPLOY_DIR = ".";
	var jsHint = require("simplebuild-jshint");

	desc("Building Project: .");
	task("default",["lint"], function()
	{
		console.log("Build OK!");
	});

	desc("Launching HTTP: .");
	task("http", function()
	{
		//jake.exec("node_modules/http-server/bin/http-server/" + DEPLOY_DIR, {interactive:true}, complete );
	});

	desc("Linting JS Files: .");
	task("lint", function()
	{
		console.log('Linting JS: .');

		jsHint.checkFiles( { 	files:["Jakefile.js"],
								options:lintingOptions(),
								globals:lintingGlobals()
							},	complete, fail);
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

