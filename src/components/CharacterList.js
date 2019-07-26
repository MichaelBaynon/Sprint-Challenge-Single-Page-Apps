import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard'

export default function CharacterList(props) {
  console.log('props:', props)
  // TODO: Add useState to track data from useEffect

  const [card, setCard] =useState([])

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      const cards = res.data.results

      setCard(cards)

      console.log(res.data.results)
    })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  return (
  <section className='character-list grid-view'>

{card.map(card => (
          
            <CharacterCard key={card.id}{...card}/>
          )
         
          

         )}

    </section>
  )
}