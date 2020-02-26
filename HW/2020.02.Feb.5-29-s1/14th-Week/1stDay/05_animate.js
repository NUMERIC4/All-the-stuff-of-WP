$(document).ready( () => {
    // $(selector).animate({params}, speed, callback);

    setTimeout( () => {
        var div = $('.box1');

        div.animate( {height: '600px', opacity: '0.3'}, 'slow')
        div.animate( {width: '600px', opacity: '0.9'}, 'slow')
        div.animate( {height: '100px', opacity: '0.3'}, 'slow')

        //callback function ile
        div.animate({width: '100px', opacity: '1'},'slow', () => {
            alert('Your animation completed ..!');
            $('p').text('Well Played ..!!')
        })
    }, 2000);

})