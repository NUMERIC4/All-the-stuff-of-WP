/*
function logTillTan() {
    for (let i = 1; i <= 10; i+=2) {
        console.log(i);
    }
}
// bur durumdayken çıktı vermicek çünkü fonksiyon herhangi bir yerde çağrılmadı

//logTillTan(); //fonksiyonun çağrılarak kullanılması
function logTillNumber() {
    for (let j = 1; j <= FinalNumber; j+=2) {
        console.log(j);
    }
}
*/
function logTillPromtNumber() {
    let InitialNumber = window.prompt("Enter start number");
    let FinalNumber = window.prompt("enter the loop cycle amount");
    for (let k = InitialNumber; k <= FinalNumber; k++) {
        console.log(k);
    }
}