import React, {useState} from 'react';
import AuthInput from "./ui/AuthInput";
import AuthTitle from "./ui/AuthTitle";
import AuthWrapper from "./ui/AuthWrapper";
import Flex from "../../ui/Flex";
import AuthButton from "./ui/AuthButton";
import AuthRedirect from "./components/AuthRedirect";
import {RouteNames} from "../../router";
import {useLocation} from "react-router";
import {isAxiosError} from "axios";
import AuthError from "./ui/AuthError";
import userAPIService from "../../services/userAPIService";
import {useAppSelector} from "../../hooks/useAppSelector";
import {login} from "../../store/slices/ActionCreators";
import {IUser} from "../../models/IUser";
import {useNavigate, Navigate} from "react-router";

// TODO: REFACTOR

const AuthForm = () => {
    const {isAuth} = useAppSelector(state => state.userReducer)
    const location = useLocation()
    const isLogin = location.pathname === RouteNames.LOGIN
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState({state: false, message: []})

    const submit = async (e: React.MouseEvent) => {
        e.preventDefault()
        try {
            let user;
            if (isLogin) {
                user = await userAPIService.login(email, password)
            } else {
                user = await userAPIService.registration(email, password, name)
            }
            login(user as IUser)
            navigate(RouteNames.DISK)
        } catch (err) {
            if (isAxiosError(err)) {
                const msg = err.response?.data.message
                setError({state: true, message: msg})
            }
        }
    }

    if (isAuth) {
        return <Navigate to={RouteNames.DISK} />
    }

    return (
        <Flex justify="center" align="center">
            <AuthWrapper>
                <AuthTitle>{isLogin ? "Sign in" : "Registration"}</AuthTitle>
                <Flex direction="column" gap={10}>
                    <AuthInput onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="EMAIL" />
                    <AuthInput onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="PASSWORD"/>
                    {!isLogin &&
                        <AuthInput onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="NAME"/>
                    }
                </Flex>
                {error.state && error.message.map(msg => (<AuthError>{msg}</AuthError>))}
                <Flex top={20} align="center" justify="space-between">
                    <AuthRedirect isLogin={isLogin} />
                    <AuthButton onClick={submit}>{isLogin ? "Sign in" : "Register"}</AuthButton>
                </Flex>
            </AuthWrapper>
        </Flex>
    );
};

export default AuthForm;