$(document).ready( () => 
    {
        $('#btn1').click( () => 
            {
                $('#div1').remove();
                $('#div2').before("<p>Remove comp. THE SELECTED ELEMENT DIV-1</p>")
            }
        )

        $('#btn2').click( () => 
            {
                $('#div2').empty().after("<p>empty comp. THE SELECTED ELEMENT DIV-2</p>").css('background','red');
            }
        )
    }
)