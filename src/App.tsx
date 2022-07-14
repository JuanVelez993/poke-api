import { useState } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarPoke from './components/navbar/NavbarPoke'
import DisplayPoke from './components/pokecard/DisplayPoke'
import PokeInfo from './components/pokecard/PokeInfo'
import SearchPoke from './components/Search/SearchPoke'
import PokeHome from './pages/Home/PokeHome'
import PokeDetails from './pages/PokeDetails/PokeDetails'
import { RootState } from './store/store'


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <NavbarPoke />
        
      </div>
      <Routes>
        <Route path="/" element={<PokeHome />} />
        <Route path="/pokemon/details" element={<PokeDetails />} />
        <Route path='/search' element={<SearchPoke />} />
        
       </Routes>
    </BrowserRouter>
  )
}

export default App
