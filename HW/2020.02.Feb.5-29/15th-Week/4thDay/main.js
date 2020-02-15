class MyFirstClass{
    constructor(num1,num2){
        this.a=num1;
        this.num2=num2
    }

    sum(num3=0) {
        console.log(this.a+this.num2-num3);
    }
}

let myFClass = new MyFirstClass(3,2);
myFClass.sum(2);

let myFClass2 = new MyFirstClass(1,2);
myFClass2.sum();

function sum(num1,num2){
    return (num1+num2);
}

console.log(sum(1,2));

//Inheritance
class CoffeeMachine {
    constructor(brand, status){
        this.brand=brand;
        this.status=status;
    }

    powerSwitch(){
        console.warn(`${this.brand} coffee machine is ${this.status}`)

    }
}

class EspressoMachine extends CoffeeMachine {
    steam () {  //buhar basabilme ?? 
        super.powerSwitch();
        alert('Coffee with steam');
    }

    powerSwitch(){
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