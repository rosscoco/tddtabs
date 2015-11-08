
var DEPLOY_DIR = ".";

(function()
{
	desc("Launching HTTP: .")
	task("http", function()
	{
		jake.exec("node_modules/http-server/bin/http-server/" + DEPLOY_DIR, {interactive:true}, complete );
	})
}())

