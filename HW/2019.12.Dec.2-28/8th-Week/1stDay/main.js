/*

switch (expression) {
    case x:
        //kod blogu
        break;
    case y:
        //kod blogu
        break;
    case z:
    case t:
        //kod blogu
        break;
    default:
        //kod blogu
        break;
}

*/
    /*
    var i = 1;
    if ( i <= 10) {
        //kod blogu
    } else if(i<=20) {
        //kod blogu
    }

    // ***** switchin case lerinde specific konumlar vardır aralık verilemez.

    */

        /*
        //without default 

        var today = new Date();     //new Date()--take the log of related data with date on computer 
        console.log(today);
        today = today.getDay();     //getDay()--> outputs --> 0-sunday 1-monday 2-tuesday 3-wednesday 4-thursday 5-friday 6-saturday
        console.log(today);         //1
                                    //the aim printing the date of today with using stitchcase and getDay() func
        var day;                    //undefined - we will get value from getDay


        //strict mode -- === -- so switch case working on strict mode so we should be aware to type of data too !!!!
        switch (today) {
            case 0:
                day = 'pazar';
                break;
        //  case '1':               //in this case result will detemine as undetermien
            //  day = 'pazartesi';
            //  break;
            case 1:
                day = 'pazartesi';
                break;
            case 2:
                day = 'salı';
                break;
            case 3:
                day = 'çarşamba';
                break;
            case 4:
                day = 'perşembe';
                break;
            case 5:
                day = 'cuma';
                break;
            case 6:
                day = 'cumartesi';
                break;
        }
        console.log(day);
        */
        /*
        var today = new Date();   
        console.log(today);
        today = today.getDay();     
        console.log(today);         
        var text;
            //with default
            switch (today) {
                case 6:
                    text = 'Today is saturday';
                    break;
                case 5:
                    text = 'Today is friday';
                    break;
                case 4:
                    text = 'Today is thursday';
                    break;
                case 3:
                    text = 'Today is wednesday';
                    break;
                case 2:
                    text = 'Today is tuesday';
                    break;
                case 1:
                    text = 'Today is monday';
                    break;
                default:
                    text = 'Today is Sunday';
                    break;
            }

            console.log(text);
            */
                /*
                //complex seitch if stuff?
                var today = new Date();   
                console.log(today);
                today = today.getDay();     
                console.log(today);         
                var text1;    

                switch (today) {
                    case 4:
                    case 5:
                        text1 = 'Yasasın hafta sonu yaklaşıyor';
                        break;
                    case 0:                                         //this means under this 2 conditiıons work this text1
                    case 6:
                        text1 = 'Oh be hafta sonu';
                    default:
                        text1 = 'Haftasonuna daha var';
                        break;
                }
                console.log(text1);

                */

                    /*
                    //We will write a function. It will take name of fruit and return the price of it with name

                    //syntax of func
//                  function FiyatAL() 
//                  {
                        //kodBlogu
//                      return
//                  }

                    var TakePrice = function (fruit) {
                        
                        fruit = fruit.toLowerCase();    //makes all letter small to unify the entrance type and avoid the case sensitivity errors of js

                        switch (fruit) {
                            case 'portakal':
                            case 'elma':
                                price = 2.50;
                                break;
                            case 'muz':
                            case 'kiwi':
                                price = 3.50;
                                break;
                            case 'kestane':
                                price = 5.00;
                                break;
                            default:
                                price = 0;              //in case the entred fruit doesnt exist database we just mark it and we will use it afterwards
                                break;
                        }
                        return [fruit, price];
                    }

                    console.log(TakePrice('kestane'));  //["kestane", 5]
                    console.log(TakePrice('elma'));     //["elma", 2.5]
                    console.log(TakePrice('muz'));      //["muz", 3.5]
                    console.log(TakePrice('kiraz'));    //["kiraz", 0]

                    var result = TakePrice('kiraz');    //Aradığınız urun olan kiraz reyonumuzda bulunmamaktadır
                //  var result = TakePrice('kiwi');     //Aradığınız urun olan kiwi'ın fiyatı 3.5
                    console.log(result);                //["kiraz", 0]

                    switch (result[1]) {
                        case 0:
                            console.log(`Aradığınız urun olan ${result[0]} reyonumuzda bulunmamaktadır`);
                            break;
                        default:
                            console.log(`Aradığınız urun olan ${result[0]}'ın fiyatı ${result[1]}`);
                            break;
                    }
                    */


                        //ARRAY METHODS

                            /*

                                unshift()               push()  ----> to add an item
                                        [...........]
                                shift()                 pop()   ----> to remove an item
                                            splice()
                            */

                                /*
                                //push()

                                var x = [1, 2, 3, 4, 5];
                                console.log(x);             //[1, 2, 3, 4, 5]

                                x.push(10);                 //you can add anything in anydatatype
                                console.log(x);             //[1, 2, 3, 4, 5, 10]

                                var y = x.push('istanbul'); //we can take the length of x and hold that value on y
                                console.log(x);             //[1, 2, 3, 4, 5, 10, "istanbul"]
                                console.log(y);             //7 --> this is the length of x array go to row 200

                                var z = x;
                                console.log(z);             //[1, 2, 3, 4, 5, 10, "istanbul"]

                                x[0] = 121;
                                console.log(x);             //[121, 2, 3, 4, 5, 10, "istanbul"]
                                console.log(z);             //[121, 2, 3, 4, 5, 10, "istanbul"]     we define z with referance of x so every change on x will affect the result of z too
                                */

                                    //Kapıda kaldığım kısım var tekrarda eklerim

                                    /*
        //saat 20.14ten devamı
                                    var fruit = ['muz', 'portakal', 'elma', 'mango'];
                                    fruit[0] = 'havuc';
                                    fruit[2] = 'pırasa';
                                    console.log(fruit);                                 //["havuc", "portakal", "pırasa", "mango"]

                                    fruit[6] = 'kavun';
                                    //fruit[fruit.length] = 'karpuz';
                                    console.log(fruit);                                 //["havuc", "portakal", "pırasa", "mango", empty × 2, "kavun"]
                                    console.log(fruit.length);                          //7
                                    console.log(fruit[4]);                              //undefined
                                    fruit[fruit.length-1] = 'ananas';
                                    console.log(fruit);                                 //["havuc", "portakal", "pırasa", "mango", empty × 2, "ananas"]
                                    */

                                        /*
                                        //splice(position, amount of erase elelement, new element)---- 2nd and 3rd parameters optional

                                        //adding new elements without deleting anything
                                        var fruit = ['muz', 'portakal', 'elma', 'mango'];
                                        console.log(fruit);                             //["muz", "portakal", "elma", "mango"]
                                        fruit.splice(2, 0, 'karpuz', 'kavun', 'erik');  //we pick the number 2 because we wanna add new stuff after portakal
                                        console.log(fruit);                             //["muz", "portakal", "karpuz", "kavun", "erik", "elma", "mango"]

                                        //adding new elements with eraasing some of them
                                        var fruit2 = ['muz', 'portakal', 'elma', 'mango'];
                                        console.log(fruit2);                            //["muz", "portakal", "elma", "mango"]
                                        fruit2.splice(2, 1, 'karpuz', 'kavun', 'erik');
                                        console.log(fruit2);                            //["muz", "portakal", "karpuz", "kavun", "erik", "mango"] -- elma gone

                                        //deleting without adding new element
                                        var fruit3 = ['muz', 'portakal', 'elma', 'mango'];
                                        console.log(fruit3);                            //["muz", "portakal", "elma", "mango"]
                                        fruit3.splice(1,2);
                                        console.log(fruit3);                            //["muz", "mango"]
                                        */

                                            /*
                                            //slice() Method -- > create new array by copying a specific part of an another array
                                            //slice(start,end) -- > end value is not taken by the new array
                                            var Clothes = ['pantolon', 'kazak', 'gömlek', 'mont', 'ceket'];
                                            //we want to take gömlek to another array
                                            var NewClothes = Clothes.slice(2,3);        //index of gömlek is 2 so this is our start point and the end value is not included so we decide 3 as an end point
                                            console.log(Clothes);                       //["pantolon", "kazak", "gömlek", "mont", "ceket"]
                                            console.log(NewClothes);                    //["gömlek"]
                                            //according to these outputs we didnt change the original array and also we create new array with it
                                            var NewClothes2 = Clothes.slice(2,4);
                                            console.log(Clothes);                       //["pantolon", "kazak", "gömlek", "mont", "ceket"]
                                            console.log(NewClothes2);                   //["gömlek", "mont"]
                                            */

                                                /*
                                                //concat() method
                                                var x = [1,2,3,4];
                                                var y = [5,6,7,8];
                                                var z = x + y;
                                                console.log(z);                         //1,2,3,45,6,7,8
                                                console.log(typeof(z));                 //string

                                                var w = x.concat(y);                    //this method help us to unite to arrays
                                                console.log(w);                         //[1, 2, 3, 4, 5, 6, 7, 8]
                                                console.log(typeof(w));                 //object

                                                var t = x.concat(['ali', 'kerim']);
                                                console.log(t);                         //[1, 2, 3, 4, "ali", "kerim"]

                                                var p = [1,2,3,4].concat(['ali', 'hoff']);
                                                console.log(p);                         //[1, 2, 3, 4, "ali", "hoff"]

                                                //unite more then 2 arrays
                                                var u = [1,2,3].concat(['ankara','kazak'], [34,'hasan']);
                                                console.log(u);                         //[1, 2, 3, "ankara", "kazak", 34, "hasan"]
                                                //there is no limitation about the amount of arrays we wanna add
                                                */

                                                //the info that just give inside the lecture as an pill
                                                // join()    tostring()     indexof()       reverse()

                                                    