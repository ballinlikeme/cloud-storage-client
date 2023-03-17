import React from 'react';
import {RegistrationLabel} from "../../ui/RegistrationLabel";
import Flex from "../../../../ui/Flex";
import {Input} from "../../../../ui/Input";

interface RegistrationFieldProps {
    fieldName: string;
    value: string;
    setValue: Function;
    type: string;
    pattern: string;
}

export const RegistrationField = React.forwardRef<HTMLInputElement, React.PropsWithRef<RegistrationFieldProps>>( ({pattern, fieldName, value, setValue, type}, ref) => {
    return (
        <Flex direction="column" gap={5} bottom={20}>
         <RegistrationLabel htmlFor={fieldName}>{fieldName}</RegistrationLabel>
         <Input
             ref={ref}
             pattern={pattern}
             type={type}
             value={value}
             placeholder={fieldName}
             id={fieldName}
             onChange={(e) => setValue(e.target.value)}
         />
        </Flex>
    );
});

