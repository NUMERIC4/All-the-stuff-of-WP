$(document).ready( () => {
    // $(selector).slideDown(speed,callback);
    //slideDown, slideUp, slideToggle / speed : slow, fast, milisecond

    $('#b1').click( () => {
        $('.box1').slideDown(2);
    })

    $('#b2').click( () => {
        $('.box1').slideUp(2);
    })

    $('#b3').click( () => {
        $('.box1').slideToggle(2000);
    })
})