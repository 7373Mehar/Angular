//Function & types
function add(a:number, b:number) {
    return a + b
}

function printOutput(value: any) {
    console.log(value);
}
//There is no return type so it will be void

//Generics

function insertAtBegining<T>(array: T[], value:T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBegining(demoArray,-1); //[-1,1,2,3]
const stringArray = insertAtBegining(['a','b','c',], 'd')

//updatedArray[0].split('');
