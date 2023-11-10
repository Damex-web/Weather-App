
var apiKey = "a2fda483157c2b2850c3f0bfbcd73a12";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
var weatherImages = {
    "Clouds": "clouds.png",
    "Clear": "clear.png",
    "Rain": "rain.png",
    "Drizzle": "drizzle.png",
    "Mist": "mist.png"
};

async function checkWeather(city) {
    var apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
   
    var response = await fetch(`${apiurl}&appid=${apiKey}`);    
    
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
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
        weatherIcon.src = "default.png";
    }    
  } 

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

    
