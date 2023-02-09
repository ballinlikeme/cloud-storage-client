import React from "react"
import {Navigate} from "react-router";
import {RouteNames} from "../router";
import {useAppSelector} from "../hooks/useAppSelector";

interface RequireAuthProps {
    children: React.ReactElement
}

const RequireAuth: React.FC<RequireAuthProps> = ({children}) => {
    const {isAuth} = useAppSelector(state => state.userReducer)

    if (!isAuth) return <Navigate to={RouteNames.AUTH} />

    return children;
}

export default RequireAuth;