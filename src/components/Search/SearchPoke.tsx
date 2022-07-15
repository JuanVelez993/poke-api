import { Button, Input } from '@mantine/core';
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'tabler-icons-react';
import { RootState } from '../../store/store';
import NavbarPoke from '../navbar/NavbarPoke';
import PokeCard from '../pokecard/PokeCard';



const SearchPoke: React.FunctionComponent = () => {
    const { user } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()
    useEffect(() => {
        if (user === false) {
            navigate('/login')
        }
    })
    const [pokemons, setPokemons] = useState([])
    const [searchedPokemons, setSearchedPokemons] = useState([])
    const ROOT = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setPokemons(data.results))
    }, [])

    const onFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        let searched = pokemons.filter((pokemon: any) => pokemon.name.includes(e.target.value))
        setSearchedPokemons(searched)


    }

    return (
        < >
            <NavbarPoke />
            <div className='types'>
                <br />
                <div className='types'>
                    <Input icon={<Search />}
                        variant="filled" placeholder='Buscar Pokemons' radius="xl"
                        size="xl" onChange={(e: React.ChangeEvent<HTMLInputElement>) => onFilter(e)} />
                    <br />
                    <Button color="violet" radius="xl" size="md">
                        <Link to='/' style={{ textDecoration: 'none' }}> Regresar</Link>
                    </Button>
                </div>
                <br />
                <div className='flex flex-wrap justify-center'>
                    {searchedPokemons.map((item: any) => {
                        return <div className="d-flex flex-row my-2 card stock-alert m-5 px-20 py-5 rounded-lg border-4 "
                            key={item.name}>
                            <PokeCard name={item.name} />
                        </div>
                    })}
                </div>
                <br />
            </div>

        </>
    )
};

export default SearchPoke;