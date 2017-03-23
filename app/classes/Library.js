/* required node modules */
const fs = require("fs");

/* @-<Library ****************************************************************/
/*****************************************************************************/
class Library
{
  /* @@-<constructor *********************************************************/
  /***************************************************************************/
  constructor()
  {}

  /* @@filePathToUrl | converts path to url | returns url ********************/
  /***************************************************************************/
  filePathToUrl(filePath, root) // <filePath>[string], <root>[string]
  {
    let url = filePath.replace(/[\\\/]/g, "/").replace(root.replace(/[\\\/]/g, "/"), "").replace(".mustache", "").replace("index", ""); // unify slashes (from filePath and root) and remove .mustache and index string

    if(url[url.length-1] === "/" && url.length > 1) // remove last slash from the url (except homepage)
    {
      url = url.slice(0, -1);
    }

    return url;
  }

  /* @@inArray | checks if value is contained within an array | returns true/false */
  /*********************************************************************************/
  inArray(value, array) // <value>[string], <array>[array]
  {
    for(let i = 0; i < array.length; i++)
    {
      if(array[i] === value)
      {
        return true;
      }
    }

    return false;
  }

  /* @@readDirectoryDeep | returns all file and folder names contained within a directory */
  /****************************************************************************************/
  readDirectoryDeep(directoryPath) // <directoryPath>[string]
  {
    let filePaths = [];
    let path;
    let paths = [];

    paths = fs.readdirSync(directoryPath, "utf8");

    for(let i = 0; i < paths.length; i++)
    {
      path = directoryPath + "/" + paths[i];

      if(fs.statSync(path).isFile() === true)
      {
        filePaths.push(path);
      }
      else
      {
        filePaths = filePaths.concat(this.readDirectoryDeep(path));
      }
    }

    return filePaths;
  }

  /* @@removeFromArray | removes characters (specified by index and count) from an array */
  /***************************************************************************************/
  removeFromArray(index, count, array) // <index>[int], <count>[int], <array>[array]
  {
    let newArray = [];

    for(let i = 0; i < array.length; i++)
    {
      if(i < index || i >= index + count)
      {
        newArray.push(array[i]);
      }
    }

    return newArray;
  }
}

/* export */
module.exports = Library;