import React from "react"
import { StyledHeader } from "../../ui/StyledHeader"
import { StyledTitle } from "../../ui/StyledTitle"

export const LoginHeader: React.FC = () => {
    return (
        <StyledHeader>
            <StyledTitle>
                Sign In
            </StyledTitle>
        </StyledHeader>
    )
}