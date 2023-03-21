import { ReactHooksModule } from "@reduxjs/toolkit/dist/query/react/module";

// import {clearAuthInfo, clearErrors, userFetching, userFetchingError, userFetchingSuccess} from "./store"
// import {AppDispatch} from "../../../store/store";
// import {apiService} from "../api/apiService";
// import {IUser} from "../models/IUser";
// import {AxiosError} from "axios";

// export const login = (email: string, password: string) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userFetching())
//         const user = await apiService.login(email, password)
//         dispatch(userFetchingSuccess(user as IUser))
//     } catch (e: AxiosError | any) {
//         dispatch(userFetchingError([e.response.data.message]))
//     }
// }

// export const register = (email: string, password: string, name: string) => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userFetching())
//         const user = await apiService.registration(email, password, name)
//         dispatch(userFetchingSuccess(user as IUser))
//     } catch (e: AxiosError | any) {
//         dispatch(userFetchingError([e.response.data.message]))
//     }
// }

// export const verify = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userFetching())
//         const user = await apiService.checkAuth()
//         dispatch(userFetchingSuccess(user as IUser))
//     } catch (e: AxiosError | any) {
//         dispatch(userFetchingError(['']))
//     }
// }

// export const logout = () => async (dispatch: AppDispatch) => {
//     dispatch(clearAuthInfo())
//     localStorage.removeItem('token')
// }

