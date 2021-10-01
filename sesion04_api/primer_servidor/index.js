const http = require("http");

// Crear un servidor
const server = http.createServer(function (request, response) {
  console.log("Recibí una petición :)");

  // Escribe un texto en el body de la respuesta
  response.write("Hello World");

  // Ya se terminó la petición y se cierra la conexión con el cliente
  response.end();
});

server.listen(8080);
