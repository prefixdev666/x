/* @-<Router *****************************************************************/
/*****************************************************************************/
class Router
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {}

  /* @@output ****************************************************************/
  /***************************************************************************/
  output(request)
  {
    if(request === "/")
    {
      return "ABCD";
    }
  }
}

/* Export */
module.exports = Router;