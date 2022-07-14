import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DisplayPoke from '../../components/pokecard/DisplayPoke';
import { RootState } from '../../store/store';



const Login = () => {
    const { user } = useSelector((state: RootState) => state.logged)
    return (<div>
        {user === false ?
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <br />
                Logueate para ver la lista de pokemons
            </div>
            :
            <nav className='navMenu'>
                <p style={{ color: 'white', textAlign: 'right', fontSize: 20 }}>Usuario:Entrenador Pokemon</p>
            </nav>
        }
    </div>

    )
}

export default Login