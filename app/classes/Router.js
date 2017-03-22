class Router
{
  constructor()
  {}

  output(request)
  {
    if(request === "/")
    {
      return "ABCD";
    }
  }
}

module.exports = Router;