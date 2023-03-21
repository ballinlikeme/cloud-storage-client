import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../models/IUser"

interface UserState {
    user: IUser;
    isAuth: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        authorizeUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
            state.isAuth = true
        },

        clearUser(state) {
            state.user = {} as IUser
            state.isAuth = false
        }
    }
})

export const { clearUser, authorizeUser } = userSlice.actions
export const userReducer = userSlice.reducer