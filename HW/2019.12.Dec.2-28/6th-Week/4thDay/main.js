/*
var TakenNum = window.prompt("Faktoriyeli alı9nacak sayı yı yazınız");
//atladığım burasıydı
TakenNum =Math.floor(TakenNum);
var Holder = 1;
var TakenNumNS;
for (TakenNumNS = TakenNum;TakenNumNS <0; TakenNumNS--)
{
    Holder = Holder * TakenNumNS;
}

// if (TakenNum<0)
// {
//     console.log(`${TakenNum}!is not possible`);
// }
// else {
    console.log(`${TakenNum}! = ${Holder}`);
// }

//eksik 1 tam sayı olmayanları elemedim negatif tam sayıları elemedim

//anlamadım if kısmında bir sıkıntı ortaya çıktı cevap hep 1 çıkıyor
*/

//hocanın çözümü
/*
var num = window.prompt(' Bir sayı giriniz :');
// num = parseInt(num);
num = Math.floor(num);

var faktoriyel = 1;

if (num === 0 ) {
    console.log(`${num}! faktoriyel = ${faktoriyel}`);
} else if ( num < 0 ) {
    window.alert('Lütfen pozitif bir sayı giriniz!')
} else {

    for ( var i = 1 ; i <= num ; i++) {
        faktoriyel = faktoriyel * i;
    }
    console.log(`${num}! faktoriyel = ${faktoriyel}.`)
    console.log(num + "! faktoriyel = " + faktoriyel + ".")
}*/


/*
//Array problemi -- kapotik karma bir arrayimiz var içinden string değerlerini başka array e çekip console a bastırmamız gerek
var IlkArray = [];
var ArindirilmisArray = [];
var Bayrak = IlkArray.length;
for (var Sayac = 0 ; Sayac < Bayrak ; Sayac++ )
{
    if ((typeOf IlkArray[Sayac]) === 'String')
    {
        ArindirilmisArray.push(IlkArray[Sayac]);
    }
}
//çalıştıramadım yine ya 
*/

//Hocanın uygulaması :S
/*
var array = [ 1 , 5 , 'istanbul' , 'ankara' , 15 , 0.45 , 'bursa' , {} , [ 1 , 2 ] , function(){} , 'izmir'];

var newArray = [];

for ( var i = 0 ; i < array.length ; i++) {
    if ( typeof array[i] === 'string') {  // 'string yazman lazım yada Strng yazman gerekiyor yoksa string i anlamıyor çünkü JS harfe duyarlı. Ama String yazıncada arrayi basmadı 
        newArray.push(array[i]);
        console.log(`${array[i]} is typeof String`);
    } else {
        console.log(`${array[i]} is NOT String, it's type` + typeof(array[i]));
    }
}
console.log(newArray); //yeni array
//typeof(array[i]).toUpperCase(); burada da stringin bütün harflerini büyük bastırıyoruz
*/
/*
//bu 8 satırlık kodu daha kısa yazma yolu
var array = [ 1 , 5 , 'istanbul' , 'ankara' , 15 , 0.45 , 'bursa' , {} , [ 1 , 2 ] , function(){} , 'izmir'];
newArray = array.filter( item => typeof(item) === 'string').map( item => console.log(item))
*/


//Array elemanlarının tekrarlarını engelleyecek bir kod isteniyor

//dışarı bir for loop koyarız bu ilk arrayi taramamızı sağlar içerisine bir for loop daha koyarız yeni arraydeki elemanları kontrol edeceğimiz array elemanı ile kıyaslayacak içeri bir bayrak yerleştiririz herhangi durumda eşleşme gerçekleşirse bayrak durum değiştiricek true dan false gibi iç for looptan çıktıktan sonra if ayarlarız bayrak değişmediyse yeni arraye o itemin alınmasını sağlarız değiştiyse bayrağın değerini düzeltiriz. Dış for döngüsü bittiğinde arıtılmış arrayi bastırırız

//yöntem 1 dedi ama bende çalışmadı
//var x = [ 1, 2, 2, 3, 6, 7, 3, 9, 3, 6, 1, 4, 2, 3];

//    var newX = [];
/*
for ( var i = 0; i < x.length; i++) {
    if (newX.includes(x[i])) {
        continue;
    } else {
        newX.push(x[i])
    }
}

*/
/*
for (var i = 0; i<x.length; i++) {
    if (!newX.includes(x[i])) {
        newX.push(x[i]);
    }
}



console.log[newX];
//çalıştıramadım
*/

// var x = [10, 1, 2, 2, 3, 6, 7, 3, 9, 3, 6, 1, 4, 2, 3, 10];

//     var newX = [];  
// newX = x.filter(item => item < 8)//.map(item => console.log(item));
// console.log(newX);