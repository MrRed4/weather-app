export default function display(weatherObject) {
    const container = document.querySelector('.weather-container')
    container.innerHTML = ''

    const weatherAddress = document.createElement('h1');
    const weatherConditions = document.createElement('h3');
    const weatherDesc = document.createElement('p');
    const weatherFeelsLike = document.createElement('p');
    const weatherHumidity = document.createElement('p');
    const locationTime = document.createElement('p');
    const weatherWindSpeed = document.createElement('p');

    weatherAddress.textContent = formatCountryName(weatherObject.address)
    weatherConditions.textContent = weatherObject.conditions;
    weatherDesc.textContent = weatherObject.description;
    weatherFeelsLike.textContent = `Feels like ${weatherObject.feelslike}°c`;
    weatherHumidity.textContent = `Humidity: ${weatherObject.humidity}%`;
    locationTime.textContent = `Current Time: ${weatherObject.time}`;
    weatherWindSpeed.textContent = `Wind Speed: ${weatherObject.windspeed} km/h`;

    container.append(
        weatherAddress, 
        weatherConditions, 
        weatherDesc, 
        weatherFeelsLike, 
        weatherHumidity, 
        locationTime, 
        weatherWindSpeed)

    const body = document.querySelector('body')
    body.removeAttribute('class')

    if (weatherObject.conditions.toLowerCase().includes('clear')) {
        body.classList.add('light-sky-blue')
    }

    if (weatherObject.conditions.toLowerCase().includes('cloud')) {
        body.classList.add('sky-blue')
    }

    if (weatherObject.conditions.toLowerCase().includes('rain')) {
        body.classList.add('stormy-sky')
    }

    if (weatherObject.time < '06:00:00' || weatherObject.time > '19:00:00') {
        body.classList.add('night-sky')
    }
}

function formatCountryName(title) {
    const split = title.split(' ')
    for (let i = 0; i < split.length; i++) {
        split[i] = split[i][0].toUpperCase() + split[i].toLowerCase().slice(1)
    }
    return split.join(' ')
}