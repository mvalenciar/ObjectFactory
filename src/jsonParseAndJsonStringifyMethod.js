// El metodo JSON.parse convierte el contenido del objeto a una cadena
// y el metodo JSON.stringify convierte dicha cadena a un objeto

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },

  editA() {
    this.a = "aaaa";
  },
};

const stringifiedComplexObject = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObject);

console.log(stringifiedComplexObject);
console.log(obj2);
