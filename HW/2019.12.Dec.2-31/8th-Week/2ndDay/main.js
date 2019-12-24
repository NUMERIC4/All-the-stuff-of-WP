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


                //Define a function which will find the longest string in a sentence
                var TheLongestWord = function (str) //we should analyze each one of the words inside the sentence. So we will assign them into an array and we will do it with for loop
                {
                    var Array1 = str.split(' ');
                    var Result = Array1[0];         //at first step we accept the very first word as the longest one

                    for (let i = 1; i < Array1.length; i++) //We dont need to analyze first element so we declareias 1(seco  ndelementaccordingtoindex)
                    {
                        if(result.length < Array1[i].length)
                        {
                            result = Array1[i];             //Decleration of the new longest word
                        }
                    }
                }
                console.log(TheLongestWord('What is The Time Of The Web Development Lecture For Today'))