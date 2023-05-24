class Student {
  #name;
  constructor({
    name,
    age,
    email,
    twitter,
    facebook,
    courses = [],
    learningPaths = [],
  }) {
    this.#name = name;
    this.age = age;
    this.email = email;
    this.twitter = twitter;
    this.facebook = facebook;
    this.courses = courses;
    this.learningPaths = learningPaths;
  }

  get name() {
    return this.#name;
  }
}

const juan = new Student({
  name: "Juan",
  email: "juanito@email.com",
});

juan.name = "Milton";

console.log(juan.name);
