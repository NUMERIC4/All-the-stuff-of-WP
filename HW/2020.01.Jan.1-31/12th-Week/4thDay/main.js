let resultArr = [];

let function1 = () => {
    // setTimeout(() => {
        resultArr.push('world');
    // },3000);
}

setTimeout(function1,3000);

let function2 = () => {
    // setTimeout(() => {
    resultArr.push('hello');
    // },2000);
}

setTimeout(function2,2000);


let function3 = () => {
    // setTimeout(() => {
    resultArr.push(' :) ');
    // },5000);
}

setTimeout(function3,5000);


// function1();
// function2();
// function3();

console.log(resultArr);

setTimeout(()=>{
    console.log(resultArr);
},6000);