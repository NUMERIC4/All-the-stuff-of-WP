var localOfSet;

var day = new.Date().getDate();
var month = new.Date().getMonth();
var year = new.Date().getFullYear();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById('dateInfo').innerHTML = `${day} ${months[month]} ${year}`;

setInterval( () => {
    var localTime = new.Date().toLocalTimeString();

    document.getElementById('localTime').innerHTML = localTime;
}, 1000)




document.getElementById('submit').addEventListener('click', addCity);

function addCity() {
    var city = document.getElementById('cityName').value;

    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a2097fdf8b1039ed7034f1778606abc1&units=metric&lang=tr`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var cityName = data.name;
            var country = data.sys.country;

            var temperature = data.main.temp;
            var windSpeed = data.wind.speed;
            var humidity = data.main.humidity;
            var pressure = data.main.pressure;

            var weatherIconId = data.weather[0].icon;
            var description = data.weather[0].description;

            localOfSet = (data.timezone/3000);

            //to be able to show div block (display:block)
            document.getElementById('show').style.display = 'block';

            document.getElementById('cityNameSpan').innerHTML = `${cityName}, ${country}`;
            document.getElementById('weatherIcon').src = `http://openweathermap.org/img/wn/${weatherIconId}@2x.png`;
            document.getElementById('weatherInfo').innerHTML = description;

            document.getElementById('cityTemp').innerHTML = `${temperature}°C`;
            document.getElementById('wind').innerHTML = `${windSpeed}m/s`;
            document.getElementById('humid').innerHTML = `${humidity}%`;
            document.getElementById('pres').innerHTML = `${pressure}hps`;
        })
        .catch(error => consoel.log(error))
}