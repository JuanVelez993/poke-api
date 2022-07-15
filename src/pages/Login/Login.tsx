import { Button } from '@mantine/core';
import { MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logInReducer } from '../../store/reducers/userSlice';
import { RootState } from '../../store/store';



const Login = () => {
    const { user } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (user !== false) {
            navigate("/")
        }
    }, [])

    const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const user = true;
        dispatch(logInReducer(user))
        navigate("/")
    }
   
    return (<div className="types">
        {user === false ?
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <br />
                <h1 style={{ color: 'rgb(75, 17, 109)' }}><b>Logueate para ver la lista de pokemons</b></h1>
                <br/>
                <img src="https://archives.bulbagarden.net/media/upload/3/3e/Lets_Go_Pikachu_Eevee_Professor_Oak.png"  />
            </div>
            :
            <nav className='navMenu'>
                <p style={{ color: 'white', textAlign: 'right', fontSize: 20 }}>Usuario:Entrenador Pokemon</p>
            </nav>
        }
        <br/>
        <Button color="violet"  size="md" onClick={(e: any) => logIn(e)}>Logearse</Button>
    </div>

    )
}

export default Login