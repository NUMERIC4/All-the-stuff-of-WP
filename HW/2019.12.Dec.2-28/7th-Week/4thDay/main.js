/*
//ödevin yapımı
var computer = Math.floor(Math.random() * 20)+1; //normalde 0 ile 1 arası sayı üretir *20 yaptığımız da 0ile 19 arası üretir +1 ile 1 ile 20 arası ayarlanır Math.floor da chopping eylemi yapar her daim aşağı yuvarlar tam sayı olmasını sağlar
console.log(computer); //check için normalde işimiz yok

var times = window.prompt('kaç tahmin hakkınız olsun istersiniz :'); // kullanıcıdan alınıcak değer bu  
var newTimes = parseInt(times); //bu kullanıcının girdiği sayı değerini tam sayıya çevirir

while(isNaN(times) || (newTimes < 0)){
    times = window.prompt('Rakam olan bir değer giriniz');  //sayı girilmemiş veya negatif ise bu uyarı çıkıcak
    var newTimes = parseInt(times);
}

    for (var i = 1; i <= times; i++) {
        var tahmin;
    
        tahmin = window.prompt(`${i}. Sayınızı giriniz :`);//girilicek sayının index numarasını vermek için i değerini kullanıcaz
        tahmin = parseInt(tahmin);//burada alınan değeride tam sayıya çevirmemiz gerek
    
        if(tahmin === computer){
            window.alert(`Tebrikler ${i}. hakkınızda bildiniz.`);
            document.getElementById('sonuc').src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/German-Keyboard-Layout-T2-Version2-large.png/550px-German-Keyboard-Layout-T2-Version2-large.png'; //bildiğimiz durumda çıkıcak resim
            document.getElementById('text').innerHTML = 'tebrikler bildiniz';
            document.body.style.backgroundColor = 'lightgreen';
            break;//loop ları kırmak için bu yazı lazım bilindiği durumda tahmin 
        } else if (tahmin < computer) {
            if ( i === times ) {
                window.alert(`Üzgünüm bilemediniz, tutulan sayı ${computer}`); //son hakkın kullanıldığı durumda büyült küçült komutu çıkmasın diye
                window.alert(`Tebrikler ${i}. hakkınızda bildiniz.`);
                document.getElementById('sonuc').src = 'https://www.datacal.com/images/product/medium/209.jpg';
                document.getElementById('text').innerHTML = 'tebrikler bilemediniz';
                document.body.style.backgroundColor = 'red';
            } else {
                window.alert('Saynızı kuçuk kaldı, lütfen sayınızı artırınız!');
            }
        } else {
            if ( i === times ) {
                window.alert(`Üzgünüm bilemediniz, tutulan sayı ${computer}`); //son hakkın kullanıldığı durumda büyült küçült komutu çıkmasın diye
                document.getElementById('sonuc').src = 'https://www.datacal.com/images/product/medium/209.jpg';
                document.getElementById('text').innerHTML = 'tebrikler bilemediniz';
                document.body.style.backgroundColor = 'red';
            } else {
                window.alert('Saynızı büyük kaldı, lütfen sayınızı azaltınız!');
            }
        }
    }



    //neden blmiyorum ama html etkileyemiyorum.s
*/
    /*
    var x = "100";
    var y = "10";

    var z = x/y;
//bölme, çıkartma ve çarpma işlemlerinde datatype number oluyor

    console.log(z);         //10
    console.log(typeof(z)); //number
    
    z = x * y;
    console.log(z);         //1000
    console.log(typeof(z)); //number

    z = x - y;
    console.log(z);         //90
    console.log(typeof(z)); //number

    z = x + y;
    console.log(z);         10010
    console.log(typeof(z)); // string 

    */

        //NaN
        /*
        var x = 100 / "apple";  //sayıyı stringe böldük meraktan :D
        console.log(x);         //NaN = Not a Number
        console.log(typeof(x)); //number

        console.log(typeof(NaN));//number

        console.log(isNaN(100/"appler"));   //true  check edicez
        console.log(isNaN(100/"10"));       //false  bölme işleminde number çevrildi 
        console.log(isNaN(100/10));         //false  zaten number bölüyoruz dolayısıyla NaN değil
        */

            /*
            //Infinity and -Infinity
            var x = 100/0;
            console.log(x);         //Infinity
            console.log(typeof(x)); //number

            var x = -100/0;
            console.log(x);         //-Infinity
            console.log(typeof(x)); //number
            */

                /*
                //number ==> string
                var x = 10;
                x=x.toString();         //Dönüşüm kısmı
                console.log(x);         //10
                console.log(typeof(x)); //string
                */

                    //toFixed();
                    //It helps to declare decimal digit amount of number
                    /*
                    var x = 10.57896;

                    x=x.toFixed(3);

                    console.log(x);         //10.579
                    console.log(typeof(x)); //string
                    */

                    //.toPrecision()
                    //declare the amount of digit of number will shown and it will round the nuber
                    /*
                    var x = 10.57896;

                    x=x.toPrecision(5);

                    console.log(x);     //10.579
                    */

                        /*
                        //Number()
                        //transform the type to number
                        //parseInt()
                        //transform to integer number
                        //parseFloat()
                        //make decimal number

                        var x = "100";

                        x = Number(x);

                        console.log(x);         //100
                        console.log(typeof(x)); //number
                        
                        var y = "10.0567";

                        y = parseInt(y);

                        console.log(y);     //10
                        console.log(typeof(y)); //number
                        var y = "10.0567";
                        y = parseFloat(y);

                        console.log(y);         //10.0567
                        console.log(typeof(y)); //number
                        */

//------------------------------------------------------------------

//Applications


//#1

//make the input vise a versa
//we have a "Reverse()"
function reverseStr(str) {

    console.log(str);
    //This newStr will be the reverse str.
    var newStr = str.split(''); //split make our item an array stuff -- like this -- ["i", "s", "t", "a", "n", "b", "u", "l"]
    console.log(newStr);

    newStr = newStr.reverse();      //make the array reverse  
    console.log(newStr);            //["l", "u", "b", "n", "a", "t", "s", "i"]

    newStr = newStr.join('');       //make item array to string unite again
    console.log(newStr);            //lubnatsi
}
//Short cut
function reverseStrSC(str) {
    console.log(str);

    var newStr = str.split('').reverse().join('');  //we joint every function it will declare stuff
    return newStr;                                  //it should return something to gan an outout from it that is why we use return
}

console.log(reverseStrSC('hamburg'));


reverseStr('istanbul');

//what if we give a number

// console.log(reverseStrSC(4567));

/* We gain this error because split and join are functions for string not for numbers that s why we gain an error
main.js:182 Uncaught TypeError: str.split is not a function
    at reverseStrSC (main.js:182)
    at main.js:193
reverseStrSC @ main.js:182
(anonymous) @ main.js:193
*/

function reverseStrSCConsiderNumbers(str) {
    console.log(str);

    if (typeof(str)==="number"){
        str = str.toString();                           //first if the value that obtain from user is a number we transform it string then push to the same cycle
        var newStr = str.split('').reverse().join('');
    } else {
        var newStr = str.split('').reverse().join('');
    }

    return newStr;
}

console.log(reverseStrSCConsiderNumbers(345677));       //776543

function reverseStrSCConsiderAllType(str) {
    console.log(str);

    if (typeof(str)!=="string"){                        //that makes anything if it is not number
        str = str.toString();                           
        var newStr = str.split('').reverse().join('');
    } else {
        var newStr = str.split('').reverse().join('');
    }

    return newStr;
}

console.log(reverseStrSCConsiderAllType(false));        //false --> eslaf