const apiKey = "6e8b5c67c6e4c94da94d6715fb76f33c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";


async function checkWeather() {
     const response = await fetch(apiUrl + `&appid=${apiKey}`);
     var data = await response.json();

     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML = data.main.temp;
     document.querySelector(".humidity").innerHTML = data.main.humidity;
     document.querySelector(".wind").innerHTML = data.wind.speed;
}