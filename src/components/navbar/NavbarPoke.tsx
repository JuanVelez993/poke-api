import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store/store'
import LogOut from '../LogOut/LogOut'


const NavbarPoke = () => {
    const { login } = useSelector((state: RootState) => state.logged)

    return (
        <header>
            <nav className='nav nav__container flex justify-between w-100 space-x-4 p-5 '>
                <div className='flex flex-row'>
                    <Link to="/"><img className="nav__logo" src='https://img.icons8.com/color/48/000000/pokeballs.png'></img></Link>
                    <ul className='nav__list'>
                        <li className='nav__item'>
                            <Link to="/" className='nav__link'>PokeList</Link>
                        </li>
                        <li className='nav__item'>
                            <Link to="/search" className='nav__link'>Buscar Pokemon</Link>
                        </li>
                    </ul>
                </div>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <h1 className='nav__link'>Entrenador :{login.name}</h1>
                    </li>
                    <li className='nav__item'>
                        <LogOut />
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavbarPoke