import React, { useState, useEffect} from 'react';



interface IPokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}


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
            <div>
            <span className="card--id">{list.id}</span>
            </div>
            <div>
            <img className="card--image" src={list.sprites?.front_default} />
            </div>
            <div>
            <p className="card--name">{list.name}</p>
            </div>
            <br/>
            <div>
                 {list.types?.map((item: any) => {
                     return <p className="card--id" key={item.type.name}>{item.type.name}</p>
                 })}
            </div>
            
        </>
       
    );
};

export default PokeCard;