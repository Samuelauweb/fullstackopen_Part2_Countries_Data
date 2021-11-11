import React from 'react';

const FilterCountries = ({ searchCountry, handleSearchChange }) => {

  return (
    <form>
      find countries{' '}
      <input value={searchCountry} onChange={handleSearchChange} />
    </form>
  )
}

export default FilterCountries