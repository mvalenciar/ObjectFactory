const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
};

const obj2 = Object.assign({}, obj1);

const obj3 = Object.create(obj1);
