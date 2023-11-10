
var apiKey = "a2fda483157c2b2850c3f0bfbcd73a12";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var loadingSpinner = document.getElementById('loadingSpinner');
var weatherIcon = document.querySelector(".weather-icon");
var weatherImages = {
    "Clouds": "images/clouds.png",
    "Clear": "images/clear.png",
    "Rain": "images/rain.png",
    "Drizzle": "images/drizzle.png",
    "Mist": "images/mist.png"
};

async function checkWeather(city) {
    var apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    loadingSpinner.style.display;
    
    var response = await fetch(`${apiurl}&appid=${apiKey}`);    
    
    if (response.status == 404){
      document.querySelector(".error").style.display
       = "block";
    }
    
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
         Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    var weatherMain = data.weather[0].main;
    if (weatherImages[weatherMain]) {
        weatherIcon.src = weatherImages[weatherMain];
    } else {
        weatherIcon.src = "images/default.png";
    }finally {
        loadingSpinner.style.display = 'none';
    }    
  } 

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});


