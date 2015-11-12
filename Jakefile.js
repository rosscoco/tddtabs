




(function()
{
	
	var DEPLOY_DIR = ".";

	desc("Launching HTTP: .")
	task("http", function()
	{
		jake.exec("node_modules/http-server/bin/http-server/" + DEPLOY_DIR, {interactive:true}, complete );
	})

	desc("Checking Node Version: .")
	task("checkver", function()
	{

	})
}())

