import React from 'react'
import Country from './Country'
import Show from './Show'

const Countries = ({
  countries,
  searchCountry,
  showCountry,
  setShowCountry,
}) => {
  const entries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(searchCountry)
  })

  const handleClick = (event) => {
    console.log('clicked')
    console.log(Object.values(event.target)[1].value)
    const temp = Object.values(event.target)[1].value
    // const temp = countries.filter((country) =>
    //   country.name.common.includes(event.target.value)
    // )
    setShowCountry(temp)
    console.log(temp)
  }

  if (entries.length >= 10) {
    return <p>Too many matches, specify another filter</p>
  }

  if (showCountry !== undefined) {
    return (
      <Country
        key={showCountry.name.common}
        name={showCountry.name.common}
        capital={showCountry.capital}
        region={showCountry.region}
        flags={showCountry.flags}
        languages={showCountry.languages}
      />
    )
  }

  if (entries.length > 1) {
    return (
      <div>
        {entries.map((country) => {
          // return console.log(country.name.common)
          return <Show country={country} handleClick={handleClick} />
        })}
      </div>
    )
  }

  return (
    <div>
      {entries.map((country) => (
        <Country
          key={country.name.common}
          name={country.name.common}
          capital={country.capital}
          region={country.region}
          flags={country.flags}
          languages={country.languages}
        />
      ))}
    </div>
  )
}

export default Countries
