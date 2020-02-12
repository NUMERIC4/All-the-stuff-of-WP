$(document).ready(() =>
    {
        $('#btn1').click(() => 
            {
                $('span').parent().css({'color':'red','border': 'solid', 'border': '2px solid red'});
            }
        )

        $('#btn2').click(() => 
            {
                $('span').parents().css({'color':'red','border': 'solid', 'border': '2px solid red'});
            }
        )

        $('#btn3').click(() => 
            {
                $('span').parentsUntil('div').css({'color':'red','border': 'solid', 'border': '2px solid red'});
            }
        )

        $('#btn4').click(() => 
            {
                // $("div.one").children().css({'color':'red','border': 'solid', 'border': '2px solid red'});   //tüm child ları alır
                $('div.one').children('ul').css({'color':'red','border': 'solid', 'border': '2px solid red'});  //sadece ul olan child ı alır
            }
        )

        $('#btn5').click(() => 
            {
                // $('div.one').find('span').css({'color':'red','border': 'solid', 'border': '2px solid red'});
                $('ul').find('span').css({'color':'red','border': 'solid', 'border': '2px solid red'});
            }
        )
    }
)