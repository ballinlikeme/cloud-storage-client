import React from "react"
import Flex from "../../../../ui/Flex"
import { Input } from "../../../../ui/Input"
import { StyledLabel } from "../../ui/StyledLabel"

interface InputProps {
    value: string;
    name: string;
    type: string;
    pattern?: string;
    title?: string;
    setValue: React.Dispatch<React.SetStateAction<string>>
}

export const AuthInput = React.forwardRef<HTMLInputElement, React.PropsWithRef<InputProps>>(({name, value, setValue, type, pattern, title}, ref) => {
    return (
        <Flex direction="column" gap={10}>
            <StyledLabel htmlFor={name}>{name}</StyledLabel>
            <Input 
                placeholder={name} 
                id={name} 
                type={type}
                value={value}
                onChange={e => setValue(e.target.value)}
                pattern={pattern || undefined}
                title={title || undefined}
                ref={ref}
            />
        </Flex>
    )
})