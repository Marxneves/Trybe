const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
  turno: 'noite',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const morningClass = (lesson, turn, morningKey) => lesson[turn] = morningKey;

// console.log(morningClass(lesson2,'turno','manhã'));
// console.log(lesson2);


// const listKeys = (obj) => Object.keys(obj);
// console.log(listKeys(lesson3));

// const objectLenght = (obj) => Object.entries(obj).length;
// console.log(objectLenght(lesson1));

// const listValues = (obj) => Object.values(obj);
// console.log(listValues(lesson1));

const allLessons = {};

Object.assign(allLessons, {lesson1}, {lesson2}, {lesson3});

// console.log(allLessons);

const total = (obj) => {
  let total = 0;
  for (let objeto in obj) {
    total += obj[objeto].numeroEstudantes;
  }
  return total;
}
// console.log(total(allLessons));


const getValueByNumber = (obj, indice) => {
  let result = Object.values(obj);
  return result[indice];
}
// console.log(getValueByNumber(lesson1, 0));

const verifyPair = (obj, keyName, valueName) => {
  let verify = false;
  if(obj[keyName] === valueName) {
    verify = true;
  }
  return verify;
}

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

const createReport = (obj, teacher) => {
  let report = {
    professor: teacher,
    aulas: [],
    estudantes: 0
  };

  for (let i in obj) {
    if (obj[i].professor === teacher) {
     report.aulas.push(obj[i].materia);
     report.estudantes += obj[i].numeroEstudantes;
    }
  }
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */