import React from 'react'

import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../store/store';

const NavbarPoke = () => {

    const dispatch = useAppDispatch();


    return (
        <header>
            <nav className='nav nav__container'>
                <Link to="/"><img className="nav__logo" src='https://img.icons8.com/color/48/000000/pokeballs.png'></img></Link>
                <span className='navbar-brand'>PokeList</span>
                <br/>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <Link to="/" className='nav__link'>Buscar Pokemon</Link>
                    </li>
                   
                </ul>
            </nav>
        </header>
    )
}

export default NavbarPoke