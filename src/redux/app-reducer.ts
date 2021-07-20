import { authAPI } from "../api/authAPI"
import { getAndSetAuthUser } from "./auth-reducer"

const SET_INITIALIZED = 'SET_INITIALIZED'

export type initialStateType = {
    isInitialized: boolean,
}

let initialState: initialStateType = {
    isInitialized: false,
}

const appReducer = (state = initialState, action: any) => {

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

type setInitializedActionType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = (): setInitializedActionType => {
    return { type: SET_INITIALIZED, }
}



export const getInitializedData = () => {
    return async (dispatch: any) => {
        let result = await dispatch(getAndSetAuthUser())
        dispatch(setInitialized())

    }
}



export default appReducer