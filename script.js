const apiKey = "74c7f55908557ab4b933ea3399b92f2d";
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        weatherInfo.innerHTML = "Please enter a city name.";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherInfo.innerHTML = "City not found.";
                return;
            }

            const temperature = data.main.temp;
            const weather = data.weather[0].main;
            const weatherDescription = data.weather[0].description;

            weatherInfo.innerHTML = `<h2>${city}</h2>
                                     <p>${temperature}°C</p>
                                     <p>${weather} - ${weatherDescription}</p>`;

            updateBackground(weather);
        })
        .catch(() => {
            weatherInfo.innerHTML = "Error fetching data.";
        });
});

// Function to change background based on weather condition
function updateBackground(weather) {
    const body = document.body;
    let imageUrl = "";

    if (weather === "Clear") {
        imageUrl = "https://source.unsplash.com/1920x1080/?sunny";
    } else if (weather === "Clouds") {
        imageUrl = "https://source.unsplash.com/1920x1080/?cloudy";
    } else if (weather === "Rain") {
        imageUrl = "https://source.unsplash.com/1920x1080/?rain";
    } else if (weather === "Snow") {
        imageUrl = "https://source.unsplash.com/1920x1080/?snow";
    } else if (weather === "Thunderstorm") {
        imageUrl = "https://source.unsplash.com/1920x1080/?thunderstorm";
    } else {
        imageUrl = "https://source.unsplash.com/1920x1080/?weather";
    }

    body.style.backgroundImage = `url(${imageUrl})`;
}
