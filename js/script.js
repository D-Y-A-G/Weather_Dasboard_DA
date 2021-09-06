//setting up openweather APIKey and url

var APIKey = "329a430c78a8cebf9c6c895dedfc7209";
var cityEl = document.querySelector("#cityName"); //need to change this to get val from user input on search bar
var searchButton = document.querySelector("#button-addon2");
var tempEl = document.querySelector("#currentTemp");
var city = [];
//need to get user input to add to url data

var getUserInput = function (event) {
  event.preventDefault();
  var cityInput = cityEl.value.trim();
  if (cityInput) {
    getWeather(cityInput);
    city.unshift({ cityInput });
    cityEl.value = "";
  }
};

function getWeather() {
  //using url link to get weather data
  var queryUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey;

  //need to fetch data from openweather API
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      //for (var i = 0; i < data.length; i++){
      //var showCity = document.createElement("div");
      //showCity.textContent = data[i].main;

      // }
    });
}

searchButton.addEventListener("click", getWeather);

//User inputs the name of the city that they would like to check current weather

//User clicks search and is presented with current weather for city searched
