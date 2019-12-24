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
// function logTillPromtNumber() {
//     let InitialNumber = window.prompt("Enter start number");
//     let FinalNumber = window.prompt("enter the loop cycle amount");
//     for (let k = InitialNumber; k <= FinalNumber; k++) {
//         console.log(k);
//     }
// }
/*
let finalNumber = 20;
let firstNumber = 10;

function logTillPromtNumber() {
    if(finalNumber>100){
        console.log(firstNumber);
        alert('lütfen 1 ile 10 arasında bir sayı seçin');
    } else {
        for(let i = firstNumber; i <= finalNumber; i++){
            console.log(i);
        }
        console.log('congrats! your loop is done!');
    }
    // console.log(tri); //bunu başka fonksiyonlar alabilir mi diye anlamak üzere yaptım
}

function FirstNumDef() {
    firstNumber = parseInt(prompt("Kaçtan itibaren log sayalım"));
}

function FinalNumDef() {
    finalNumber = parseInt(prompt("Kaçtan itibaren log sayalım"));
}

var tri = 5;
console.log(tri);
function Trial() {
    var tri = window.prompt('hadi giri giri ver');
    console.log(tri);
}

console.log(tri);


function logSerie(first, last) {
    for (let i = first; i <= last; i++)
    console.log(i);
}
*/
//return kullanımı
//fonksiyona işlemi bittikten sonra yaptığı işlerle alakalı veri isteme kısmını yapıyor return

/*

//reutrn lü olduğu için ismede yerleştirdim
function logSerieReturn(first, last) {
    for (let i = first; i <= last; i++)
    console.log(i);
    return('loop is done !'); //alert gibi değil fonksiyon bittiğinde buradaki değeri fonksiyonun kendisine döndürüyor mesele bunu yakalamak. Bunu en sonda console bastı değeri işlem bitince 
}

logSerieReturn(7,8);

function sumSerie(first, last) {
    let sum = 0;
    for (let i = first; i <= last; i++)
    {console.log(sum);
        sum=sum+i;}
    return(sum)
}

console.log(sumSerie(1,5));

*/

//fonksiyon pratiği

/*

function OurOwnA(a,b,c,d){
    e=a+b;
    f=c+d;
    return(e,f)
}

function OurOwnB(a,b){
    c=a+b;
    return(c)
}

console.log(OurOwnB(OurOwnA(10,100,1000,10000)));

*/

function sumTwoNum(First,Second) {
    let sum = First + Second;
    // console.log(`Sum: `+sum); //sadece bunu kullanırsak her seferinde consol log kullanıcak
    return(`Sum: `+sum); //sadece bu olursa değer bir yerde tutuluyor ama biz göremedik
}

console.log(sumTwoNum(3,2));

function CalcFactorial(Nummer) {
    result = 1;
    if(Nummer>100)
    {
        return('your nummer accuk gross') //if case li return de şunusağladı eğer çok işlem gerkicek tarzda bir duru  varsa direk return ile o işlemlerin yapılması engellend ve kullanıcıya bir output ile bu bildirildi.
    }
    for (let i = 1; i <= Nummer; i++) {
        result*=i;
    }
    return(result);
}

console.log("res:"+ CalcFactorial(300));