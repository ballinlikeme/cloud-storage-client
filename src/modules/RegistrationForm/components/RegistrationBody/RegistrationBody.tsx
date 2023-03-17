import React, { useState, useRef, useEffect } from "react"
import { StyledBody } from "../../ui/StyledBody"
import { Button } from "../../../../ui/Button"
import { RegistrationInput } from "../RegistrationInput/RegistrationInput"

export const RegistrationBody: React.FC = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)

    const submit = (event: React.MouseEvent) => {
        event.preventDefault()

    }

    useEffect(() => {
        setDisabled(
            !passRef.current?.checkValidity()
            || !emailRef.current?.checkValidity()
        )
    }, [email, password])

    return (
        <StyledBody>
            <RegistrationInput
                name="Email"
                value={email}
                setValue={setEmail}
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Enter your real email address including local-part, @ symbol and domain name."
                ref={emailRef}
            />
            <RegistrationInput 
                name="Password"
                value={password}
                setValue={setPassword}
                type="password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{5,16}$"
                title="At least 5 symbols including upper and lowercase letters and numbers."
                ref={passRef}
            />
            <Button 
                disabled={disabled} 
                primary
            >
                Sign Up
            </Button>
        </StyledBody>
    )
}