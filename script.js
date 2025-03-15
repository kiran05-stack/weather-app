async function getWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "YOUR_API_KEY";  // Get API key from OpenWeatherMap
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    document.getElementById("weather-info").innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}
