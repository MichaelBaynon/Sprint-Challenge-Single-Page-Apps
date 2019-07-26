import React from 'react'

export default function CharacterCard ({ name, status, species }) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{status}</h1>
      <h1>{species}</h1>
    </div>
  )
}