const apiKey = "74c7f55908557ab4b933ea3399b92f2d"; 
const weatherForm = document.querySelector("#weather-form"); 
const cityInput = document.querySelector("#city"); 
const weatherInfo = document.querySelector("#weather-info"); 

weatherForm.addEventListener("submit", function (event) { 
    event.preventDefault();  
    const city = cityInput.value.trim(); 
    if (city !== "") { 
        getWeather(city); 
    } 
});

async function getWeather(city) { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 

    try { 
        const response = await fetch(url); 
        if (!response.ok) { 
            throw new Error("City not found"); 
        } 
        const data = await response.json(); 
        displayWeather(data); 
    } catch (error) { 
        weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`; 
    } 
}

function displayWeather(data) { 
    const { name, main, weather } = data; 
    weatherInfo.innerHTML = ` 
        <h2>${name}</h2> 
        <p>Temperature: ${main.temp}°C</p> 
        <p>Condition: ${weather[0].description}</p> 
    `; 
}
