$(document).ready(function () {

    // append()
    $('#btn1').click( () => {
        $('p.cls1').append("<b>- Appended Text </b>")
    })
    $('#btn2').click( () => {
        let newElem = "<li>Appended Element </li>";
        $('ol').append(newElem);
    })

    // prepend
    $('#btn3').click( () => {
        $('p#id1').prepend("<b>Prepade Text - </b>")
    })
    $('#btn4').click( () => {
        $('ol').prepend("<li>Prepade Element - </li>")
    })

    // before
    $('#btn5').click( () => {
        let newElem = "Isminiz : <input type='text' placeholder='Isminiz'>";
        $('div').before(newElem);
    })
    
    // after
    $('#btn6').click( () => {
        let newElem = "<button onclick='doFunc()'>Send</button>";
        $('div').after(newElem);
    })
});

function doFunc () 
{
    let inputValue = $('input').val();
    let newElem = `<p>Hoş geldin ${inputValue}</p>`;
    $('div').append(newElem).css({'textAlign':'center', 'lineHeight':'250px'});
}