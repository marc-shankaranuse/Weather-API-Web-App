const apiKey = "55e312f83c8a76d54b1a4b7c7db8c444";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=banglore";
// apikey= 55e312f83c8a76d54b1a4b7c7db8c444
// api link=   https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=55e312f83c8a76d54b1a4b7c7db8c444&units=metric

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
}
checkWeather();