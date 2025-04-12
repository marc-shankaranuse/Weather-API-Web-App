# Weather-API-Web-App
🌦️ Weather API App – Real-Time Weather Forecast Application
Built using: HTML | CSS | JavaScript
API Used: WeatherAPI.org
Developer: Shankar Anuse 

A clean and responsive web application that shows real-time weather data for any city in the world using the [WeatherAPI.org](https://www.weatherapi.com/) platform.

The app utilizes the reliable data from WeatherAPI.org to fetch accurate weather conditions including temperature, humidity, wind speed, weather conditions (like cloudy, sunny, rainy), and more.
The Weather API App is a responsive, user-friendly web application that allows users to check real-time weather updates for any city in the world. The app utilizes the reliable data from WeatherAPI.org to fetch accurate weather conditions including temperature, humidity, wind speed, weather conditions (like cloudy, sunny, rainy), and more.

This project is perfect for users who want a quick and simple weather forecast app with a clean interface, styled beautifully using CSS and powered by JavaScript for dynamic interactions.

📁 Project Structure:
index.html: Structure of the web page with input fields and result containers.

style.css: Custom styles for layout, background effects, responsive elements, transitions, and icon placements.

script.js: Handles API integration, fetch requests, dynamic DOM updates, input validation, and error handling.

🔧 How it Works:
User enters a city name into the input field.

JavaScript captures the input and sends a GET request to WeatherAPI.org using the Fetch API.

The JSON response is parsed and the data is displayed dynamically on the screen.

If the city is not found or the API fails, an error message is shown.

🧠 Features:
🔍 Search for current weather by city name.

🌡️ Display of temperature (Celsius/Fahrenheit), humidity, and wind speed.

🖼️ Dynamic icons based on weather conditions (sun, rain, clouds, etc.).

🕐 Current local time of searched city.

📍 Geolocation-based weather (optional feature).

⚡ Fast and real-time data fetching using Fetch API.

✅ Input validation and error handling (e.g., invalid city names).

🎨 Smooth UI/UX with responsive design across devices.


## 🔍 Features

- 🔎 Search weather by city name  
- 🌡️ Temperature (°C), humidity, wind speed  
- 🖼️ Weather condition icons (e.g., sunny, cloudy, rainy)  
- 🕐 Local time display  
- 📍 Geolocation support (optional extension)  
- 🚫 Error handling for wrong city input  
- 🎨 Attractive and responsive UI design  

🔧 How It Works
User types a city name in the input box.

JavaScript captures the input and sends an API request to WeatherAPI.

The response JSON is parsed and the weather data is displayed dynamically.

Errors (e.g., invalid city) are handled with user-friendly messages.


## 📂 Project Structure

```bash
weather-api-app/
│
├── index.html       # Main HTML page
├── style.css        # Styling with CSS
├── script.js        # JavaScript logic & API integration
└── README.md        # Project description


