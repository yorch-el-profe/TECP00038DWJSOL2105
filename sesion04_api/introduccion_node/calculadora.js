function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

// Exportar las funciones

/*

  Existen dos maneras de exportar cosas:
  
  1. module.exports

  2. exports.cosa

  NO SE PUEDEN COMBINAR
*/

// Sirve para exportar "TODO" de un jalón
module.exports = {
  suma: suma,
  resta: resta,
  multiplicacion: multiplicacion,
};

// Exportar por partes
/*
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.potencia = function (x, n) {
  return x ** n;
};
*/

/**
 * CommonJS: Es un "estandar" para importar y exportar cosas en JS
 *
 * 9 años después surge ECMAScript 2015, incluyó una manera de importar y exportar
 *
 * import { algo } from 'archivo';
 *
 * export function f() {
 * }
 *
 * export default Componente;
 */
