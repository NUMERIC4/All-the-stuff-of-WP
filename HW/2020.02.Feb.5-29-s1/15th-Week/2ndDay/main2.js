//function to load data of quotes
async function loadQuotes(param = '') {

        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        console.log(data);

        if (param) {
            var quote = data.filter(item => item.text.includes(param));
        } else {
            var quote = data;
        }
        var randomIndex = Math.floor(Math.random() * quote.length);

        // console.log(randomIndex);
        // console.log(quote[randomIndex]);
        return quote[randomIndex];
    }

    // function to load image
    async function loadImage(topic = "quote") {
        const response = await fetch(`https://pixabay.com/api/?key=15252046-515c61fdca37f254d0bbbea08&q=${topic}&image_type=photo&pretty=true`);

        // console.log(response);
        const data = await response.json();
        // console.log(data);

        var randomIndex = Math.floor(Math.random() * data["hits"].length);
        var image = data["hits"][randomIndex].webformatURL;
        // console.log(image);

        return image;
    }





    $(document).ready( () => {

        $('body').css({ "background-image":"url('bg.jpg')",
                        "background-position":"center-top",
                        "background-repeat":"no-repeat",
                        "background-size":"cover"})

        $('#random').click(async () => {
            var soz = await loadQuotes();
            var image = await loadImage();
            $("#text").text(soz.text);
            $("#author").text(soz.author);
            $("#imgQuote").attr('src', image);
        })

        $('#topic').click(async () => {

            var topic = $('#inputTopic').val();

            var soz = await loadQuotes(topic);
            var image = await loadImage(topic);
            $("#text").text(soz.text);
            $("#author").text(soz.author);
            $("#imgQuote").attr('src', image);

            $('#inputTopic').val('')
        })



    })