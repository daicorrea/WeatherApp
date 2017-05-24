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
}

function getCoords() {
    console.log("entrou");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var corsServer = "http://cors.now.sh/";
            apiUrl = 'https://api.apixu.com/v1/current.json?key=f656b34e64024e528c6182849171104&q=' + position.coords.latitude + ',' + position.coords.longitude + '&lang=pt';
            //apiUrl = 'http://samples.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=b1b15e88fa797225412429c1c50c122a1';
            console.log(corsServer + apiUrl);
            $.ajaxSetup( { cache:false} );
            $.getJSON( corsServer + apiUrl, changeWeather, 'jsonp' );
    });
    }
}
