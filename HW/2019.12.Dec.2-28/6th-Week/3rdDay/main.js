//derse 30 dakika sonrasından not almaya başlıyorum
/*
var x = 10;

x /= 3;
//console.log(x);

//console.log(x.toFixed(4)); //bu noktadan sonra gösterilecek sayı miktarını belirtiyor.
*/
/*iki grup data tytpe mevcut;
Primitive                                   Complex
---------                                   ---------
string      çift tırnak içi                 object
number      int&float                           -array
boolean     evet,hayır                          -null
undefined   değer atanmamış değişkenler         -object
                                            function
*/
/*
console.log("5" == 5 );     //value değerine bakar dolayısıyla cevabı "true" olarak verir
console.log("5" === 5 );    //burada type kontrolüde var -- Ama burada hem value değerine bakar hem data type kontrolü yapılır

console.log("3" != 3);      //"3" eşit değil midir 3 e -> cevap -> hayır eşittir -> hayır dediği için false çıkar
console.log("3" !== 3);     //yukarıda ki statement ın aynısı data type ve value kontrolü yapılıyor ve cevap eşit değildir çıkıyor cevap ta -> evet eşit değildir -> evet olduğu için true
*/
/*
var x = "5";
console.log(typeof x); //data type printer

var y = [1,2,"a"];
console.log(typeof y); //object yazıldı array complex object çünkü
*/
/*
var y = {};
console.log(typeof y);
*/
/*
var person = {ad:'Hasan', soyad:'yildiz', yas:43 }
//ad soyad yas hepsi key value. Object e birden fazla value verebilrsin o valueleri key value lara atarsın
console.log (typeof person);
*/
/*
//var y;                        //bu olmadan da tanımlama oldu
//tekrar buraya kadar birax da array e geçiş yapmak istiyoruz
var x = [55,'hasan',{},23, y = [1,2,3]];
//köşeli parantez ile tanımlanan arraylerin içine her tip data yazılabilir
console.log(x[4]);
console.log(x.length);
console.log(x[x.length -1]);    //x.lenth-1 son elemanın index numarası arrayin eleman sayısı belirsiz ve ya arraye tanımlı belirlemek istiyorsak
console.log(x[x.length -1][1]); //iç arrayin elemanına erişmek için
console.log(y[1]);              //burada array inide de değişken tanımlanabildiğini gördük
*/
//*********yanımlayamatyız dedi array içinde neden? */
//buradan for loop a giricez

//loop types
//--------
//1. For
// 2. For/IN => objects
// 3. FOR / OF => ARRAYS
// 4. WHILE
// 5. DO / WHILE

var x = ['hasan','ahmet','veli'];

/*console.log(x[0]);
console.log(x[1]);
console.log(x[2]);
*/
/*
//for (1,2,3){4;5;...}      1 değişkenimiz sayacımız 2 statement 3 statement true iken olacak değişim 4 ve 5 her true durumunda alınıcak aksiyon
for (var i = 0 ; i < x.length ; i++){
    console.log(x[i]);
}

var i;
for (i=0;i <x.length;i++){
    console.log(x[i])
}
*/
/*
var array = [];
var num1 = window.prompt("Lütfen 1sayı gir");
array.push(parseInt(num1));     //parseInt ile data type değiştiriyoruz diğer türlü string kabul ediliyor
var num2 = window.prompt("Lütfen 2sayı gir");
array.push(parseInt(num2));
// console.log(num1);
if (array[0] > array[1])
{console.log("girdiğiniz iki rakamdan büyük olan aha bu : " + array[0]);}
else if (array[1] > array[0])
{console.log("girdiğiniz iki rakamdan büyük olan aha bu : " + array[1]);}
else
{console.log("sayılar eşit");}
console.log(array);

*/
/*
// 0 dan 15 e tek olan sayıları bastır
var f = 0;
for(var i = 0; i<=15; i++)
{
    if (f==0)
    {
        
        f=1;
    }
    else{
        console.log(i);
        f=0;
    }
}
*/
/*
//sayının tek mi çift mi olduğunu belirleyecek döngü
for ( var elem = 0; elem <=15; elem++){

    if ( elem === 0 ){
        console.log(`${elem} çifttir.`);
    } else if ( elem % 2 === 0) {
        console.log(`${elem} çifttir anam`);
    } else {
        console.log(`${elem} tektir`);
    }
}*/
/*
for ( var elem = 0; elem <=15; elem++){

    if ( elem === 0 ){
        console.log(`${elem} çifttir.`);
    } else if ( elem % 2 !== 0) {
        console.log(`${elem} tekttir anam`);
    } else {
        console.log(`${elem} çifttir gülüm`);
    }
}
*/
/*
for ( var elem = 0; elem <=15; elem++){

    if ( elem % 2 !== 0 ){
        console.log(`${elem} tekrtir.`); //elemin içinde bulunduğu kısım tırnak değil bag tick
    } else if ( elem % 2 === 0) {
        console.log(`${elem} çifttir anam`);
    } else {
        console.log(`${elem} tektir`);
    }
}
*/

//3 e bölünen fiz 5e bölünen buz ikisinede bölünen fiz buz yazıcak
//benim çözümüm
/*
for ( var t = 1 ; t<101 ; t++){
    if (t % 3 == 0 ){
        if(t % 5== 0){
            console.log(`${t}fiz buz`);
        }
        else{
            console.log(`${t}fiz`);
        }
    }
    else{
        if(t % 5 == 0){
            console.log(`${t}buz`);
        }
    }
}
*/

//hocanın çözümü
/*
for ( var t = 1 ; t<101; t++){
    if ( t % 3 === 0 && t % 5 === 0){
        console.log(`${t} FizzBuz`);
    }
    else if (t % 5 === 0){
        console.log(`${t}buz`);
    }
    else if (t%3===0){
        console.log(`${t}fizz`)
    }
    else{
        console.log(t);
    }
}
*/
//arraye sokma

var y = [];
for ( var t = 1 ; t<101; t++){
    if ( t % 3 === 0 && t % 5 === 0){
        console.log(`${t} FizzBuz`);
        y.push([t,'Fizzbuz']);
    }
    else if (t % 5 === 0){
        console.log(`${t}buz`);
        y.push([t,'Fizz']);
    }
    else if (t%3===0){
        console.log(`${t}fizz`);
        y.push([t,'Buz']);
    }
    else{
        console.log(t);
    }
}

console.log(y);