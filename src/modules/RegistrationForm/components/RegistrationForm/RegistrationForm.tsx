import React, {useState, useRef, useEffect} from 'react';
// import {login, register} from "../../store/actions"
// import {RegistrationWrapper} from "../../ui/RegistrationWrapper";
// import {RegistrationTitle} from "../../ui/RegistrationTitle";
// import {RegistrationField} from "../RegistrationField/RegistrationField";
// import {Navigate} from "react-router";
// import {RouteNames} from "../../../../router";
// import Flex from "../../../../ui/Flex";
// import {useAppDispatch} from "../../../../hooks/useAppDispatch";
// import {useAppSelector} from "../../../../hooks/useAppSelector";
// import Spinner from "../../../../ui/Spinner";
// import {Button} from "../../../../ui/Button";
// import {RegistrationErrorsArea} from "../RegistrationErrorsArea/RegistrationErrorsArea";
// import { StyledWrapper } from '../../ui/StyledWrapper';
// import { StyledForm } from '../../ui/StyledForm';
// import { Input } from '../../../../ui/Input';
// import { StyledHeader } from '../../ui/StyledHeader';
// import { StyledTitle } from '../../ui/StyledTitle';
// import { StyledBody } from '../../ui/StyledBody';
import { RegistrationHeader } from '../RegistrationHeader/RegistrationHeader';
import { RegistrationBody } from '../RegistrationBody/RegistrationBody';
import { AuthLayout } from '../AuthLayout/AuthLayout';
import { RegistrationFooter } from '../RegistrationFooter/RegistrationFooter';


export const RegistrationForm: React.FC = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [name, setName] = useState('')
    // const [disabled, setDisabled] = useState(false)

    // const passwordRef = useRef<HTMLInputElement>(null)
    // const emailRef = useRef<HTMLInputElement>(null)
    // const nameRef = useRef<HTMLInputElement>(null)

    // const {isLoading, isAuth} = useAppSelector(state => state.userReducer)

    // const dispatch = useAppDispatch()

    // const submit = async (e: React.MouseEvent) => {
    //     e.preventDefault()
    //     isLogin
    //         ? await dispatch(login(email, password))
    //         : await dispatch(register(email, password, name))
    // }

    // useEffect(() => {
    //     isLogin
    //         ? setDisabled(
    //             !passwordRef.current?.checkValidity()
    //             || !emailRef.current?.checkValidity()
    //         )
    //         : setDisabled(
    //             !passwordRef.current?.checkValidity()
    //             || !emailRef.current?.checkValidity()
    //             || !nameRef.current?.checkValidity()
    //         )
    // }, [email, password, name])

    // if (isLoading) return <Spinner />

    // if (isAuth) return <Navigate to={RouteNames.DISK} />

    return (
        // <RegistrationWrapper>
        //     <RegistrationTitle>{isLogin ? "Log in" : "Register"}</RegistrationTitle>
        //     <RegistrationField
        //         ref={emailRef}
        //         type="text"
        //         fieldName="Email"
        //         value={email}
        //         setValue={setEmail}
        //         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        //     />
        //     <RegistrationField
        //         ref={passwordRef}
        //         type="password"
        //         fieldName="Password"
        //         value={password}
        //         setValue={setPassword}
        //         pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,16}$"
        //     />
        //     {!isLogin &&
        //         <RegistrationField
        //             ref={nameRef}
        //             type="text"
        //             fieldName="Name"
        //             value={name}
        //             setValue={setName}
        //             pattern="[A-Za-z]{2,32}"
        //         />
        //     }
        //     <RegistrationErrorsArea />
        //     <Flex gap={10}>
        //         <Button width="100%" disabled={disabled} onClick={submit} primary>{isLogin ? "Log in" : "Register"}</Button>
        //     </Flex>
        // </RegistrationWrapper>
        <AuthLayout>
            <RegistrationHeader />
            <RegistrationBody />
            <RegistrationFooter />
        </AuthLayout>
        
    );
};

