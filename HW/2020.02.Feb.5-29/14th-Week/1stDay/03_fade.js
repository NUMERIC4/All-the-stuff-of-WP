$(document).ready( () => {
    //// $(selector).fadeIn(speed,callback);
    // fadeIn, fadeOut, fadeToggle, fadeTo events / speed : slow, fast, milisecond / fadeTo() allows fading to a given opacity (value between 0 and 1).

    $('#b1').on("click",() => {
        $('.box1').fadeIn(3000);
    });

    $('#b2').on("click",() => {
        $('.box1').fadeOut(3000);
    });

    $('#b3').on("click",() => {
        $('.box1').fadeToggle('slow');
    });

    $('#b4').on("click",() => {
        $('.box1').fadeTo('slow', -1);
    });
})