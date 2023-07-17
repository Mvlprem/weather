import { displayWeather, displayError } from './home'

async function fetchWeather(city) {
  const API_KEY = '0cbb6d4dd67645ecad162015231207'
  const URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}`
  const promise = await fetch(URL, { method: 'GET', mode: 'cors' })
  const response = await promise.json()
  if (promise.ok) displayWeather(response)
  else displayError(response)
}

function newRequest() {
  const input = document.querySelector('input')
  const validation = input.reportValidity()
  if (validation) fetchWeather(input.value)
  input.value = ''
}
document.querySelector('button').addEventListener('click', newRequest)

export default fetchWeather
