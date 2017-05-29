$("document").ready(function() {
    getCoords();

});

var weatherObj = {
    "01d": "sunny",
    "01n": "starry",
    "02d": "rainbow",
    "02n": "rainbow",
    "03d": "cloudy",
    "03n": "cloudy",
    "04d": "cloudy",
    "04n": "cloudy",
    "09d": "rainy",
    "09n": "rainy",
    "10d": "rainy",
    "10n": "rainy", 
    "11d": "stormy",
    "11n": "stormy",
    "13d": "snowy",
    "13n": "snowy",
    "50d": "cloudy",
    "50n": "cloudy"
}

function changeWeather(json) {
   console.log(json);
   var temp = Math.round(((json.main.temp) - 273.15));
   var local = json.name + '/' + json.sys.country;
   var icon = '<div class="' + weatherObj[json.weather[0].icon] + '"></div>';
   console.log(icon);
   $('.temperature').html(temp + '&degC');
   $('.local').html(local);
   $('.icon-temp').html(icon);

   document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_1280.jpg')";
}

function getCoords() {
    console.log("entrou");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            apiUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=61261992ade6e8d337eddec0b9e2c6d6';
            $.getJSON(apiUrl, changeWeather); 
            console.log(apiUrl);
        });
    }
    
}


