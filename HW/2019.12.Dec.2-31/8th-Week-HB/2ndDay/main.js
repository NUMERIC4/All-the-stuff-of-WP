// document.getElementById("id").attribute = ".." ; .. kısmına o attribute yerine gelicek şeyi yazıyoruyz

/*
//Arrow Func.
            1.
            function name(params) {
                //code
            }

            2.
            var name = function (params) {
                //code
            }

            3.
            var name = (parameters) => {
                //code
            }
                Exception 1 : If there is just one parameter exist then we dont need ()
                var name = parameter1 => {

                }

                Exception 2 : If the code is one row we dont need {}, we dont need return either
                var name = () => code;
*/

    /*
    //Classic Way
    var Hello = function () 
    {
        console.log('Hello World');
    }
    Hello();

    //Arrow way
    var Hello2 = () => 
    {
        console.log('Hello2 World');
    }
    Hello2();
    */
    
        /*
        var Hello = function (text) 
        {
            console.log(text);
        }
        Hello('Bosphorus and Capital Ankara');

        var Hello2 =  (text) =>
        //{
            console.log(text); //Just one row code then we remove {}
        //}
        Hello2('Bosphorus and Capital Ankara');
        */

            /*
            //Taking multiple values as an input of function
            //Classic way
            var area = function (ShortEdge, LongEdge) 
            {
                console.log(`Short side ${ShortEdge} and long side ${LongEdge} quadrangle's area is ${ShortEdge * LongEdge}.`)
            }
            area(4,6);              //Outpu --> Short side 4 and long side 6 quadrangle's area is 24.

            //Arrow way
            var area2 = (ShortEdge, LongEdge) =>
            //{
                console.log(`Short side ${ShortEdge} and long side ${LongEdge} quadrangle's area is ${ShortEdge * LongEdge}.`)
            //}
            area2(4,6);
            */

                /*
                //Define a function which will find the longest string in a sentence
                //Classic way
                var TheLongestWord = function (str) //we should analyze each one of the words inside the sentence. So we will assign them into an array and we will do it with for loop
                {
                    var Array1 = str.split(' ');
                    var Result = Array1[0];         //at first step we accept the very first word as the longest one

                    for (let i = 1; i < Array1.length; i++) //We dont need to analyze first element so we declareias 1(seco  ndelementaccordingtoindex)
                    {
                        if(Result.length < Array1[i].length)
                        {
                            Result = Array1[i];             //Decleration of the new longest word
                        }
                    }
                    return Result;
                }
                console.log(TheLongestWord('What is The Time Of The Web Development Lecture For Today'));

                //Arrow way
                var TheLongestWord2 = str =>        //one parameter thats why we dont use ()
                {
                    var Array1 = str.split(' ');
                    var Result = Array1[0];         

                    for (let i = 1; i < Array1.length; i++) 
                    {
                        if(Result.length < Array1[i].length)
                        {
                            Result = Array1[i];             
                        }
                    }
                    return Result;
                }
                console.log(TheLongestWord2('What is The Time Of The Web Development Lecture For Today'));
                */


                    //Array itterations methods
                        //1. Array.forEach(function)
                        //2. Array.map(function)
                        //3. Array.filter(function)
                        //4. Array.find(function)
                        //5. Array.sum(function)
                        //6. Array.every(function)
                        //7. Array.reduce(function)
                        //8. Array.findIndex(function)

                        /*
                        //Foreach Metohde
                        //forEach(function) -------> Like a for loop
                            var Numbers = [45, 4, 9, 16, 25];           //Base Array

                            //Classic For Loop Way
                                for (var i = 0; i <Numbers.length; i++)
                                {
                                    console.log(`${i+1}. Element : ${Numbers[i]}`);
                                }
                                    /* Output
                                                1. Element : 45
                                                2. Element : 4
                                                3. Element : 9
                                                4. Element : 16
                                                5. Element : 25
                                    */
                            
                            //Calling Function with For loop
                                /*
                                function Write (value, index)
                                {
                                    return console.log(`${index + 1}. Element : ${value}.`)
                                }
                                for (var i = 0; i < Numbers.length; i++)
                                {
                                    Write(Numbers[i], i);
                                }
                                    /*Output
                                    1. Element : 45.
                                    2. Element : 4.
                                    3. Element : 9.
                                    4. Element : 16.
                                    5. Element : 25.
                                    */
