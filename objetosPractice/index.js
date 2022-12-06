import Course from './js/courses.js';
import LearningPath from './js/learningpath.js';
import Teachers from './js/teachers.js';
import Studen from './js/studen.js';

const diegoDeGranda = new Teachers({
    name:"Diego de granda",
    username: "DiegoDg",
    email: "diegodg@platzi.com",
    yearsOfIntruction: 6,
    coourses: []
})
const cursoJavaScript = new Course({
    id: 'basico-javascript',
    name: 'Curso Básico de JavaScript',
    teacher: diegoDeGranda
})
const basicProgrammingCourse = new Course({
    name: 'curso gratis de programacion basica',
});
const ecmaScript6 = new Course({
    id: 'ecmascript-6',
    name: 'Curso de ECMAScript 6+',
    teacher: diegoDeGranda,
})
const reactNativeLearningPath = new LearningPath({
    id: 'react-native',
    name: 'Desarrollo de Apps con React Native',
    courses: [
        ecmaScript6,
        cursoJavaScript,
        basicProgrammingCourse
    ]
})

const mike = new Studen({
    name: "Mike",
    email: "mike@platzi.com",
    username: "Mikedc",
    twitter: "Mikedc  ",
    learningPath: [reactNativeLearningPath]
});

const santiago = new Studen({
    name: "santiago",
    email: "santiago@platzi.com",
    username: "santiagodc",
    instagram: "santiagodc",
    learningPath : [reactNativeLearningPath]
});
console.log(basicProgrammingCourse);
basicProgrammingCourse.name = "curso malito de programacion basica";
console.log(basicProgrammingCourse);
console.log(basicProgrammingCourse);