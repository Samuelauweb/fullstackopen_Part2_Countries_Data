import React from 'react';

  const Language = ({ country }) => {
    console.log('omg: ', Object.values(country.languages))

    return (
      <ul>
        {Object.values(country.languages).map((language) => {
          return <li key={language}>{language}</li>
        })}
      </ul>
    )
  }

export default Language