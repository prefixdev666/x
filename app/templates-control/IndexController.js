/* node modules */
const fs = require("fs");
const mu = require("mu2");

/* classes */
const Controller = require("../modules/Controller.js");

/* helpers */
const settings = require("../modules/settings.js");

/* @-<IndexController ********************************************************/
/*****************************************************************************/
class IndexController extends Controller
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  { 
    var f = super();
    
    this.classId = this.constructor.name.split("Controller")[0].toLowerCase();
    
    if(this.classId === "index"){ this.classId = ""; }

    // Object.getOwnPropertyNames(Object.getPrototypeOf(this)) - get all calss methods
    
    return { html : this.renderDefault() };
  }

  renderDefault()
  {
    /* helpers */
    let controllerData = {};
    let data = {};    
    const methodId = "default";
    const jsonData = JSON.parse(fs.readFileSync(settings.root + "/app/templates-data/" + this.classId + "/" + methodId + ".json", "utf8"));
    
    /* connect controller + .json data and compile the template */
    data = { controllerData, jsonData };
    const compiledTemplate = mu.compileAndRender(settings.root + "/app/templates-view/" + this.classId + "/" + methodId + ".mustache", data);

    /* event - data - compiledTemplate ***************************************/
    return compiledTemplate.on("data", function(data)
    {
      return data.toString();
    });    
  }
}

/* Export */
module.exports = IndexController;