class Course {
    constructor({
        id,
        name,
        teacher,
        classes = [],
        isFree = false,
        lang = "spanish"
    }) {
        this._name = name;
        this.id = id;
        this.teacher = teacher;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName === "curso malito de programacion basica") {
            console.error("web nooo");
        } else {
            this._name = newName;
        }
    }
} class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id,
            this.naem = name;
        this.courses = courses;
    }
    addCourses(newCourse) {
        this.courses.push[newCourse]
    }
    replaceCourses(oldCourse, newCourse) {
        const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        oldCourseIndex !== -1 ? this.courses[oldCourseIndex] = newCourse : false;
        return this.courses;
    }
    delateCourses(oldCourse) {
        const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
        this.courses.splice(courseIndex, 1);
        return this.courses;
    }
}
class Studen {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }


}

class FreeStudent extends Studen {
    constructor(props) {
        super(props);
    }
    passCourse(newCourses) {

        if (newCourses.isFree) {
            this.approvedCourses.push(newCourses);
        }
        else {
            console.error("lo sentimos " + this.name + ", solo puedes tomar cursos abiertos");
        }
    }
}

class BasicStudent extends Studen {
    constructor(props) {
        super(props);
    }

    passCourse(newCourses) {

        if (newCourses.lang !== "english") {
            this.approvedCourses.push(newCourses);
        }
        else {
            console.warn("lo sentimos " + this.name + ", no puede tomar cursos en ingles");
        }
    }
}

class ExpertStudent extends Studen {
    constructor(props) {
        super(props);
    }
    passCourse(newCourses) {

        this.approvedCourses.push(newCourses)
    }
}
class Teachers {
    constructor({
        name,
        username,
        email,
        yearsOfIntruction,
        coourses = []
    }) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.yearsOfIntruction = yearsOfIntruction;
        this.coourses = coourses;
    }
}

const diegoDeGranda = new Teachers({
    name: "Diego de granda",
    username: "DiegoDg",
    email: "diegodg@platzi.com",
    yearsOfIntruction: 6,
    coourses: []
})
const cursoJavaScript = new Course({
    id: 'basico-javascript',
    name: 'Curso Básico de JavaScript',
    teacher: diegoDeGranda,
    isFree: true,
})
const basicProgrammingCourse = new Course({
    name: 'curso gratis de programacion basica',
    lang: "english",
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
    ],

})

const mike = new FreeStudent({
    name: "Mike",
    email: "mike@platzi.com",
    username: "Mikedc",
    twitter: "Mikedc  ",
    learningPath: [reactNativeLearningPath]
});

const santiago = new BasicStudent({
    name: "santiago",
    email: "santiago@platzi.com",
    username: "santiagodc",
    instagram: "santiagodc",
    learningPath: [basicProgrammingCourse]
});