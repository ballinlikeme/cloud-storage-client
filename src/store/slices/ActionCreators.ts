import {store} from "../store";
import {IUser} from "../../models/IUser";
import {removeUser, setUser} from "./UserSlice";

export const login = (user: IUser) => {
    store.dispatch(setUser(user))
}

export const logout = () => {
    store.dispatch(removeUser())
    localStorage.removeItem('token')
}