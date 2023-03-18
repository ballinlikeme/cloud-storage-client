import React from "react"
import { StyledFooter } from "../../ui/StyledFooter"
import { Button } from "../../../../ui/Button"
import { Link } from "react-router-dom"
import { RouteNames } from "../../../../router"

export const LoginFooter: React.FC = () => {

    return (
        <StyledFooter>
            <Link to={RouteNames.REGISTRATION}>
                <Button width="100%">
                    Do not have an account? Sign up.
                </Button>
            </Link>
        </StyledFooter>
    )
}