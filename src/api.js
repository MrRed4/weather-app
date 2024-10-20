export default async function getData(location) {
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=84RP7VRMKJYSGXQEH7MJ5HYAF`
    let response = await fetch(url)
    let data = await response.json()
    return data
}