import axios from "axios"

export * as axios from 'axios'

let instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '030ecbf1-29d0-474d-af46-18c1b5417bda'
	}
})


export const userAPI = {
	getUsers: (usersOnPage = 10, currentUsersPage = 1) => {
		return instance.get(`users?count=${usersOnPage}&page=${currentUsersPage}`)
	}
}