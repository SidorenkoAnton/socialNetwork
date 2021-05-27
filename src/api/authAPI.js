import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const authAPI = {
	setAuthUser: () => instance.get(`auth/me`),
	login: (email, password, rememberMe) => instance.post('auth/login', { email, password, rememberMe }),
	logout: () => instance.delete('auth/login'),
}