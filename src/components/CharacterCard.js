import React from 'react'

export default function CharacterCard ({ name, status, species, image }) {
  return (
    <div className='characterCard'>
      <h1>{name}</h1>
      <img src={image} />
      <h3>Status: {status}</h3>
      <h3>Species: {species}</h3>
    </div>
  )
}