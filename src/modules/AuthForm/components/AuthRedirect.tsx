import styled from "styled-components";
import React from "react"
import {Link} from "react-router-dom";
import {RouteNames} from "../../../router";

const StyledAuthRedirect = styled.span`
  font-size: 14px;
  span {
    color: #006ec9;
    cursor: pointer;
  }
`

interface AuthRedirectProps {
    isLogin: boolean;
}

const AuthRedirect: React.FC<AuthRedirectProps> = ({isLogin}) => {
    return (
        isLogin
            ? <StyledAuthRedirect>Not a member? <span><Link to={RouteNames.REGISTRATION}>Register</Link></span>.</StyledAuthRedirect>
            : <StyledAuthRedirect>Already have an account? <span><Link to={RouteNames.LOGIN}>Sign in</Link></span>.</StyledAuthRedirect>
    )
}

export default AuthRedirect