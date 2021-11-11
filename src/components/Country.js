import React from 'react'
import Language from './Language'

const Country = ({ name, capital, region, flags, languages }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>capital: {capital}</p>
      <p>region: {region}</p>
      <h2>languages</h2>
      <Language languages={languages}/>
      <img
        src={flags.svg}
        alt={'country-flag'}
        height={'250px'}
        width={'350px'}
      />
    </div>
  )
}

export default Country
