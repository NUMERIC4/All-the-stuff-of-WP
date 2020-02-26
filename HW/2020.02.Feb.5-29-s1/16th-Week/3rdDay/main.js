/*
class MyFirstClass {
    constructor(num1, num2) {
        this.a = num1;
        this.num2 = num2
    }

    sum(num3 = 0) {
        console.log(this.a + this.num2 - num3);
    }
}

let myFClass = new MyFirstClass(3, 2);
myFClass.sum(2);

let myFClass2 = new MyFirstClass(1, 2);
myFClass2.sum();

function sum(num1, num2) {
    return (num1 + num2);
}

console.log(sum(1, 2));

//Inheritance
class CoffeeMachine {
    constructor(brand, status) {
        this.brand = brand;
        this.status = status;
    }

    powerSwitch() {
        console.warn(`${this.brand} coffee machine is ${this.status}`)

    }
}

class EspressoMachine extends CoffeeMachine {
    steam() { //buhar basabilme ?? 
        super.powerSwitch();
        alert('Coffee with steam');
    }

    powerSwitch() {
        alert(`${this.brand} espresso machine is ${this.status}`)
    }
}

let espresso = new EspressoMachine('BZS', 'on');
espresso.steam();
// console.log(espresso.powerSwitch());

let coffeeMachine = new CoffeeMachine('The', 'on');
alert(coffeeMachine.powerSwitch());
// alert(coffeeMachine.steam());
// Uncaught TypeError: coffeeMachine.steam is not a function

//-------------------------------------------------Static properties and methods ---------------------------------------//
/*
class User {
        static myFirstStaticMethod() {
        console.log(this === User);
    }

    myFirstNonStaticMethod() {
        console.log(this === User);
    }
}

console.log(User.myFirstStaticMethod());     //true
console.log(User.myFirstNonStaticMethod());  //Uncaught TypeError: User.myFirstNonStaticMethod is not a function

let user = new User();
console.log(user.myFirstNonStaticMethod());  //False        //bu instance da çalışıyor dolayısıyla class ile aynı reaksiyonu vermez

console.log(user.myFirstStaticMethod());     //Uncaught TypeError: user.myFirstStaticMethod is not a function
*/
class Animal {
    static planet = "Earth";

    constructor(name, speed) {
        this.speed = speed;
        this.name = name;
    }

    // constructor(name, speed) {
    //     this.speed != undefined ? this.speed=speed : this.speed=0
    // }

    maxSpeed = ()=>{
    return this.speed+5;
    }

    static maxSpeedSta = ()=>{
        if (this.speed!=undefined){
            return this.speed+5
        }
        else {
            return this.speed=0
        }
        // return this.speed+5;
        }

    run(speed = 0) {
        this.speed += speed;
        alert(`${this.name} runs with speed ${this.speed}.`);
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }

}

// Inherit from Animal
class Rabbit extends Animal {
    hide() {
        alert(`${this.name} hides!`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);   //rabbit üzerinde compare yok parenttendea var

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth

console.log(new Animal( 'x', 8).maxSpeed());    //13
console.log(new Animal( 'x', 5).maxSpeed());    //10
console.log(Animal.maxSpeedSta());              //NaN => 