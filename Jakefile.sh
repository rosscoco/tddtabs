var 

describe("Launching HTTP: .")
task("http", function()
{
	jake.exec("node_modules/http-server/bin/http-server");
})