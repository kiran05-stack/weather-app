const apiKey = "74c7f55908557ab4b933ea3399b92f2d";
const weatherForm = document.querySelector("form");
const cityInput = document.querySelector("#city");
const weatherDisplay = document.querySelector("#weather");

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const city = cityInput.value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        const { main, weather, name } = data;

        weatherDisplay.innerHTML = `
            <h2>${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
        `;
    } catch (error) {
        weatherDisplay.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
});
