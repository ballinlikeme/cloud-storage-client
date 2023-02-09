import {$authHost, $host} from "./http"
import jwt_decode from "jwt-decode";

interface IResponse {
    token: string;
}

class ApiService {
    async registration(email: string, password: string, name: string) {
        const {data} = await $host.post<IResponse>('/auth/registration', {
            email, password, name
        })
        localStorage.setItem('token', data.token)
        return await jwt_decode(data.token)
    }

    async login(email: string, password: string) {
        const {data} = await $host.post('/auth/login', {
            email, password
        })
        localStorage.setItem('token', data.token)
        return await jwt_decode(data.token)
    }

    async checkAuth() {
        const response = await $authHost.get('auth/check')
        return response.data
    }
}


export const apiService = new ApiService()
