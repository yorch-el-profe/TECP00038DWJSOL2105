const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const uri = "...";

mongoose.connect(uri);

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "users" }
);

const UserModel = mongoose.model("User", UserSchema);

const express = require("express");

const server = express();

// Express reconozca los json en el body
server.use(express.json());

server.get("/", function (request, response) {
  response.send("Hello World");
});

// Registro de usuarios
server.post("/register", function (request, response) {
  // Destructuring
  const { email, name, password } = request.body;
  /*
    const email = request.body.email;
    const name = request.body.name;
    const password = request.body.password;
  */

  new UserModel({ email, name, password })
    .save()
    .then(function () {
      response.send("Usuario creado con exito");
    })
    .catch(function () {
      response.send("Ocurrio un error al consultar la base de datos");
    });
});

// Inicio de sesión
server.post("/login", function (request, response) {
  const { email, password } = request.body;

  // { email: email, password: password }
  UserModel.findOne({ email, password }).then(function (document) {
    const token = jwt.sign(document.toJSON(), "shhhhhhh");
    response.send(token);
  });
});

function middlewareSesion(request, response, next) {
  // Se valida la sesión del usuario (si tiene o no tiene sesión)

  const { token } = request.body;

  // Valido el token a través de jsonwebtoken
  try {
    const user = jwt.verify(token, "shhhhhhh");
    request.user = user;

    // Si sí tiene sesión el usuario entonces, la petición sigue su camino
    next();
  } catch (e) {
    // Si no tiene sesión, la petición se rechaza
    response.send("No tienes sesión");
  }
}

// Obtener la información del usuario en sesión
server.get("/me", middlewareSesion, function (request, response) {
  response.json(request.user);
});

server.listen(8080);
