const mongoose = require("mongoose");

const uri =
  "mongodb+srv://root:root@bedumongodb.iejwi.mongodb.net/productos?retryWrites=true&w=majority";

mongoose.connect(uri);

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0 },
});

const ProductModel = mongoose.model("products", ProductSchema);

/*Promise.all([
  new ProductModel({
    name: "Coca Cola 600ml",
    price: 15,
  }).save(),

  new ProductModel({
    name: "Mazapan",
    price: 10,
  }).save(),

  new ProductModel({
    name: "Gansito",
    price: 12,
  }).save(),

  new ProductModel({
    name: "Tortillas de Harina",
    price: 20,
  }).save(),

  new ProductModel({
    name: "Leche",
    price: 18,
  }).save(),

  new ProductModel({
    name: "Churrumaiz",
    price: 10,
  }).save(),
]).then(function () {
  console.log("Productos insertados");
});*/

const express = require("express");
const server = express();

server.get("/getAllProducts", function (request, response) {
  ProductModel.find({})
    .exec()
    .then(function (documents) {
      response.json(documents);
    });
});

server.get("/filterProductsByPrice", function (request, response) {
  const priceFilter = request.query.price || 0;

  ProductModel.find({ price: { $gte: priceFilter } })
    .exec()
    .then(function (documents) {
      response.json(documents);
    });
});

server.listen(8080);
