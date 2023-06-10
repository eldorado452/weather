const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const Weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.loacation-not-found');
const weather_body = document.querySelector('.weather-body');


 async function checkWeather(city){
    const api_key = "939d3850b9d0a1ac7990d8703beb69e4";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weather_data = await fetch(`${url}`).then(Response => Response.json());

    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            Weather_img.src = "asests/images/cloud.png";
            break;
        case 'Clear':
            Weather_img.src = "asests/images/clear.png";
            break;
        case 'Rain':
            Weather_img.src = "asests/images/rain.png";
            break;
        case 'Mist':
            Weather_img.src = "asests/images/mist.png";
            break;
        case 'Snow':
            Weather_img.src = "asests/images/snow.png";
            break;
       
    }
}


searchBtn.addEventListener('click' , ()=>{
    checkWeather(inputBox.value);
});