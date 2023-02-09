import styled from "styled-components";
import {Link} from "react-router-dom";
import {RouteNames} from "../router";
import whiteLogo from "../assets/logo_white.svg"
import React from "react";

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 20px;
  
  img {
    max-width: 50px;
  }
  
  h1 {
    font-size: 25px;
    color: #fff;
  }
`

const Logo = () => {
    return (
        <Link to={RouteNames.DISK}>
            <StyledLogo>
                <img src={whiteLogo} alt="hard drive" />
                <h1><span>Cloud</span> Drive</h1>
            </StyledLogo>
        </Link>
    )
}

export default Logo
