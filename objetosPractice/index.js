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

