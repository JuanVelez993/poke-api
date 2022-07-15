import { createSlice } from "@reduxjs/toolkit"

type loginType = {
    name?: string,
    loged: true | false,
}

type loginStateType = {
    login: loginType,
}

const initialState: loginStateType = {
    login: {
        name: '',
        loged: false
    },
}

const userSlice = createSlice({
    name: 'logged',
    initialState,
    reducers: {
        logInReducer(state, action) {
            const stateLoggedIn = {
                ...state, login: {
                    name: action.payload.name,
                    loged: action.payload.loged
                }
            }
            return stateLoggedIn
        },
        logOutReducer() {
            return {
                login: {
                    name: "",
                    loged: false
                }
            }
        }
    }
})


export type { loginType }
export default userSlice.reducer
export const {logInReducer, logOutReducer} = userSlice.actions