//up to now we already know the methods but beyond this we start to learn new stuff :D what a beauty

                            //forEach + Classic Function Way
                                /*
                                Numbers.forEach(function (value, index)        //this value deterine with numbers array item from the beginning up to end, index will be array index value. So we dont have to declare them by manually the function will do it by its own. !! Mre important doesnt important what yoy write inside the () but the important side you should use same thing inside the forEach function also valid for almost anykind function
                                {
                                    console.log(`${index + 1}th value ,which is inside the array : ${value}. `)
                                }
                                );
                                    /*Output
                                    1th value ,which is inside the array : 45. 
                                    2th value ,which is inside the array : 4. 
                                    3th value ,which is inside the array : 9. 
                                    4th value ,which is inside the array : 16. 
                                    5th value ,which is inside the array : 25. 
                                    */

                            //forEach() + Arrow Function Way
                                /*
                                Numbers.forEach((number,index) => //we can hid {} because it is one row
                                //{
                                    console.log(`The value of ${index + 1} is : ${number}`)
                                //}
                                );
                                    /*Output
                                    The value of 1 is : 45
                                    The value of 2 is : 4
                                    The value of 3 is : 9
                                    The value of 4 is : 16
                                    The value of 5 is : 25
                                    */

                        /*
                        // MAP() Methode
                        //Create new array without messup with the old or base array
                            var List = [                                            //Base Array
                                ['Television', 1000],
                                ['Book', 15],
                                ['Bike', 350],
                                ['Mobile phone', 500],
                                ['Keyboard', 35],
                                ['CD', 10],
                                ['Computer', 1500]
                            ]

                            //Classic For Loop Way
                                var PriceList = [];
                                var NeedingsList = [];

                                for (var i = 0; i < List.length; i++)
                                {
                                    PriceList.push(List[i][1]);             //[1] for second element of nested array which is number so prices
                                    NeedingsList.push(List[i][0]);          //[0] for first element of nested array which is name of items
                                }

                                console.log(PriceList);                     //Output --> [1000, 15, 350, 500, 35, 10, 1500]
                                console.log(NeedingsList);                  //Output --> ["Television", "Book", "Bike", "Mobile phone", "Keyboard", "CD", "Computer"]

                            //Classic function Way
                                var ClassicFuncNeedingsList = List.map( function(item)  //item will represent the nested arrays itself
                                {
                                    return item[0];
                                }
                                );

                                var ClassicFuncPriceList = List.map(function (item)
                                {
                                    return item[1];
                                }
                                );

                                console.log(ClassicFuncNeedingsList);       //Output --> ["Television", "Book", "Bike", "Mobile phone", "Keyboard", "CD", "Computer"]
                                console.log(ClassicFuncPriceList);          //Output --> [1000, 15, 350, 500, 35, 10, 1500]
                            //Arrow Function Way
                                var ArrowFuncNeedingList = List.map( item => item[0] ); //item will represent the nested arrays. we have one parameter so we just remove () //just one row command so we dont need {} and also for that reason we dont need "return" too
                                var ArrowFuncPriceList = List.map( item => item[1] );

                                console.log(ArrowFuncNeedingList);          //Output --> ["Television", "Book", "Bike", "Mobile phone", "Keyboard", "CD", "Computer"]
                                console.log(ArrowFuncPriceList);            //Outout --> [1000, 15, 350, 500, 35, 10, 1500]
                        */

                        //Filter Methode
                        //Array.filter(function)    --> After filtering it creates new array with elements which has true value
                        /*
                            var List = [                                            //Base Array
                                ['Television', 1000],
                                ['Book', 15],
                                ['Bike', 350],
                                ['Mobile phone', 500],
                                ['Keyboard', 35],
                                ['CD', 10],
                                ['Computer', 1500]
                            ]

                            //Create new array with element whose prices greater then 500
                            /*
                                var FilterNeedings = [];

                                for (var i = 0; i < List.length; i++)
                                {
                                    if (List[i][1] > 500)               //Price check stage
                                    {
                                        FilterNeedings.push(List[i]);   //we want to reach name of product and price together
                                    }
                                }

                                console.log(FilterNeedings);
                                    /*Output
                                    (2) [Array(2), Array(2)]
                                    0: (2) ["Television", 1000]
                                    1: (2) ["Computer", 1500]
                                    length: 2
                                    */

                            //Classic Function Way
                            /*
                                var FilterClassicFuncNeedings = List.filter(function (item) 
                                {
                                    return item[1] > 500;
                                }
                                );

                                console.log(FilterClassicFuncNeedings);
                                    /*Output
                                    (2) [Array(2), Array(2)]
                                    0: (2) ["Television", 1000]
                                    1: (2) ["Computer", 1500]
                                    length: 2
                                    __proto__: Array(0)
                                    */

                            //Arrow Function Way
                                /*
                                var FilterArrowFuncNeedings = List.filter( item => item[1] > 500);

                                console.log(FilterArrowFuncNeedings);
                                    /*Output
                                    (2) [Array(2), Array(2)]
                                    0: (2) ["Television", 1000]
                                    1: (2) ["Computer", 1500]
                                    length: 2
                                    __proto__: Array(0)
                                    */

                        //Find Methode
                        //Array.find(function) --> It will give the first element which is passed the filter with true statemnet
                        /*
                            var List = [                                            //Base Array
                                ['Television', 1000],
                                ['Book', 15],
                                ['Bike', 350],
                                ['Mobile phone', 500],
                                ['Keyboard', 35],
                                ['CD', 10],
                                ['Computer', 1500],
                                ['Keyboard', 120]
                            ]

                            //For Loop Way finding "keyboard"
                                var FindItem;

                                for (var i = 0; i < List.length; i++)
                                {
                                    if (List[i][0].toLowerCase() === 'keyboard')
                                    {
                                        FindItem = List[i];
                                        break
                                    }
                                }

                                console.log(FindItem);
                                    //Output --> ["Keyboard", 35]

                            //Classic Function Way finding "keyboard"
                                var FindClassicFuncNeedings = List.find( function (item)
                                {
                                    return item[0].toLowerCase() === 'keyboard';
                                }
                                );

                                console.log(FindClassicFuncNeedings);
                                    //Output --> ["Keyboard", 35]

                            //Arrow Function Way finding "keyboard"
                            var FindArrowFuncNeedings = List.find(item => item[0].toLowerCase() === 'keyboard');

                            console.log(FindArrowFuncNeedings);
                                //Output --> ["Keyboard", 35]
                        */

                        //Every Methode
                        //Array.every(function) --> we aplly some test, it will check every elements that it pass or not. True, False
                        /*
                            var List = [                                            //Base Array
                                ['Television', 1000],
                                ['Book', 15],
                                ['Bike', 350],
                                ['Mobile phone', 500],
                                ['Keyboard', 35],
                                ['CD', 10],
                                ['Computer', 1500],
                                ['Keyboard', 120]
                            ]

                            //Check the price lower then 1600 or not for every element
                            var EveryArrowFuncItem = List.every( item  => item[1] < 1600);

                            console.log(EveryArrowFuncItem);
                                //Output --> true

                            var EveryArrowFuncItem2 = List.every( item  => item[1] < 1300);

                            console.log(EveryArrowFuncItem2);
                                //Output --> false
                        */

                    //Some Methode
                    //Array.every(function) --> we aplly some test, it will check is there any element that it pass. True, False
                    var List = [                                            //Base Array
                        ['Television', 1000],
                        ['Book', 15],
                        ['Bike', 350],
                        ['Mobile phone', 500],
                        ['Keyboard', 35],
                        ['CD', 10],
                        ['Computer', 1500],
                        ['Keyboard', 120]
                    ]

                    //Check the price lower then 20 or not for at least one element
                    var SomeArrowFuncItem = List.some( item  => item[1] < 20);

                    console.log(SomeArrowFuncItem);
                        //Output --> true

                    var SomeArrowFuncItem2 = List.some( item  => item[1] > 1700);

                    console.log(SomeArrowFuncItem2);
                        //Output --> false