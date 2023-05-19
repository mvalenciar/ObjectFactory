const juan = {
  name: 'Juanito',
  age: 18,
  approveCourses: ['curso1'],
  addCourse(newCourse) {
    this.approveCourses.push(newCourse);
  },
};
console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));
