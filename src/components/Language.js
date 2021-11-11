import React from 'react';

  const Language = ({ languages }) => {
    console.log('omg: ', Object.values(languages))
    return (
      <ul>
        {Object.values(languages).map((language) => {
          return <li key={language}>{language}</li>
        })}
      </ul>
    )
  }

export default Language