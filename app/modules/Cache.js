/* required node modules */
const fs = require("fs");

/* required classes */
const Library = require("./Library.js");

/* helpers */
const library = new Library();
const settings = require("./settings.js");

/* @-<Cache ******************************************************************/
/*****************************************************************************/
class Cache
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {
    this.html = this.build();
  }

  /* @@-<build ***************************************************************/
  /***************************************************************************/
  build()
  {
    let content = {};
    
    const IndexController = require("../templates-control/IndexController.js");
    const indexController = new IndexController;

    content.index = indexController.renderDefault();

    return content;
  }
}

/* export */
module.exports = Cache;