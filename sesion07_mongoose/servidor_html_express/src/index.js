const express = require("express");
const path = require("path");

// 1. Instanciar un servidor
// http -> http.createServer(function ....)
const server = express();

// 2. ¿?

// 3. Definir las distintas rutas de mi Backend
// /, /about
server.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, "../templates/index.html"));
});

server.get("/about", function (request, response) {
  response.sendFile(path.join(__dirname, "../templates/about.html"));
});

// 4. Escuchar un puerto
server.listen(8080);
