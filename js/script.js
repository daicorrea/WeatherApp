$("document").ready(function() {
    getCoords();

  /*$('.twitter-quote').on('click', function() {
    var quote = $('#quote-text').text();
    var author = $('#quote-author').text();
    var tweetLink = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + author);
    window.open(tweetLink);
  });*/

});

function changeWeather(json) {
   console.log(json);
   var temp = Math.round(((json.main.temp) - 273.15));
   console.log(temp);
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


