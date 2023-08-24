import { useState, useEffect } from 'react'
import './App.css'
import ImageCards from './components/ImageCards'
import SearchBar from './components/SearchBar'

function App() {
  const [gifs, setGifs] = useState([])
  const APIKEY = import.meta.env.VITE_GIPHY_APP_KEY
  const sendSearch = (search) => {

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`) //url de API
    .then(res => res.json())
    .then (results => {
        const { data } = results 
        setGifs(data)    
  }).catch(err => console.log(err))
  }


  useEffect (() => {
   fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`) //url de API
    .then(res => res.json())
    .then (results => {
        const { data } = results 
        setGifs(data)    
  }).catch(err => console.log(err))
}, []) 



  return (
    <>
      <div>
        <h1 className='title'>Giphy App </h1>
        <SearchBar handleSearch={sendSearch}/>
        <div className='grid-cards'>
        {
          gifs.map(gif => (
            <ImageCards
            url={gif.images.fixed_height.url}
            title={gif.title}
            key={gif.id}
            />
          ))
        }
        </div>
      </div>
    </>
  )
}

export default App
