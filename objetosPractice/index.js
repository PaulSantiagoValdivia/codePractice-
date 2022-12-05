function Studen(name, years, approvedCourses) {
    this.name = name;
    this.years = years;
    this.approvedCourses = approvedCourses;
}


Studen.prototype.approvedCourses = function (newCourses) {
    this.approvedCourses.push(newCourses);
}

const juanita = new Studen(
    "juanita Aejandra",
    16,
    [
        "curso de introduccion a la produccion de video juegos ",
        "curso de creacion de personajes"
    ]
)

class Studen2 {
    constructor({
        name = "",
        approvedCourses = [],
        years = 0,
        email = ""
    }) {
        this.name = name;
        this.years = years;
        this.approvedCourses = approvedCourses;
        this.email = email;
    }

    passCourse(newCourses) {
        this.approvedCourses.push(newCourses);
    }
}

const mike = new Studen2({
    years: 17,
    name: "Miguel",
    email: "miguel@platzi.com"
}

);