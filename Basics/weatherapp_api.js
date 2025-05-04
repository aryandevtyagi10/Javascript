async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'your_api_key'; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherHTML;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
}