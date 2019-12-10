/*Boolean

let myFirstBool = false; //burada true dendiği için boolean tipine geçiş yapıldı
//let myFirstBool; //bu tanımda sınıfı any
// if (myFirstBool == true){
//         alert('ahanda doğru');
// }
// else{alert('Anaa yanlışmış');}




// var myHelYeahVariable = 12;

// if (myHelYeahVariable != false) {
//     alert('1')
// }
// else {alert('2');}

// if (myHelYeahVariable == false){
//     alert('3')
// }
// else {alert('4');}


// if (myHelYeahVariable != true) {
//     alert('1')
// }
// else {alert('2');}

// if (myHelYeahVariable == true){
//     alert('3')
// }
// else {alert('4');}
myFirstBool = true;

//boolean and if statement equal (==)
if (myFirstBool = true) {
    let x = 13;
    alert('1');
    console.log('2');
}

myFirstBool = false;
//boolean and if statemnet with not equal (!=)
if (myFirstBool != true) {
    alert('3');
    console.log('4');
}
//results are same on previous and next samples
myFirstBool = 15;
if (myFirstBool != true) {
    alert('5');
    console.log('6');
}*/


/*
let myAge = 998;

if (myAge >= 998)
{
    console.log('You are an antique')
}
else if(myAge >20){

    console.log('ehehehe daha olammışsın');
}
else {
    console.log('ahahahahah');
}
*/

//TypeOf
//console.log(typeof myAge); //data tipini bastırıyor console a 

//arrays

let myFirstArr = [];

let myCars = ['Audi', '2', 2, 2, 2, "2"];

console.log(myCars);

let fruits = ['banana', 'ananas', 'kiwi'];

console.log(myCars);
console.log(fruits);

console.log('En sevdiğiniz meyve ' + fruits[0]);

let newFruit = 'Orange';

fruits[2] = 'Cherry';
fruits[1] = newFruit;
fruits[3] = 'Chery';
console.log(fruits);
let fruitCount = fruits.length;
console.log(fruitCount);

//pop, push, shift, unshift <<>> array cacıklayıcılar

let falssBool = false;
let finalArr = ['Germany', 'US', 'GBI', 'Cherry', 'cHERRY', 'LaDY', newFruit, falssBool];
//arrayname.push();
//add new number to end of the array
finalArr.push('oo ma bay');
console.log(finalArr);