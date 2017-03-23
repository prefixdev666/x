/* required node modules */
const path = require("path");

/* @-<Settings ***************************************************************/
/*****************************************************************************/
class Settings
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {
    this.address = "127.0.0.1";
    this.port = 3000;
    this.root = path.resolve(__dirname + "/../..");
  }
}

/* export */
module.exports = Settings;