//setting up openweather APIKey and url

var APIKey ="f11d17f447a311709f9c2eb37981ebff";
var city = "";
var searchButton = document.querySelector(".searchbtn")

function getApi() {
   //using url link to get weather data
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;

//need to fetch data from openweather API
    fetch(queryUrl)
    .then(function (response){
        return (response);
    })
    .then(function (data){
        console.log(data)
    
    });
    
    
}

searchButton.addEventListener("click", getApi)

//User inputs the name of the city that they would like to check current weather

//User clicks search and is presented with current weather for city searched