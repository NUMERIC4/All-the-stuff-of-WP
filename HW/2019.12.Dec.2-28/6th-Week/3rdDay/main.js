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
var x = ['hasan','ahmet','veli'];
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);

for[]