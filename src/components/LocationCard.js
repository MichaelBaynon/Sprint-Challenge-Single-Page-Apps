import React from 'react'

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <div className='characterCard'>
      
      <h2>{name}</h2>
      <h3>{type}</h3>
      <h3>{dimension}</h3>
      <p>{residents}</p>
      
      
    </div>
  )
  
}
