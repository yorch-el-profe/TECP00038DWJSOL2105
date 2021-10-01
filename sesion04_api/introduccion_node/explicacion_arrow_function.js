const persona = {
  nombre: "Joaquin",
  saluda: function () {
    console.log("v1: Hola me llamo", this.nombre);

    /*
      Arrow function hereda el contexto (this) de la
      función padre.
    */
    setTimeout(() => {
      console.log("v2: Hola me llamo", this.nombre);
    }, 3000);
  },

  muerete: function () {
    console.log("Me mori, pero recuerden que soy", this.nombre);
  },
};

persona.saluda();
