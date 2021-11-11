import React from 'react';
import Country from './Country';

const Countries = ({ countries, searchCountry }) => {
  // const [showCountry, setShowCountry] = useState('')

  const entries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchCountry)
  })

  if (entries.length >= 10) {
    return <p>Too many matches, specify another filter</p>
  }
  if (entries.length > 1) {
    return (
      <div>
        {entries.map((country) => {
          // return console.log(country.name.common)
          return <div key={country.name.common}>{country.name.common}</div>
        })}
      </div>
    )
  }
  return <Country entries={entries} />
}

export default Countries