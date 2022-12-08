/* const studenBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    lerningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
} */
// esto evita que puedan eliminar nuestras propiedades
/* onst juan = deepCopy(studenBase);
Object.seal(juan);

juan.name = 'juanito';

Object.isSealed(juan); */

/* Object.defineProperty(juan, "name", {
    value: "juanito",
    configurable: false,

}); */
function requireParam(param) {
    throw new Error(param + " es obligatorio")
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
    }
    const public = {
        age,
        email,
        approvedCourses,
        lerningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        readName() {
            return private['_name'];
        },
        changeName(newName) {
            private['_name'] = newName;
        },
    };
Object.defineProperty(public, "readName",{
    writable: false,
    configurable: false,
});
Object.defineProperty(public, "changeName",{
    writable: false,
    configurable: false,
});
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