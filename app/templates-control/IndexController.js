/* node modules */
const fs = require("fs");
const mu = require("mu2");

/* helpers */
const settings = require("../modules/settings.js");


/* @-<IndexController ********************************************************/
/*****************************************************************************/
class IndexController
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {
    this.classId = this.constructor.name.split("Controller")[0].toLowerCase();
    if(this.classId === "index"){ this.classId = ""; }

    this.renderDefault();
  }

  renderDefault()
  {
    /* helpers */
    let controllerData = {};
    let data = {};    
    const methodId = "default";
    const templateData = JSON.parse(fs.readFileSync(settings.root + "/app/templates-data/" + this.classId + "/" + methodId + ".json", "utf8"));
    
    /* connect controller + .json data and compile the template */
    data = { "a" : "b", templateData };
    const compiledTemplate = mu.compileAndRender(settings.root + "/app/templates-view/" + this.classId + "/" + methodId + ".mustache", data);

    /* event - data - compiledTemplate ***************************************/
    compiledTemplate.on("data", function(data)
    {
      console.log(data.toString());
    });    
  }
}

/* Export */
module.exports = IndexController;