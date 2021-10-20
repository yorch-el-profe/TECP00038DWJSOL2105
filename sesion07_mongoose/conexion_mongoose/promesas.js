// resolve() -> Promesa termina de manera exitosa
// reject() -> Promesa termina con un error

// Definición de una promesa
const promesita = new Promise(function (resolve, reject) {
  // Debería ser código asíncrono
  //reject("Ocurrió un error");
  resolve("Todo chido");
});

// Usar una promesa
promesita
  // Caso de éxito (resolve)
  .then(function (mensaje) {
    console.log("Ejecutando .then", mensaje);
  })
  // Caso de error (reject);
  .catch(function (mensaje) {
    console.log("Ejecutando .catch", mensaje);
  });
