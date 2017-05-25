$("document").ready(function() {
    getCoords();

});

function changeWeather(json) {
   console.log(json);
   var temp = Math.round(((json.main.temp) - 273.15));
   console.log(temp);
   $('.temperature').html(temp + ' &degC');
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


