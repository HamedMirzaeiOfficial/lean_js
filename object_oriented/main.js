"use strict";

// a basic way to create a class:
function createPerson(firstName, lastName, age, height){
    var personObject = {};
    personObject.firstName = firstName;
    personObject.lastName = lastName;
    personObject.age = age;
    personObject.height = height;
    personObject.getFullName = function(){
        return personObject.firstName + ' ' + personObject.lastName;
    }

    return personObject;  
}

var hamed = createPerson('hamed', 'mirzaei', 23, 172);
console.log(hamed)
console.log(hamed.getFullName())

// ----------------------------------------------------------------------------
// better way to create a class:
function Person(firstName, lastName, age, height){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.height = height;    
}

// avoiding creating a function for each object we create.
Person.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName;
}

var ian = new Person('ian', 'somerholder', 45, 176);
console.log(ian)
console.log(ian.hasOwnProperty('firstName'))

// inheritance:
function Employee(firstName, lastName, age, height, salary){
    // this: Employee's this
    Person.call(this, firstName, lastName, age, height)
    this.salary = salary;
}

// we get error when use getFullName in Employee object, if don't use this line. with this line, 
// can define inherit from Person and Prototype become Person(before this line was Object).
Employee.prototype = Object.create(Person.prototype);

var employee_1 = new Employee('mark', 'wallberg', 43, 178, 2000);
console.log(employee_1);
console.log(employee_1.getFullName());



console.log('______________________________****____________________________')
let newObj = {
    name: "hamed",
    family: "mirzaei", 
    get age(){
        return this.userAge;
    },
    set age(inputAge){
        this.userAge = inputAge;
    }

}

console.log(newObj)
newObj.age = 23
console.log(newObj.age)
console.log(newObj.userAge)

console.log('______________________________****____________________________')

class Animal{
    constructor(){
        this.name = 'cat';
    }
    running(){
        console.log(this.name + ' running!!!');
    }
}

let animal = new Animal()
console.log(animal)
animal.running()


// inheritance in class
class Person1{
    constructor(name){
        this.name = name;
    }
    getName(){
        return 'her/his name is ' + this.name;
    }
    
}

class Employee1 extends Person1{
    constructor(name, salary){
        super(name);
        this.salary = salary;
    }
}


let emp1 = new Employee1('ian', 120000);
console.log(emp1)
console.log(emp1.getName());
