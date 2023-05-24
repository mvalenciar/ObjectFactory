const juan = {
  name: "Juanito",
  age: 18,
  approveCourses: ["curso1"],
  addCourse(newCourse) {
    this.approveCourses.push(newCourse);
  },
};
// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));

Object.defineProperty(juan, "navigator", {
  value: "chrome",
  enumerable: false,
  writable: true,
  configurable: true,
});
Object.defineProperty(juan, "editor", {
  value: "vscode",
  enumerable: true,
  writable: false,
  configurable: true,
});
Object.defineProperty(juan, "terminal", {
  value: "wsl",
  enumerable: true,
  writable: true,
  configurable: false,
});
Object.defineProperty(juan, "pruebaNasa", {
  value: "extraterrestres",
  enumerable: false,
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));
