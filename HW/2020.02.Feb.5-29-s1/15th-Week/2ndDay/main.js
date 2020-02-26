//function to load data of qutoes
async function loadQuotes(param = '') { //default settings of parameters
    const response = await fetch('https://type.fit/api/quotes'); //cevap beklememiz lazım o yüzden await gerek. Serverın bize cevabı response olacağı için değişken ismi o şekilde
    const data = await response.json(); //Gelen verileri json tarzında dataya alıcaz ama bunuda beklemek lazım
    console.log(data);

    if (param) {
        var quote = data.filter(item => item.text.includes(param))
    } else {
        var quote = data;
    }

    var randomIndex = Math.floor(Math.random() * quote.length);

    // console.log(randomIndex);
    // console.log(data[randomIndex]);
    return quote[randomIndex];
}

//function to load images
async function loadImage(topic = 'quote') {
    let response = fetch(`https://pixabay.com/api/?key=15252075-4fe405a8dbc4066471094a60b&q=${topic}&image_type=photo&pretty=true`);
    // console.log(response);
    const data = await response.json();
    // console.log(data)

    var randomIndex = Math.floor(Math.random() * data['hits'].length);
    var image = data['hits'][randomIndex].webformatURL;
    // console.log(image);
    return image;
}


loadImage();




$(document).ready(async () => {

    var soz = await loadQuotes();
    var image = await loadImage('management');

    $('#text').text(soz.text);
    $('#author').text(soz.author);
    $('#imgQuote').attr('src', image);
})