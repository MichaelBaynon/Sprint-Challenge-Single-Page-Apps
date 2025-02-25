import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LocationCard from './LocationCard'

export default function LocationsList(props) {
    


    const [location, setLocation] = useState([])

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location')
        .then(res => {
           
            const locations = res.data.results
      
            setLocation(locations)
      
            
            
          })
        
        }, [])

        return (
            <section>
          
          {location.map(location => (
                    
                      <LocationCard key={location.id}{...location}/>
                    )
                   
                    
          
                   )}
          
              </section>
            )
          }
