import { useState, useEffect } from 'react'
import PokeCard from './PokeCard'




export default function DisplayPoke() {

    const [list, setList] = useState([]) as any

    const ROOT = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setList(data.results))
    }, [])


    return (
        <>
            <br />
            <div className="md:container md:mx-auto ">
                <div className='flex flex-wrap justify-center'>
                    {list.map((item: any) => {
                        return <div className="d-flex flex-row my-2 card stock-alert m-5 px-20 py-5 rounded-lg border-4 "
                            key={item.name}>
                            <PokeCard name={item.name} />
                        </div>
                    })}
                </div>
            </div >
        </>
    )
}