import React from "react"
import { AuthLayout } from "../AuthLayout/AuthLayout"
import { LoginBody } from "../LoginBody/LoginBody"
import { LoginHeader } from "../LoginHeader/LoginHeader"
import { LoginFooter } from "../LoginFooter/LoginFooter"
import { useAppSelector } from "../../../../hooks/useAppSelector"
import { Navigate } from "react-router"
import { RouteNames } from "../../../../router"

export const LoginForm: React.FC = () => {

    const isAuth = useAppSelector(state => state.userReducer.isAuth)

    if (isAuth) return <Navigate to={RouteNames.DISK} />

    return (
        <AuthLayout>
            <LoginHeader />
            <LoginBody />
            <LoginFooter />
        </AuthLayout>
    )
}