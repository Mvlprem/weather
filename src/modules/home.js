import conditionList from './weather_conditions'

function displayWeather(obj) {
  const { location, current, forecast } = obj
  const { sunrise, sunset } = forecast.forecastday[0].astro
  const { condition, humidity } = current
  const { is_day: isDay, temp_c: tempC, wind_kph: windKph } = current

  const conditionText = document.querySelector('.conditionText')
  const windSpeedElement = document.querySelector('.windSpeed')
  const humidityElement = document.querySelector('.humidity')
  const locationElement = document.querySelector('.location')
  const temperature = document.querySelector('.temperature')
  const sunriseElement = document.querySelector('.sunrise')
  const sunsetElement = document.querySelector('.sunset')
  const forecastDiv = document.querySelector('.forecast')
  const icon = document.querySelector('.conditionIcon')

  locationElement.textContent = `${location.name}, ${location.country}`
  conditionText.textContent = condition.text
  temperature.textContent = `${tempC}\u00B0`
  windSpeedElement.textContent = windKph
  humidityElement.textContent = humidity
  sunriseElement.textContent = sunrise
  sunsetElement.textContent = sunset

  const conditionCode = condition.code
  if (conditionCode === 1000 && isDay === 1) {
    icon.src = conditionList[condition.code].iconDay
  } else if (conditionCode === 1000 && isDay === 0) {
    icon.src = conditionList[condition.code].iconNight
  } else icon.src = conditionList[condition.code].icon

  if (isDay === 1) {
    forecastDiv.style.backgroundImage = 'url(./backgrounds/day.svg)'
  } else {
    forecastDiv.style.backgroundImage = 'url(./backgrounds/night.svg)'
  }
}

function displayError(obj) {
  const msg = obj.error.message
  const p = document.querySelector('.error')
  p.textContent = msg
  p.style.display = 'block'
  setTimeout(() => {
    p.style.display = 'none'
  }, 4000)
}

export { displayWeather, displayError }
