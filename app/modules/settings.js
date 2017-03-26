/* required node modules */
const path = require("path");

/* settings ******************************************************************/
/*****************************************************************************/
const settings =
{
  address : "127.0.0.1",
  port : 3000,
  root : path.resolve(__dirname + "/../..")
}

/* export */
module.exports = settings;