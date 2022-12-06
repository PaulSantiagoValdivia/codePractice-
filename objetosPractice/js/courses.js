export default class Course {
    constructor({
        id,
        name,
        teacher,
        classes = []
    }) {
        this._name = name;
        this.id = id;
        this.teacher = teacher;
        this.classes = classes;
    }
    get name (){
        return this._name;
    }
    set name (newName){
        if(newName === "curso malito de programacion basica"){
            console.error("web nooo");
        }else{
            this._name = newName;
        }
    }
}