import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "../modules/RegistrationForm"
import {filesReducer} from "../modules/FilesList"

const rootReducer = combineReducers({
    userReducer,
    filesReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>