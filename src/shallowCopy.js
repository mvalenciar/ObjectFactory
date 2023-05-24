// Esta opción solo funciona con objetos simples pero no funciona
// cuando nuestros objetos tienen, a su vez, subobjetos y más subobjetos:

const obj1 = {
  a: "a",
  b: "b",
};

const obj2 = {};

const obj3 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

// for (const prop in obj1) {
//   obj2[prop] = obj1[prop];
// }

for (const prop in obj3) {
  obj2[prop] = obj3[prop];
}

obj2.c.d = "dddddd";

console.log(obj3);
