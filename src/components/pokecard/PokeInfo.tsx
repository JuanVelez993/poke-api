import { Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';



interface PokeNameInt {
    selectedPoke: string
}


const PokeCard: React.FC = () => {
    const location = useLocation()
    const state = location.state as PokeNameInt
    const { selectedPoke } = state
    const [list, setList] = useState({}) as any

    const ROOT = `https://pokeapi.co/api/v2/pokemon/${selectedPoke}`

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setList(data))

    }, [])




    return (

        <div className="d-flex flex-row my-8 cart stock-alert">
            <div className="types">
                <p >{list.id}. {list.name}</p>
            </div>
            <div className="types">
                <img className="bigImg" src={list.sprites?.front_default} />
            </div>

            <br />
            <div className="typesSingle">
                {list.types?.map((item: any) => {
                    return <Button className="typeBtn" color="violet" radius="xl" size="md"  key={item.type.name}>{item.type.name}</Button>
                })}
                
            </div>

        </div>



    );
};

export default PokeCard;