import React from "react"
import { StyledError } from "../../ui/StyledError"

interface ErrorProps {
     error: string;
}

export const AuthError: React.FC<ErrorProps> = ({ error }) => {
     return <StyledError>{error}</StyledError>
}