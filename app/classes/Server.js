/* Classes */
const Router = require("./Router.js");

/* Node modules */
const http = require("http");

/* Settings */
const port = 3000;
const address = "127.0.0.1";

/* Helpers */
const router = new Router();

class Server
{
  constructor()
  {}

  init()
  { 
    let server = http.createServer(function(request, response)
    {
      response.writeHead(200, {"Content-Type" : "text/html"});
      
      this.content = router.output(request.url);

      response.end(this.content);
    });

    server.listen(port, address);
  }
}

module.exports = Server;