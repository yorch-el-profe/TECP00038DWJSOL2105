const express = require("express");
const mongoose = require("mongoose");
const uri = "...";

// Creación de los schemas/modelos
mongoose.connect(uri);

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    year: { type: Number, required: true, min: 1888 },
    actors: { type: [String], required: true },
  },
  { collection: "movies", timestamps: true }
);

const MovieModel = mongoose.model("movies", MovieSchema);

// Creación del servidor en Express

const server = express();

server.get("/", function (request, response) {
  response.send("Hello World");
});

server.get("/getMovies", function (request, response) {
  MovieModel.find({})
    .exec() // Da la instrucción de ejecutar la consulta
    .then(function (documents) {
      response.json(documents);
    });
});

server.listen(8080);
