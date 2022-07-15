
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavbarPoke from '../../components/navbar/NavbarPoke';
import DisplayPoke from '../../components/pokecard/DisplayPoke';
import { RootState } from '../../store/store';



const PokeHome = () => {
    const { user } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()
    useEffect(() => {
        if (user === false) {
            navigate('/login')
        }
    })
return (<div>
    <NavbarPoke />

    <DisplayPoke />
    

    </div>

    )
}

export default PokeHome