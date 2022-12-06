export default class Studen {
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

        if (newCourses.IsFree) {
            this.approvedCourses.push(newCourses);
        }
        else {
            console.warn("lo sentimos " + this.name + ", solo puedes tomar cursos abiertos");
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
            console.warn("lo sentimos " + this.name + ", solo puedes tomar cursos en ingles");
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