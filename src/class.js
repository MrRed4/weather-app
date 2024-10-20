export default class WeatherInfo {
    constructor(obj) {
        this.address = obj.address
        this.description = obj.description
        this.time = obj.currentConditions.datetime
        this.conditions = obj.currentConditions.conditions
        this.humidity = obj.currentConditions.humidity
        this.feelslike = obj.currentConditions.feelslike
        this.windspeed = obj.currentConditions.windspeed
    }
}