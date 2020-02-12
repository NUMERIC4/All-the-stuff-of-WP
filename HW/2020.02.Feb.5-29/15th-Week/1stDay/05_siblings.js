$(document).ready(() => {

    $('#btn1').click(() => {
        $("h2").next().css({
            "color": "red",
            "border": "2px solid red"
        });
    })

    $('#btn2').click(() => {
        $("h2").nextAll().css({
            "color": "red",
            "border": "2px solid red"
        });
    })

    $('#btn3').click(() => {
        $("h2").nextUntil('p').css({
            "color": "red",
            "border": "2px solid red"
        });
    })

    $('#btn4').click(() => {
        $("h2").prev().css({
            "color": "red",
            "border": "2px solid red"
        });
    })

    $('#btn5').click(() => {
        $("h2").prevAll().css({
            "color": "red",
            "border": "2px solid red"
        });
    })

    $('#btn6').click(() => {
        $("h2").prevUntil('p').css({
            "color": "red",
            "border": "2px solid red"
        });
    })

});