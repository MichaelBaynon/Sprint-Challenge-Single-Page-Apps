import React, { useEffect, useState } from 'react';
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

export default function EpisodesList(props) {
    


    const [episode, setEpisode] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')
        .then(res => {
           
            const episodes = res.data.results
      
            setEpisode(episodes)
      
            
            
          })
        
        }, [])

        return (
            <section>
          
          {episode.map(episode => (
                    
                      <EpisodeCard key={episode.id}{...episode}/>
                    )
                   
                    
          
                   )}
          
              </section>
            )
          }