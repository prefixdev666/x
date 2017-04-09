"use strict";

/* node modules */
const path = require("path");

/* classes */
const Server = require("./app/modules/Server.js");

/* helpers */
const cache = require("./app/modules/cache.js").build(); // build the cache
const server = new Server();

/* start the server */
server.start();