const getWeather = async (city) => {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1de2fe9bfb96c5bb2212c3fe482db260`;
        const response = await fetch(url);
        const data = await response.json();
        
        const neededData = {
            name: data.name,
            weather: data.weather[0].description,
            icon: data.weather[0].icon,
            temp: data.main.temp,
            feels_like: data.main.feels_like,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            clouds: data.clouds.all,
        }
        
        displayInfo(neededData);

    } catch (error) {
        console.error(error);
    }
}

const displayInfo = (weatherData) => {
    document.querySelector('.city').textContent = weatherData.name;
    document.querySelector('.weather').textContent = weatherData.weather;
    document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`
    console.log(weatherData.icon);
    document.querySelector('.temp').textContent = convertKToF(weatherData.temp);
    document.querySelector('.feelsLike').textContent = convertKToF(weatherData.feels_like);
    document.querySelector('.humidity').textContent = weatherData.humidity;
    document.querySelector('.windSpeed').textContent = weatherData.wind_speed;
    document.querySelector('.clouds').textContent = weatherData.clouds;

}

const convertKToF = (temp) => {
    return Math.round(((temp - 273.15) * (9/5) + 32) * 100) / 100;
} 

getWeather('tokyo').then(data => console.log(data));

const userQuery = document.getElementById('userQuery');
const form = document.getElementById('cityQueryForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(userQuery.value).then(data => console.log(data));
    userQuery.value = '';
})