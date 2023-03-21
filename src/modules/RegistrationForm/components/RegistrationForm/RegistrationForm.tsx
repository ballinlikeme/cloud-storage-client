import React from 'react';
import { RegistrationHeader } from '../RegistrationHeader/RegistrationHeader';
import { RegistrationBody } from '../RegistrationBody/RegistrationBody';
import { AuthLayout } from '../AuthLayout/AuthLayout';
import { RegistrationFooter } from '../RegistrationFooter/RegistrationFooter';
import { useAppSelector } from '../../../../hooks/useAppSelector';
import { Navigate } from 'react-router';
import { RouteNames } from '../../../../router';


export const RegistrationForm: React.FC = () => {

    const isAuth = useAppSelector(state => state.userReducer.isAuth)

    if (isAuth) return <Navigate to={RouteNames.DISK} />

    return (

        <AuthLayout>
            <RegistrationHeader />
            <RegistrationBody />
            <RegistrationFooter />
        </AuthLayout>

    );
};

