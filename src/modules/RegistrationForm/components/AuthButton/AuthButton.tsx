import React from "react"
import { Button } from "../../../../ui/Button"

interface ButtonProps {
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title: string;
}

export const AuthButton: React.FC<ButtonProps> = ({ disabled, onClick, title }) => {
    return (
        <Button
            disabled={disabled || undefined}
            primary
            onClick={onClick}
        >
            {title}
        </Button>
    )
}