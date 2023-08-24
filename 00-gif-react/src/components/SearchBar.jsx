import { useState } from 'react'

const SearchBar = ({handleSearch}) => {
    const [search, setSearch] = useState ('')
  return (
    <div className='search-bar'>
        <input 
        className='search-input' 
        type="text" 
        placeholder='Search'
        onChange={(event) =>setSearch(event.target.value)}
        value={search}
        />
        
        <button className='search-button'
        onClick={() => handleSearch(search)}>
            Buscar
        </button>
    </div>
  )
}

export default SearchBar