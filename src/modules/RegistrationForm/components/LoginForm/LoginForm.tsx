import React from "react"
import { AuthLayout } from "../AuthLayout/AuthLayout"
import { LoginBody } from "../LoginBody/LoginBody"
import { LoginHeader } from "../LoginHeader/LoginHeader"
import { LoginFooter } from "../LoginFooter/LoginFooter"

export const LoginForm: React.FC = () => {
    return (
        <AuthLayout>
            <LoginHeader />
            <LoginBody />
            <LoginFooter />
        </AuthLayout>
    )
}