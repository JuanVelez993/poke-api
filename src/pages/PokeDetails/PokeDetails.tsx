
import { Button } from '@mantine/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarPoke from '../../components/navbar/NavbarPoke';
import PokeInfo from '../../components/pokecard/PokeInfo';
import './PokeDetails.css';



const PokeDetails= () => {
    return (<>
        <NavbarPoke />
        <div className="singlePoke md:container md:mx-auto ">
        <PokeInfo/>
        <br/>
        <Button color="violet" radius="xl" size="md">
            <Link style={{ textDecoration: 'none' }} to="/">{'<<-'} Regresar a la lista</Link>
        </Button>
        </div>


    </>

    )
}

export default PokeDetails