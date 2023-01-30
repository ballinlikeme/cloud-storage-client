import React from "react"
import Container from "../../ui/Container";
import Logo from "../../ui/Logo"
import styled from "styled-components";
import Flex from "../../ui/Flex";
import Menu from "./components/Menu/Menu";

const StyledHeader = styled.header`
  height: 70px;
  background-color: var(--primary-background);
`

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <Flex align="center" justify="space-between">
                    <Logo />
                    <Menu />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header