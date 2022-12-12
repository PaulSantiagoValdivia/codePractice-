
function requireParam(param) {
    throw new Error(param + " es obligatorio")
}

function createLerningPaths({
    name = requireParam("name"),
    courses = [],
}) {
    const private = {
        "_name": name,
        "_courses": courses,

    };

    const public = {
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
}

function createStudent({
    name = requireParam("name"),
    email = requireParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    lerningPaths = [],
}
    = {}) {
    const private = {
        "_name": name,
        "_lerningPaths": lerningPaths,
    }
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
            if (!isArray(!newLP.courses)) {
                console.warn("tu lp no tiene lista de cursos ");
                return;
            }

            private["_lerningPaths"] = newLP;

        },

    };

    return public;
}
const juan = createStudent({
    name: 'juanito',
    age: 18,
    email: 'juanito@platzi.com',
    twitter: "fjuandc",
}
);

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