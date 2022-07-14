import { useState, useEffect } from 'react'



export default function DisplayPoke() {

    const [list, setList] = useState([]) as any

    const ROOT = "https://pokeapi.co/api/v2/pokemon/?limit=50"

    useEffect(() => {
        fetch(ROOT)
            .then(response => response.json())
            .then(data => setList(data.results))
    }, [])
    console.log(list)

    return (
        <div className="container m-5 px-5">
            <div className="row">
               
                {list.map((item:any) => {
                    return <div className="d-flex flex-row my-2 card stock-alert"
                        key={item.name}>
                        <div className="container">
                            <div className="row">
                                <div className="d-flex flex-row mt-1">
                                    <div className="col"><b>{item.name}</b></div>
                                    
                                  </div>
                                
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div >
    )
}