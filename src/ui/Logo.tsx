import styled from "styled-components";
import {Link} from "react-router-dom";
import {RouteNames} from "../router";
import logo from "../assets/logo.svg"

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  color: var(--primary-text);
  
  img {
    max-width: 50px;
  }
  
  h1 {
    font-size: 25px;
    span {
      color: var(--accent-color);
    }
  }
`

const Logo = () => {
    return (
        <Link to={RouteNames.DISK}>
            <StyledLogo>
                <img src={logo} alt="hard drive" />
                <h1><span>Cloud</span> Drive</h1>
            </StyledLogo>
        </Link>
    )
}

export default Logo
