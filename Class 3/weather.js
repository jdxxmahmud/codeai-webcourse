document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("fetchWeatherButton").addEventListener("click", function() {

        // OpenWeatherMap API URL for London's forecast
        const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
        const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}&units=metric`;

        fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            // Get the forecast for tomorrow (this is 24 hours later, around the 8th index item in the forecast list)
            const tomorrowForecast = data.list[8];
            const temperature = tomorrowForecast.main.temp;
            const description = tomorrowForecast.weather[0].description;
            const humidity = tomorrowForecast.main.humidity;
            const windSpeed = tomorrowForecast.wind.speed;

            // Display the weather details
            document.getElementById("weatherDetails").style.display = "block";
            document.getElementById("temperature").innerText = `Temperature: ${temperature}°C`;
            document.getElementById("condition").innerText = `Condition: ${description}`;
            document.getElementById("humidity").innerText = `Humidity: ${humidity}%`;
            document.getElementById("windSpeed").innerText = `Wind Speed: ${windSpeed} m/s`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            document.getElementById("weatherDetails").innerHTML = "<p>Failed to fetch weather data. Please try again later.</p>";
        });
    });
});
