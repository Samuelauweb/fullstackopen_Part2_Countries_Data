import React, { useState, useEffect } from 'react'
import Countries from './components/Countries'
import FilterCountries from './components/FilterCountries'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
    const [showCountry, setShowCountry] = useState()


  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      console.log('Data:', response.data)
      setCountries(response.data)
    })
  }, [])

  const handleSearchChange = (event) => setSearchCountry(event.target.value)

  return (
    <div>
      <FilterCountries
        searchCountry={searchCountry}
        handleSearchChange={handleSearchChange}
      />
      <div>
        <Countries
          countries={countries}
          searchCountry={searchCountry}
          showCountry={showCountry}
          setShowCountry={setShowCountry}
        />
      </div>
    </div>
  )
}

export default App
