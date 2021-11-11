import React from 'react'

const Show = ({ country, handleClick }) => {

  return (
    <div key={country.name.common}>
      {country.name.common}
      <button value={country} onClick={handleClick}>
        show
      </button>
    </div>
  )
}

export default Show
