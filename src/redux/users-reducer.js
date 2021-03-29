const TOGGLE_FOLLOWED = 'TOGGLE-FOLLOWED'
const SET_USERS = 'SET-USERS'

let initialState = {
    items: [
        /*  {
             id: 1, followed: false,
             avatarUrl: 'https://c-ash.smule.com/rs-s78/arr/f9/8a/2a2d4783-6a8c-4f86-9c22-efe09b9ce706_1024.jpg',
             secondName: 'Sidorenko', firstName: 'Anton', status: 'Learned React', location: { country: 'Russia', sity: 'Rostov-na-Donu' }
         },
         {
             id: 2, followed: false,
             avatarUrl: 'https://c-ash.smule.com/rs-s78/arr/f9/8a/2a2d4783-6a8c-4f86-9c22-efe09b9ce706_1024.jpg',
             secondName: 'Uvarenkov', firstName: 'Gennadiy', status: 'Make a repairs', location: { country: 'Russia', sity: 'Rostov-na-Donu' }
         },
         {
             id: 3, followed: false,
             avatarUrl: 'https://c-ash.smule.com/rs-s78/arr/f9/8a/2a2d4783-6a8c-4f86-9c22-efe09b9ce706_1024.jpg',
             secondName: 'Zelensky', firstName: 'Vladimir', status: 'Ukrain Prezident', location: { country: 'Ukrain', sity: 'Kiev' }
         },
         {
             id: 4, followed: false,
             avatarUrl: 'https://c-ash.smule.com/rs-s78/arr/f9/8a/2a2d4783-6a8c-4f86-9c22-efe09b9ce706_1024.jpg',
             secondName: 'Lukashenko', firstName: 'Alexander', status: 'Belarus Prezident', location: { country: 'Belarus', sity: 'Minsk' }
         }, */

    ],

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOWED:
            return {
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: !user.followed, location: { ...user.location } }
                    }
                    else return user
                }),
            }

        case SET_USERS:
            return {
                ...state,
                items: [...action.users]
            }
        default:
            return state
    }

}


export const toggleFollowAC = (userId) => {
    return { type: TOGGLE_FOLLOWED, userId }
}


export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}


export default usersReducer