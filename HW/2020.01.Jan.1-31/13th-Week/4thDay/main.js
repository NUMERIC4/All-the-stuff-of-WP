let myWrapFunc = async () => {

    let myVar = 0;

    let myPromise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(myVar+=1)},5000);
    });
    let myPromise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(myVar+=2)},9000);
    });
    let myPromise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(myVar+=3)},2000);
    });

    let myFunc = async () => {
        await myPromise1.then(result => console.log(result));
        await myPromise2.then(result => console.log(result));
        await myPromise3.then(result => console.log(result));
        console.log('done1')
    }

    await myFunc();

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
        console.log('done');
    }
    await myFunc2();
}

myWrapFunc();