import React from 'react';
import Flex from "../../../../ui/Flex";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {RegistrationError} from "../../ui/RegistrationError";

export const RegistrationErrorsArea = () => {

    const {errors} = useAppSelector(state => state.userReducer)

    return (
        <Flex bottom={10} direction="column" gap={5}>
            {errors && errors.map(error => (
                <RegistrationError>{error}</RegistrationError>
            ))}
        </Flex>
    );
};

