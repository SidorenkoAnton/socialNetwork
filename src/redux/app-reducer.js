import { authAPI } from "../api/authAPI"
import { getAndSetAuthUser } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'






let initialState = {
    isInitialized: false,
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state
    }

}


export const setInitialized = () => {
    return { type: SET_INITIALIZED, }
}



export const getInitializedData = () => {
    return async (dispatch) => {
        let result = await dispatch(getAndSetAuthUser())
        dispatch(setInitialized())

    }
}



export default appReducer