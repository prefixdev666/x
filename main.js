"use strict";

/* classes */
const Cache = require("./app/modules/Cache.js");
const Server = require("./app/modules/Server.js");

/* helpers */
const cache = new Cache(); // build the cache
const server = new Server();

/* start the server */
server.start();