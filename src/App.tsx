import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarPoke from './components/navbar/NavbarPoke'
import DisplayPoke from './components/pokecard/DisplayPoke'
import PokeInfo from './components/pokecard/PokeInfo'
import PokeHome from './pages/Home/PokeHome'
import PokeDetails from './pages/PokeDetails/PokeDetails'


function App() {


  return (
    <BrowserRouter>
      <div>
        <NavbarPoke />
        
      </div>
      <Routes>
        <Route path="/" element={<PokeHome />} />
        <Route path="/pokemon/details" element={<PokeDetails />} />
        
       </Routes>
    </BrowserRouter>
  )
}

export default App
