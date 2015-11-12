




(function()
{

	var DEPLOY_DIR = ".";

	desc("Building Project: .")
	task("default",["lint"], function()
	{
		console.log("Build OK!");
	})

	desc("Launching HTTP: .")
	task("http", function()
	{
		jake.exec("node_modules/http-server/bin/http-server/" + DEPLOY_DIR, {interactive:true}, complete );
	})

	desc("Linting JS Files: .")
	task("lint", function()
	{
		//jake.exec("node_modules/jshint/bin/jshint ./**/*.js", complete, fail);
	// /	jake.exec("./node_modules/jshint/bin/jshint ./Jakefile.js", {},complete );
	})


	desc("Checking Node Version: .")
	task("checkver", function()
	{

	})
}())

