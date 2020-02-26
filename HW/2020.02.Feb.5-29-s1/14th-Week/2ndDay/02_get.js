$(document).ready( () =>
{
    $('#b1').click( () => 
    {
        alert('Text of p : ' + $('#test').text())
    })

    $('#b2').click( () => 
    {
        alert('Text of p : ' + $('#test').html())
    })

    $('#b3').click( () => 
    {
        alert('Text of p : ' + $('ul').text())
    })

    $('#b4').click( () => 
    {
        alert('Text of p : ' + $('ul').html())
    })

    $('#b5').click( () => 
    {
        var old = $('ul').html();
        var yeni ='<li>Wasser</li>';

        $('ul').html(old+yeni);
        // $('ul').html(old+ '<li>Wasser2</li>');
        // $('ul').html($('ul').html() + '<li>Wasser3</li>');
    })

    $('input').change( function()
    {
        $('#city').text('City name is : ' + $(this).val())
    })

    $('#city').text('City name is : ' + $('input').val())
})