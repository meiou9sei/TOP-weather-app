const getWeather = async (city) => {
    try {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1de2fe9bfb96c5bb2212c3fe482db260`;
        const response = await fetch(url);
        const data = response.json();
        console.log(data);        
    } catch (error) {
        console.error(error);
    }

}

