import React from "react"
import { StyledRedirect } from "../../ui/StyledRedirect"
import { StyledFooter } from "../../ui/StyledFooter"
import { Button } from "../../../../ui/Button"
import { RouteNames } from "../../../../router"
import { Link } from "react-router-dom"

export const RegistrationFooter: React.FC = () => {

    return (
        <StyledFooter>
            <Link to={RouteNames.LOGIN}>
                <Button width="100%">
                    Already have an account? Sign in.
                </Button>
            </Link>
        </StyledFooter>
    )
}