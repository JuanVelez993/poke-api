import React from 'react'

import { Link } from 'react-router-dom'


const NavbarPoke = () => {

    return (
        <header>
            <nav className='nav nav__container'>
                <Link to="/"><img className="nav__logo" src='https://img.icons8.com/color/48/000000/pokeballs.png'></img></Link>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link to="/" className='nav__link'>PokeList</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to="/search" className='nav__link'>Buscar Pokemon</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavbarPoke