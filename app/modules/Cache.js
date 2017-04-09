/* node modules */
const fs = require("fs");

/* classes */
const Library = require("./Library.js");

/* helpers */
const library = new Library();
const settings = require("./settings.js");

/* cache *********************************************************************/
/*****************************************************************************/
let cache =
{
  /* @@-<build ***************************************************************/
  /***************************************************************************/
  build : function()
  {
    let content = {};

    const IndexController = require("../templates-control/IndexController.js");
    const indexController = new IndexController;

    content["index"] = indexController;

    this.html = content;
  }
}

/* export */
module.exports = cache;