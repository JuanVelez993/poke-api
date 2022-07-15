import { Anchor, Button } from '@mantine/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const PokeCard: React.FC<{ name: string }> = ({ name }) => {
    const [list, setList] = useState({}) as any

    const ROOT = `https://pokeapi.co/api/v2/pokemon/${name}`

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setList(data))

    }, [])




    return (
        <>
            <div className="types" ><Anchor component={Link} to="/pokemon/details" state={{ selectedPoke: name }}>
                <div className="types">
                    <p className="textLink"><b>{list.id}. {list.name}</b></p>
                </div>
                <div className="types">
                    <img src={list.sprites?.front_default} />
                </div>

                <br />
                <div className="typesSingle">
                    {list.types?.map((item: any) => {
                        return <Button className="typeBtn" color="violet" radius="xl" size="xs" key={item.type.name}>{item.type.name}</Button>
                    })}
                </div>
            </Anchor>
            </div>

        </>

    );
};

export default PokeCard;