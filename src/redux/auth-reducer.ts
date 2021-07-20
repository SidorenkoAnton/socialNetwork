import { authAPI } from "../api/authAPI"

const SET_AUTH_USER = 'SET_AUTH_USER'



type InitialStateType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

let initialState: InitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case SET_AUTH_USER:

            return {
                ...state,
                ...action.data,
            }
        default:
            return state
    }

}

type SetAuthUserActionType = {
    type: typeof SET_AUTH_USER
    data: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

export const setAuthUser = (id: number | null, login: string | null, email: string | null, isAuth: boolean): SetAuthUserActionType => {
    return { type: SET_AUTH_USER, data: { id, login, email, isAuth } }
}

export const getAndSetAuthUser = () => {
    return async (dispatch: any) => {
        let response = await authAPI.setAuthUser()
        if (response.data.resultCode == 0) {
            let { id, login, email } = response.data.data
            dispatch(setAuthUser(id, login, email, true))
        }
        return response
    }
}

export const loginUser = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {

        dispatch(getAndSetAuthUser())
    }
}

export const logoutUser = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}


export default authReducer