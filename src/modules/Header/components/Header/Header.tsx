import React from 'react';
import { HeaderWrapper } from "../../ui/HeaderWrapper";
import Container from "../../../../ui/Container";
import Logo from "../../../../ui/Logo";
import Flex from "../../../../ui/Flex";
import { HeaderButton } from "../../ui/HeaderButton";

export const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Flex justify="space-between" align="center">
                    <Logo />
                    <HeaderButton>Logout</HeaderButton>
                </Flex>
            </Container>
        </HeaderWrapper>
    );
};