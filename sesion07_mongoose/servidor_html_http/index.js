const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  if (request.url === "/") {
    fs.readFile("./index.html", "utf-8", function (err, html) {
      if (err) {
        response.write("Ocurrió un error al leer el archivo index.html");
      } else {
        response.write(html);
      }

      response.end();
    });
  } else if (request.url === "/about") {
    fs.readFile("./about.html", "utf-8", function (err, html) {
      if (err) {
        response.write("Ocurrió un error al leer el archivo about.html");
      } else {
        response.write(html);
      }

      response.end();
    });
  } else {
    response.write("404 Not Found");
    response.end();
  }
});

server.listen(8080);
