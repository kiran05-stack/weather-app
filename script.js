
document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "74c7f55908557ab4b933ea3399b92f2d";
    const getWeatherButton = document.querySelector("#getWeather");
    const cityInput = document.querySelector("#cityInput");
    const weatherResult = document.querySelector("#weatherResult");

    getWeatherButton.addEventListener("click", function () {
        const city = cityInput.value.trim();
        if (city === "") {
            weatherResult.innerHTML = "Please enter a city name.";
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    weatherResult.innerHTML = `
                        <h3>${data.name}, ${data.sys.country}</h3>
                        <p>Temperature: ${data.main.temp}°C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                    `;
                } else {
                    weatherResult.innerHTML = "City not found. Please try again.";
                }
            })
            .catch(error => {
                weatherResult.innerHTML = "Error fetching weather data.";
                console.error(error);
            });
    });
});
