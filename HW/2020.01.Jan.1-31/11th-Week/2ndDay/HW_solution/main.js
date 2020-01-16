document.querySelector('button').addEventListener('click', race);

function race() 
{
    var red = document.getElementById('img1');
    var blue = document.getElementById('img2');

    var redPos = 0;     //red car position
    var bluePos = 0;    //blue car position

    var stopFunction = setInterval(() => {goFunc}, 1000);  //2 paremeters 1st one function 2nd one time (milisecond) -- setInterval(function, time) 

    function goFunc() 
    {
        pos1 += Math.floor(Math.random() * 5);
        pos2 += Math.floor(Math.random() * 5);

        red.style.left = 10 + pos1 + "px";
        blue.style.left = 10 + pos2 + "px";

        if (pos1 >= 1270)
        {
            clearInterval(stopFunction);
            document.querySelector('p').innerHTML = 'Red won';
        }
        else    if( pos2 >= 1270 )
        {
            clearInterval(stopFunction);
            document.querySelector('p').innerHTML = 'Blue won';
        }
        else
        {
            clearInterval(stopFunction);
            document.querySelector('p').innerHTML = 'Draw';
        }
    }
}