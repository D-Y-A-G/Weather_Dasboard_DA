//setting up openweather APIKey and url and elements to display data

var APIKey = "329a430c78a8cebf9c6c895dedfc7209";
var searchButton = document.querySelector("#button-addon2");
var tempEl = document.querySelector("#currentTemp");

var pastCities = [];
//Displaying today's date

var today = moment().format("  (MMMM, Do YYYY) ");

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

          // var showDate1 = document.querySelector("#day1");
          // showDate1.textContent = today;

          var showTemp1 = document.querySelector("#currentTemp1");
          showTemp1.textContent = "Temp: " + data.daily[0].temp.day + " °F";

          var wind1 = document.querySelector("#wind1");
          wind1.textContent = "Wind: " + data.daily[0].wind_speed + " Mph";

          var humidity1 = document.querySelector("#humidity1");
          humidity1.textContent = "Humidity: " + data.daily[0].humidity;

          //////////////////////////Day 2//////////////////////////////////////////
          // var showDate2 = document.querySelector("#day2");
          // showDate2.textContent = today;

          var showTemp2 = document.querySelector("#currentTemp2");
          showTemp2.textContent = "Temp: " + data.daily[1].temp.day + " °F";

          var wind2 = document.querySelector("#wind2");
          wind2.textContent = "Wind: " + data.daily[1].wind_speed + " Mph";

          var humidity2 = document.querySelector("#humidity2");
          humidity2.textContent = "Humidity: " + data.daily[1].humidity;

          // //////////////////////////Day 3//////////////////////////////////////////

          // var showDate3 = document.querySelector("#day3");
          // showDate3.textContent = today;

          var showTemp3 = document.querySelector("#currentTemp3");
          showTemp3.textContent = "Temp: " + data.daily[2].temp.day + " °F";

          var wind3 = document.querySelector("#wind3");
          wind3.textContent = "Wind: " + data.daily[2].wind_speed + " Mph";

          var humidity3 = document.querySelector("#humidity3");
          humidity3.textContent = "Humidity: " + data.daily[2].humidity;

          // //////////////////////////Day 4//////////////////////////////////////////

          // var showDate4 = document.querySelector("#day4");
          // showDate4.textContent = today;

          var showTemp4 = document.querySelector("#currentTemp4");
          showTemp4.textContent = "Temp: " + data.daily[3].temp.day + " °F";

          var wind4 = document.querySelector("#wind4");
          wind4.textContent = "Wind: " + data.daily[4].wind_speed + " Mph";

          var humidity4 = document.querySelector("#humidity4");
          humidity4.textContent = "Humidity: " + data.daily[3].humidity;

          // //////////////////////////Day 5//////////////////////////////////////////

          // var showDate5 = document.querySelector("#day5");
          // showDate5.textContent = today;

          var showTemp5 = document.querySelector("#currentTemp5");
          showTemp5.textContent = "Temp: " + data.daily[4].temp.day + " °F";

          var wind5 = document.querySelector("#wind5");
          wind5.textContent = "Wind: " + data.daily[4].wind_speed + " Mph";

          var humidity5 = document.querySelector("#humidity5");
          humidity5.textContent = "Humidity: " + data.daily[4].humidity;
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
