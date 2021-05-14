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
                isAuth: true
            }
        default:
            return state
    }

}


export const setAuthUser = ({ id, login, email }) => {
    return { type: SET_AUTH_USER, data: { id, login, email } }
}

export const getAndSetAuthUser = () => {
    return async (dispatch) => {
        let response = await authAPI.setAuthUser()
        if (response.data.resultCode == 0) {
            dispatch(setAuthUser(response.data.data))
        }
    }

}






export default authReducer