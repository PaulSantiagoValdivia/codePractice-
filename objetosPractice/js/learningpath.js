export default class LearningPath {
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