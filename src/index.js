import "./styles.css";
import getData from "./api.js";
import WeatherInfo from "./class.js"
import display from "./weatherDisplay.js"

const btn = document.querySelector('#submit-location')

function paintWeather(event) {
    event.preventDefault()

    const location = document.querySelector('#location').value

    if (location == '') {
        return
    }

    getData(location)
        .then(data => {
            display(new WeatherInfo(data))
        })
        .catch(error => {
            alert('Could not get location data')
            console.log(error)
        })
}


btn.addEventListener('click', paintWeather)