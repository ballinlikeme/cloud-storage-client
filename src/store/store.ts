import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi, userReducer } from "../modules/RegistrationForm"
import { filesReducer } from "../modules/FilesList"

const rootReducer = combineReducers({
    userReducer,
    filesReducer,
    [authApi.reducerPath]: authApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>