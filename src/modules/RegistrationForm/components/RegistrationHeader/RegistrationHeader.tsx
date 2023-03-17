import React, { useState } from "react"
import { StyledHeader } from "../../ui/StyledHeader"
import { StyledTitle } from "../../ui/StyledTitle"

export const RegistrationHeader: React.FC = () => {

    const [isLogin, setIsLogin] = useState(false)

    return (
        <StyledHeader>
            <StyledTitle>
                Sign Up
            </StyledTitle>
        </StyledHeader>
    )
}