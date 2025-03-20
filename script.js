const apiKey = "74c7f55908557ab4b933ea3399b92f2d";
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherInfo = document.getElementById("weatherInfo");

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city === "") {
        weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                weatherInfo.innerHTML = "<p>City not found.</p>";
                return;
            }

            const temperature = data.main.temp;
            const weather = data.weather[0].main;
            const weatherDescription = data.weather[0].description;

            weatherInfo.innerHTML = `
                <h2>${city}</h2>
                <p>${temperature}°C</p>
                <p>${weather} - ${weatherDescription}</p>
            `;
        })
        .catch(() => {
            weatherInfo.innerHTML = "<p>Error fetching data.</p>";
        });
});
