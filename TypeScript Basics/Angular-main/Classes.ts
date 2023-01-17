class Student {
    //firstName: string;
    //lastName: string;
    //age: number;
    //private courses: string[];

    constructor(
        public firstName: string, 
        public lastName: string,
        public age: number,
        private courses: string[]){}
        //this.firstName = first;
        //this.lastName = last;
        //this.age = age;
        //this.courses = courses;
    enrol(courseName: string) {
        this.courses.push(courseName);
    }
    
    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('Mehar', 'Mutreja', 22, ['Angular'])
student.enrol('React');

//student.listCourses(): => Angular, React
//student.courses => Angular, React

