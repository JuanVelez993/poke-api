import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutReducer } from '../../store/reducers/userSlice';



const LogOut: React.FunctionComponent = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logOutFunction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        dispatch(logOutReducer())
        navigate("/login")
    }
    return (
        <Button color="violet" onClick={(e: any) => logOutFunction(e)}>Salir</Button>
    )
};

export default LogOut;