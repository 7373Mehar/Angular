interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let Mehar: Human;

Mehar = {
    firstName: 'Mehar',
    age: 22,
    greet(){
        console.log('Hello!!!');
    },
};

class Instructor implements Human {
    firstName: string;
    age: number;

    greet(){
        console.log('Hello!!');
    }
}