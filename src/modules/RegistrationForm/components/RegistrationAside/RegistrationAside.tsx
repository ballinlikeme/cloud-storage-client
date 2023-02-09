import styled, {css} from "styled-components";
import Flex from "../../../../ui/Flex";
import logo from "../../../../assets/logo_white.svg"
import {useAppSelector} from "../../../../hooks/useAppSelector";

interface RegistrationAsideWrapperProps {
    isLogin: boolean
}

const RegistrationAsideWrapper = styled.aside<RegistrationAsideWrapperProps>`
  flex: 0 0 50%;
  background-color: #84DCCF;
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  transition: all 500ms ease;
  ${props => props.isLogin && css`
    transform: translateX(100%);
  `}
`

const RegistrationAsideText = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #fff;
`

const RegistrationAsideImage = styled.img`
  max-width: 100px;
`



export const RegistrationAside = () => {

    const {isLogin} = useAppSelector(state => state.userReducer)

    return (
        <RegistrationAsideWrapper isLogin={isLogin}>
            <Flex justify="center" align="center" direction="column" gap={10}>
                <RegistrationAsideImage src={logo} alt="logo" />
                <RegistrationAsideText>
                    {isLogin ? "Hey, I see you coming back, brother!" : "You look like you need some space!"}
                </RegistrationAsideText>
                <RegistrationAsideText>{isLogin ? "Log in to access your files!" : "Register and get 15gb for free!"}</RegistrationAsideText>
            </Flex>
        </RegistrationAsideWrapper>
    )
}