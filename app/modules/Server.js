/* required classes */
const Router = require("./Router.js");

/* required node modules */
const http = require("http");

/* helpers */
const router = new Router();
const settings = require("./settings.js");

/* @-<Server *****************************************************************/
/*****************************************************************************/
class Server
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {}

  /* @@-<start ***************************************************************/
  /***************************************************************************/
  start()
  {
    let server = http.createServer(function(request, response)
    {
      /* headers */
      response.writeHead(200, {"Content-Type" : "text/html"});  

      if(request.method === "GET") // GET
      {
        /* send request url to the router and get correct content in return */
        this.content = router.navigate(request.url);
      }
      else if(response.method === "POST") // POST
      {
        console.log("POST");
      }

      /* response */
      response.end(this.content);
      
      return true;
    });

    server.listen(settings.port, settings.address);

    return true;
  }
}

/* export */
module.exports = Server;