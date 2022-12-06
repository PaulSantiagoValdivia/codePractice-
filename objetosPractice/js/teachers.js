export default class Teachers {
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