// Fetch data from a public API (e.g., OpenWeatherMap API) and display weather information on a webpage.

const apiKey = 'fcd3ee28615a0c9cae40707c8fe78c45'; // Use your own API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

async function fetchWeatherData() {
  try {
    // Fetch data from the API using the apiUrl
    const response = await fetch(apiUrl);
    // Parse the JSON data
    const data = await response.json();
    // Log the data to the console (for testing purposes)
    console.log(data);

    // Call a function to display the weather data on the webpage
    displayWeatherData(data);
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('Error fetching weather data:', error);
  }
}

// Function to display weather data on the webpage
function displayWeatherData(weatherData) {
  // Example: Display the temperature and description on the webpage
  const locationElement = document.getElementById('location');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');

  locationElement.textContent = `City: ${weatherData.name}`
  temperatureElement.textContent = `Temperature: ${weatherData.main.temp}°C`;
  descriptionElement.textContent = `Description: ${weatherData.weather[0].description}`;
}

// call the function when script is loaded
fetchWeatherData()

