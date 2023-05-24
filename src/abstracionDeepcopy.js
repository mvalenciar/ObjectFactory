function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (const key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      // copySubject[key] = deepCopy(subject[key]);
    } else if (subjectIsArray) {
      copySubject.push(subject[key]);
    } else {
      copySubject[key] = subject[key];
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approveCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    facebook: undefined,
    instagram: undefined,
  },
};

function requireParam(param) {
  throw new Error(param + " es obligatorio");
}

function createStudent({
  name = requireParam("name"),
  email = requireParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approveCourses = [],
  learningPaths = [],
} = {}) {
  return {
    name,
    email,
    age,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    approveCourses,
    learningPaths,
  };
}

const juan = createStudent({
  name: "Juanito",
  email: "juan@juan.com",
});

console.log(juan);
