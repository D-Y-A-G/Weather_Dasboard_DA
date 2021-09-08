//setting up openweather APIKey and url and elements to display data

var APIKey = "329a430c78a8cebf9c6c895dedfc7209";
var searchButton = document.querySelector("#button-addon2");
var tempEl = document.querySelector("#currentTemp");
var pastCities = [];
//Displaying today's date

var today = moment().format("  (dddd, MMMM, Do YYYY) ");

//need to get user input to add to url data and get weather info

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

      //////getting latitude and longitude/////////

      var latitude = data.coord.lat;
      console.log(latitude);

      var longitude = data.coord.lon;
      console.log(longitude);

      var oneCallUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        latitude +
        "&lon=" +
        longitude +
        "&units=imperial" +
        "&appid=" +
        APIKey;

      fetch(oneCallUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);

          var uvIndex = document.querySelector("#uvIdx");
          uvIndex.textContent = " UV-Index: " + data.current.uvi;

          ///////////////////////Day 1//////////////////////////////////////////////

          var showDate1 = document.querySelector("#day1");
          showDate1.textContent = today;

          var showTemp1 = document.querySelector("#currentTemp1");
          showTemp1.textContent =
            "Current Temperature: " + data.daily[0].temp.day + " °F";

          var wind1 = document.querySelector("#wind1");
          wind1.textContent = "Wind: " + data.daily[0].wind_speed + " Mph";

          var humidity1 = document.querySelector("#humidity1");
          humidity1.textContent = "Humidity: " + data.daily[0].humidity;

          //////////////////////////Day 2//////////////////////////////////////////

           //var showTemp2 = document.querySelector("#currentTemp");
          // showTemp2.textContent =
          //   "Current Temperature: " + data.main.temp + " °F";

          // var showDate2 = document.querySelector("#cityName");
          // showDate2.textContent = data.name + today;

          // var wind2 = document.querySelector("#windSpeed");
          // wind2.textContent = "Wind: " + data.wind.speed + " Mph";

          // var humidity2 = document.querySelector("#humidity");
          // humidity2.textContent = "Humidity: " + data.main.humidity;
          // //////////////////////////Day 3//////////////////////////////////////////

          // var showTemp1 = document.querySelector("#currentTemp");
          // showTemp1.textContent =
          //   "Current Temperature: " + data.main.temp + " °F";

          // var showDate1 = document.querySelector("#cityName");
          // showDate1.textContent = data.name + today;

          // var wind1 = document.querySelector("#windSpeed");
          // wind1.textContent = "Wind: " + data.wind.speed + " Mph";

          // var humidity1 = document.querySelector("#humidity");
          // humidity1.textContent = "Humidity: " + data.main.humidity;
        });
    });
}

var fiveDayForecast = function (onecall) {
  var citySearchInput = document.querySelector("#cityInput").value;

  fetch(oneCallUrl);
};

// var citiesSearched = function () {
//   localStorage.setItem("pastCities", JSON.stringify(pastCities));
// };

searchButton.addEventListener("click", getWeather);

//User inputs the name of the city that they would like to check current weather

//User clicks search and is presented with current weather for city searched
