$(document).ready(function () {

    // $(selector).hide(speed,callback) syntax;
    // $(selector).show(speed,callback) syntax;
    // $(selector).toggle(speed,callback) syntax;
    // hide - show - toggle events / speed : slow, fast, milisecond


    $('#b1').click( () => {
        $('.box1').hide('slow')
    })

    $('#b2').click( () => {
        $('.box1').show(3000)
    })

    $('#b3').click( () => {
        $('.box1').toggle('fast')
    })
})