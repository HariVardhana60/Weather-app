async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "75ce3f783790dc3516bd2cf624a06cbf"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = `
      <h2>${data.name}</h2>
      <p><strong>${data.weather[0].main}</strong></p>
      <p>Temperature: ${data.main.temp}°C</p>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon" />
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
