
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarPoke from './components/navbar/NavbarPoke'
import SearchPoke from './components/Search/SearchPoke'
import PokeHome from './pages/Home/PokeHome'
import Login from './pages/Login/Login'
import PokeDetails from './pages/PokeDetails/PokeDetails'



function App() {
  
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<PokeHome />} />
        <Route path="/pokemon/details" element={<PokeDetails />} />
        <Route path='/search' element={<SearchPoke />} />
        <Route path='/login' element={<Login />} />

        
       </Routes>
    </BrowserRouter>
  )
}

export default App
