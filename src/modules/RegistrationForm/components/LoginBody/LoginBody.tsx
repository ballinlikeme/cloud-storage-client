import React, { useState, useEffect, useRef } from "react"
import { StyledBody } from "../../ui/StyledBody"
import { AuthInput } from "../AuthInput/AuthInput"
import { AuthButton } from "../AuthButton/AuthButton"

export const LoginBody: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    const submit = () => {

    }

    useEffect(() => {
        setDisabled(
            !emailRef.current?.checkValidity()
            || !passRef.current?.checkValidity()
        )
    })

    return (
        <StyledBody>
            <AuthInput
                name="Email"
                value={email}
                setValue={setEmail}
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Enter your real email address including local-part, @ symbol and domain name."
                ref={emailRef}
            />
            <AuthInput 
                name="Password"
                value={password}
                setValue={setPassword}
                type="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,16}$"
                title="At least 5 symbols including upper and lowercase letters and numbers."
                ref={passRef}
            />
            <AuthButton disabled={disabled} onClick={submit} />
        </StyledBody>
    )
}