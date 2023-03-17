import React from "react"
import { StyledForm } from "../../ui/StyledForm"
import { StyledWrapper } from "../../ui/StyledWrapper"

export const RegistrationLayout: React.FC<React.PropsWithChildren> = ({children}) => {
    return (
        <StyledWrapper>
            <StyledForm>
                {children}
            </StyledForm>
        </StyledWrapper>
    )
}