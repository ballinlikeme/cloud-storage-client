import React from 'react';
import {HeaderWrapper} from "../../ui/HeaderWrapper";
import Container from "../../../../ui/Container";
import Logo from "../../../../ui/Logo";
import Flex from "../../../../ui/Flex";
import {HeaderButton} from "../../ui/HeaderButton";
import {logout} from "../../../RegistrationForm/"
import {useAppDispatch} from "../../../../hooks/useAppDispatch";

export const Header = () => {
    const dispatch = useAppDispatch()
    return (
        <HeaderWrapper>
            <Container>
                <Flex justify="space-between" align="center">
                    <Logo />
                    <HeaderButton onClick={() => dispatch(logout())}>Logout</HeaderButton>
                </Flex>
            </Container>
        </HeaderWrapper>
    );
};