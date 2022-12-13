
function requireParam(param) {
    throw new Error(param + " es obligatorio")
}

function LearningPath({
    name = requireParam("name"),
    courses = [],

}) {
    this.name = name;
    this.courses = courses

    /* 
        const private = {
            "_name": name,
            "_courses": courses,
    
        }; */



    /* const public = {
        get name() {
            return private['_name'];
        },
        set name(newName) {
            if (newName.length !== 0) {
                return private['_name'] = newName;
            } else {
                console.warn("tu nombre debe tener al menos un caracter");
            }
        },
        get courses() {
            return private['_courses'];
        },

    };

    return public;
 */
}

function Student({
    name = requireParam("name"),
    email = requireParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses
    this.socialMedia = {
        twitter,
        instagram,
        facebook,
    };
    private = {
        "_learningPaths": []
    }
    Object.defineProperty(Student.prototype, "learningPaths", {
        get() {
            return private["_learningPaths"]
        },
        set(newLP) {
            if (newLP instanceof LearningPath) {
                private["_learningPaths"].push(newLP);
            } else {
                console.warn("Alguno de los learning paths no es instancia del prototipo learning paths");
            }
        }
    });

    if (isArray(learningPaths)) {
        this._learningPaths = [];
        for (learningPathIndex in learningPaths) {
            this.learningPaths = learningPaths[learningPathIndex];
        };
    };



    /*     const private = {
        "_name": name,
        "_lerningPaths": lerningPaths,
    };

    const public = {
        age,
        email,
        approvedCourses,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },

        get lerningPaths() {
            return private['_lerningPaths'];
        },
        set lerningPaths(newLP) {
            if (!newLP.name) {
                console.warn("tu lp no tiene la propiedad nombre");
                return;
            }
            if (!newLP.courses) {
                console.warn("tu lp no tiene courses");
                return;
            }
            if (!isArray(newLP.courses)) {
                console.warn("tu lp no tiene lista de (*cursos) ");
                return;
            }

            private["_lerningPaths"].push(newLP);

        },

    };

    return public;
 */
}

Student.prototype.learningPaths
const escuelaWeb = new LearningPath({ name: "escuela webDev" });
const escuelaData = new LearningPath({ name: "escuela de Data Scinence" });
const juan = new Student({
    email: "juanito@frijoles.co",
    name: "Juanito",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ],
});
function isObject(subject) {
    return typeof subject == "object"
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

    for (key in subject) {
        const keyIsObject = isObject(subject[key])
        if (keyIsObject) {
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if (subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key]
            }
        }

        return copySubject;

    }
    function deepFreeze(obj) {
        Object.keys(obj).forEach(prop => {
            if (typeof obj[prop] === 'object') deepFreeze(obj[prop])
        });
        return Object.freeze(obj);
    }
}