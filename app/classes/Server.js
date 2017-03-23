/* required classes */
const Router = require("./Router.js");
const Settings = require("./Settings.js");

/* required node modules */
const http = require("http");

/* helpers */
const router = new Router();
const settings = new Settings();

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

      /* send request url to the router and get correct content in return */
      this.content = router.output(request.url);

      /* response */
      response.end(this.content);
    });

    server.listen(settings.port, settings.address);

    return true;
  }
}

/* export */
module.exports = Server;