import React from "react"
import { StyledRedirect } from "../../ui/StyledRedirect"
import { StyledFooter } from "../../ui/StyledFooter"
import { RouteNames } from "../../../../router"
import { Link } from "react-router-dom"

export const RegistrationFooter: React.FC = () => {
    return (
        <StyledFooter>
            <StyledRedirect>
                Already have an account? <Link to={RouteNames.AUTH}>Sign in</Link>.
            </StyledRedirect>
        </StyledFooter>
    )
}