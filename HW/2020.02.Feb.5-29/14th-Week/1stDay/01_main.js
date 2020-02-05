/*
the JQuery library contains the following features
----------------------------------------------------
HTML/DOM manipulation
CSS manipulation
HTML event methods
Effect and animations
AJAX
Utilites (add/change attributes)

Basic syntax is:
----------------------
${selector}.action(function () {} )
    .A $ sign to define/access JQuery
    .A (selectore) to "query (or find)" HTML elements ---- ${} ile başlar, CSS SELECTORE, ÖNELİ!!!!
    .A jQuery action() to be performed on the element(s) -------- Events'ler

    $(selectors).action(function(){
        //code here
    })

jQuery uses CSS syntax to select elements
--------------------------------------------
    $(this).hide() - hides the current element.
    $("p").hide() - hides all <p> elements.
    $(".test").hide() - hides all elements with class="test".
    $("#test").hide() - hides the element with id="test".

*/


/*
2 method to start jQuery in JS     !!!!!! First one preferrable

1st 

$(document).ready(function(){
    //jquery methods go here
});

2nd


$(function(){
    //jQuery methods go here
});
*/


$(document).ready(function (){
    //jquery methods go here

    //this is the method
        // $(selectors).action(function(){
        //  //code here
        //})

    $('.one').click(function () {
        $("#first").hide();
    });
    
    $('#two').click(function () {
        $(".second").hide();
    });
    
    $('.three').click(function () {
        $("p:last").hide();
    });


    // hover: 1. fonksiyon mouseenter için     / 2. fonksiyon : mouseleave için
    $('h2').hover(  function () {
                                    $(this).css('color', 'red')
                                }, 
                    function() {
                                    $(this).css('color', 'black')
                                })

    // coklu event/action
    $('.box1').on({
        //1. event
        mouseenter : function () {
            $(this).css({"textAlign": "center", "lineHeight": "250px", "color":"blue", "background":"yellow" })  //here is js so we write according to it
        },

        //2. event
        mouseleave : function () {
            $(this).css({"background":"lightblue", "color":"black"})
        },

        //3. event
        click : function () {
            $(this).css("fontSize","20px")
        }

    });

});