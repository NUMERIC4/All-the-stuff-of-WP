/*async function function4() {
    await f2();
    await f1();
    await f3();
}


let resultArr = [];

async function f1() {
    // setTimeout(() => {
        console.log('worldB');
    // },3000);
}

async function f2() {
    // setTimeout(() => {
        console.log('helloB');
    // },2000);
}

async function f3() {
    // setTimeout(() => {
        console.log(' :) B');
    // },5000);
}

let function1 = () => {
    // setTimeout(() => {
        resultArr.push('world');
        console.log('after func 1 run');
    // },3000);
}

setTimeout(function1,3000);

let function2 = () => {
    // setTimeout(() => {
    resultArr.push('hello');
    console.log('after func 2 run');
    // },2000);
}

setTimeout(function2,2000);


let function3 = () => {
    // setTimeout(() => {
    resultArr.push(' :) ');
    console.log('after func 3 run');
    // },5000);
}

setTimeout(function3,5000);


function3();
console.log('afrter func3 call');
function2();
console.log('afrter func2 call');
function1();
console.log('afrter func1 call');

console.log(resultArr);

setTimeout(()=>{
    console.log(resultArr);
    console.log('hadsae')
},6000);

function4();
*/

/*-------------------------------------------- */
let myFunc = async () => {
    /* await promise sistemi ile çalışır setTimeOut sayı döndürüyor o yüzden js beklemiyor */
    await myPromise1.then(result=>console.log(result));
    await myPromise2.then(result=>console.log(result));
    await myPromise3.then(result=>console.log(result));
    console.log('done');

}


/*o yüzden promise oluşturuyoruz */
let myVar = 0;
let myPromise1 = new Promise ( (resolve,reject) => {
    setTimeout( () => { resolve (myVar += 1)}, 5000);
});

let myPromise2 = new Promise ( (resolve,reject) => {
    setTimeout( () => { resolve (myVar += 2)}, 9000);
});

let myPromise3 = new Promise ( (resolve,reject) => {
    setTimeout( () => { resolve (myVar += 3)}, 2000);
});

myFunc();
/*-------------------------------------------- */

// let myVar = 0;
let myFunc2 = async () => {
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=1))},3000)
    });
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=2))},4000)
    });
    await new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(myVar+=3))},2000)
    });
}
myFunc2();