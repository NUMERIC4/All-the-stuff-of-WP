$(document).ready( () =>
    {

        // addClass
        $('#btn1').click( () => 
            {
                $('div').addClass('active')
            }
        )

        // removeClass
        $('#btn2').click( () => 
        {
            $('div').removeClass('active')
        }
    )
    }
)