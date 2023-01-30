import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    user: IUser;
    isAuth: boolean;
}

const initialState: UserState = {
    user: {} as IUser,
    isAuth: false,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<IUser>) {
            state.user = action.payload
            state.isAuth = true
        },

        removeUser(state) {
            state.user = {} as IUser
            state.isAuth = false
        }
    }
})
export const {setUser, removeUser} = userSlice.actions
export default userSlice.reducer
