import React, { useEffect, useState } from 'react'
import Language from './Language'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Country = ({ name, capital, region, flags, languages }) => {
  const [weather, setWeather] = useState()

  useEffect(() => {
    console.log('weatherstack is online!')
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${name}`
      )
      .then((response) => {
        console.log('Weather:', response.data)
        setWeather(response.data)
        console.log('weather:', weather)
      })
  }, [])

  return (
    <div>
      <h1>{name}</h1>
      <p>capital: {capital}</p>
      <p>region: {region}</p>
      <h2>languages</h2>
      <Language languages={languages} />
      <img
        src={flags.svg}
        alt={'country-flag'}
        height={'250px'}
        width={'350px'}
      />
      <h2>Weather in {name}</h2>
      {/* <h3>temperature: {weather.current.temperature}&deg;C</h3>
      <img src={weather.current.weather_icons} alt={'weather-icon'} />
      <h3>
        wind: {weather.current.wind_speed}mph, direction:{' '}
        {weather.current.wind_dir}{' '}
      </h3> */}
    </div>
  )
}

export default Country
