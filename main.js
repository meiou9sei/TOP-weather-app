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
        return neededData;
    } catch (error) {
        console.error(error);
    }
}

getWeather('cameron').then(data => console.log(data));

const userQuery = document.getElementById('userQuery');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWeather(userQuery.value).then(data => console.log(data));
    userQuery.value = '';
})