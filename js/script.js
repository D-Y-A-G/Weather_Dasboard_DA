//setting up openweather APIKey and url and elements to display data

var APIKey = "329a430c78a8cebf9c6c895dedfc7209";
var searchButton = document.querySelector("#button-addon2");
var tempEl = document.querySelector("#currentTemp");
var city = [];
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
    "http://api.openweathermap.org/data/2.5/weather?q=" + // need to use oncall api lat and long
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

      //for (var i = 0; i < data.length; i++){
      //var showCity = document.createElement("div");
      //showCity.textContent = data[i].main;

      //}
    });
}

searchButton.addEventListener("click", getWeather);

//User inputs the name of the city that they would like to check current weather

//User clicks search and is presented with current weather for city searched
