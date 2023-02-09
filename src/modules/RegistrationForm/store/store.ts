import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../models/IUser"

interface UserState {
    user: IUser;
    isAuth: boolean;
    isLoading: boolean;
    errors: string[];
    isLogin: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: false,
    errors: [],
    isLogin: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userFetching(state) {
            state.isLoading = true
        },

        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.isAuth = true;
            state.errors = []
            state.user = action.payload
        },

        userFetchingError(state, action: PayloadAction<string[]>) {
            state.isLoading = false;
            state.errors = action.payload
        },

        changeWindow(state) {
            state.isLogin = !state.isLogin
        },

        clearErrors(state) {
            state.errors = []
        },

        clearAuthInfo(state) {
            state.user = {} as IUser
            state.isAuth = false
        }
    }
})

export const {clearAuthInfo, userFetching, userFetchingSuccess, userFetchingError, changeWindow, clearErrors} = userSlice.actions
export const userReducer = userSlice.reducer