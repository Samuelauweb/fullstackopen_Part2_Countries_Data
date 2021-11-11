import React from 'react';
import Language from './Language';

const Country = ({entries}) => {

  return (
    <div>
      {entries.map((country) => {
        // return console.log(country.name.common)
        return (
          <div key={country.name.common}>
            <h1>{country.name.common}</h1>
            <p>capital: {country.capital}</p>
            <p>region: {country.region}</p>
            <h2>languages</h2>
            <Language country={country} />
            <img src={country.flags.svg} alt={"country-flag"} height={"250px"} width={'350px'} />
          </div>
        )
      })}
    </div>
  )
}

export default Country