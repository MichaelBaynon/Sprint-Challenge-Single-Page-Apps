import React, {useState} from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterList from './components/CharacterList.js';
import axios from 'axios';

export default function App() {
  
const [title, setTitle] = useState('')

  axios.get('https://rickandmortyapi.com/api/character')
.then(res => {
  console.log('APP axios request', res.data.results)
  setTitle(res.data.results.name)
})


  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    <CharacterList title={title} status='alive' species='human'/>
  </main>
}
