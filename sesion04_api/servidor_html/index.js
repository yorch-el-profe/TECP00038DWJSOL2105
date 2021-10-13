const http = require("http");
const fs = require("fs");

/*
  Operaciones bloqueantes son: lectura de archivos,
  consultas a bases de datos, peticiones a servidores externos.

  Node.js es NO BLOQUEANTE
*/
const server = http.createServer(function (request, response) {
  /*
    Callback: Funciones que se ejecutan en el futuro
    después de determinada acción

    Programación asíncrona

    Las instrucciones se ejecutan en "desorden"
  */
  fs.readFile("./index.html", "utf-8", function (err, html) {
    if (err) {
      response.write("Ocurrión un error inesperado...");
    } else {
      response.write(html);
    }

    response.end();
  });
});

server.listen(8080);
