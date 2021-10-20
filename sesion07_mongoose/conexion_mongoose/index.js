// 1. Importar mongoose
const mongoose = require("mongoose");

// 2. Conectarme a MongoDB
/*
  Para podernos conectar a MongoDB necesitamos
  de una URI

  Local/Servidor
  mongodb://usuario:contraseña@host:puerto/basedatos

  Cloud (Mongo Atlas)
  mongodb+srv://usuario:contraseña@host:puerto/basedatos


  Si fuera en mi computadora sería:

  mongodb://root@localhost:27017/mibasededatos
*/
const uri = "...";

mongoose
  .connect(uri)
  .then(function () {
    console.log("Conectado a Mongo Atlas");
  })
  .catch(function () {
    console.log("No me pude conectar a Mongo Atlas");
  });

// 3. Crear schemas
/*
  Un Schema es una manera de definir una estructura fija a los documentos de una colección.

  Muy similar a lo que hace CREATE TABLE en SQL.

  Con los Schemas:
    * Se definen propiedad que van a tener los documentos
    * Se definen los tipos
    * Se definen las restricciones
    * Se definen referencias a otras colecciones
*/

/*
  Si fuera SQL...

  CREATE TABLE products (
    sku VARCHAR(13) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    price INT NOT NULL CHECK(price >= 0),
    label ENUM('sodio', 'azucar', 'calorias')   
  );
*/
const ProductSchema = new mongoose.Schema(
  {
    sku: { type: String, unique: true, required: true, length: 13 },
    name: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    label: { type: String, enum: ["sodio", "azucar", "calorias"] },
  },
  { collection: "products", timestamps: true }
);

// 4. Crear un modelo a partir de un schema

/*
  Modelo se usa para realizar las consultas (.find, .save, .update, .remove)
*/
const ProductModel = mongoose.model("products", ProductSchema);

// 5. Realizar consultas con el modelo

ProductModel.find({})
  .exec()
  .then(function (documents) {
    console.log(documents);
  });

const product = new ProductModel({
  sku: "2342342342345",
  name: "Cheetos Puff",
  price: 10,
  label: "sodio",
});

product.save().then(function () {
  console.log("Document created");
});
