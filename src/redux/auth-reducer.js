import { authAPI } from "../api/authAPI"

const SET_AUTH_USER = 'SET_AUTH_USER'





let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

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


export const setAuthUser = (id, login, email, isAuth) => {
    return { type: SET_AUTH_USER, data: { id, login, email, isAuth } }
}

export const getAndSetAuthUser = () => {
    return async (dispatch) => {
        let response = await authAPI.setAuthUser()
        if (response.data.resultCode == 0) {
            let { id, login, email } = response.data.data
            dispatch(setAuthUser(id, login, email, true))
        }
        return response
    }
}

export const loginUser = (email, password, rememberMe) => async (dispatch) => {

    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {

        dispatch(getAndSetAuthUser())
    }
}

export const logoutUser = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUser(null, null, null, false))
    }
}


export default authReducer