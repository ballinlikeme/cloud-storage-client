import React from "react"
import {RegistrationSwitch, RegistrationPrimaryArea, RegistrationForm, RegistrationLayout, RegistrationAside} from "../modules/RegistrationForm/"

const Auth: React.FC = () => {
    return (
        <RegistrationLayout>
            <RegistrationSwitch />
            <RegistrationAside />
            <RegistrationPrimaryArea>
                <RegistrationForm isLogin={true} />
            </RegistrationPrimaryArea>
            <RegistrationPrimaryArea>
                <RegistrationForm isLogin={false} />
            </RegistrationPrimaryArea>
        </RegistrationLayout>
    )
}

export default Auth