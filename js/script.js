//setting up openweather APIKey and url and elements to display data

var APIKey = "329a430c78a8cebf9c6c895dedfc7209";
var searchButton = document.querySelector("#button-addon2");
var tempEl = document.querySelector("#currentTemp");
var pastCities = [];
//Displaying today's date

var today = moment().format("  (dddd, MMMM, Do YYYY) ");

//need to get user input to add to url data and get weather info

// function handleSearchBtn(event) {
//   event.preventDefault();

//   if (!citySearchInput) {
//     console.error("You need to type a city name");
//     return;
//   }

//   var queryUrl =
//     "http://api.openweathermap.org/data/2.5/weather?q=" +
//     citySearchInput +
//     "&units=imperial" +
//     "&appid=" +
//     APIKey;

//   location.assign(queryUrl);
// }

function getWeather() {
  //using url link to get weather data
  var citySearchInput = document.querySelector("#cityInput").value;
  var queryUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" + // need to use oncall api lat and long
    citySearchInput +
    "&units=imperial" +
    "&appid=" +
    APIKey;

  //need to fetch data from openweather API
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); // .main to get temp

        var showCity = document.querySelector("#currentTemp");
        showCity.textContent = "Current Temperature: " + data.main.temp + " °F"; //alt 0176 for degree

        var cityName = document.querySelector("#cityName");
        cityName.textContent = data.name + today; // need to add icon

        var currentWind = document.querySelector("#windSpeed");
        currentWind.textContent = "Wind: " + data.wind.speed + " Mph";

        var humidityLevel = document.querySelector("#humidity");
        humidityLevel.textContent = "Humidity: " + data.main.humidity;

        var clouds = document.querySelector("#clouds");
        clouds.textContent = "Clouds: " + data.clouds.all;

        //////getting latitude and longitude/////////

        var latitude = data.coord.lat;
        console.log(latitude);

        var longitude = data.coord.lon;
        console.log(longitude);

          fetch(queryUrl)
            .then(function (response) {
            return response.json();
            })
            .then(function (data) {
            console.log(data); 
    });

    });
}

var fiveDayForecast = function(onecall){
  var citySearchInput = document.querySelector("#cityInput").value;
  var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?"

  fetch(oneCallUrl)
}

// var citiesSearched = function () {
//   localStorage.setItem("pastCities", JSON.stringify(pastCities));
// };

searchButton.addEventListener("click", getWeather);

//User inputs the name of the city that they would like to check current weather

//User clicks search and is presented with current weather for city searched
