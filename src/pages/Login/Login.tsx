import { Button, Input } from '@mantine/core';
import { MouseEvent, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { User } from 'tabler-icons-react';
import { logInReducer, loginType } from '../../store/reducers/userSlice';
import { RootState } from '../../store/store';



const Login = () => {
    const { login } = useSelector((state: RootState) => state.logged)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('') as any

    useEffect(() => {
        if (login.loged !== false) {
            navigate("/")
        }
    }, [])

    const logIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (name) {
            const user: loginType = {
                name: name,
                loged: true,
            }
            dispatch(logInReducer(user))
            navigate("/")
        }
    }

        return (<div className="types">
            {login.loged === false ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <br />
                    <h1 style={{ color: 'rgb(75, 17, 109)' }}><b>Logueate para ver la lista de pokemons</b></h1>
                    <br />
                    <img src="https://archives.bulbagarden.net/media/upload/3/3e/Lets_Go_Pikachu_Eevee_Professor_Oak.png" />
                </div>
                :
                <nav className='navMenu'>
                    <p style={{ color: 'white', textAlign: 'right', fontSize: 20 }}>Usuario:Entrenador Pokemon</p>
                </nav>
            }
            <br />
            <div><Input icon={<User />}
                variant="filled" placeholder='Ingresa tu nombre' radius="xl"
                size="xl" onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)} />
            </div>
            <br />
            <Button color="violet" size="md" onClick={(e: any) => logIn(e)}>Logearse</Button>
        </div>

        )
    }

export default Login