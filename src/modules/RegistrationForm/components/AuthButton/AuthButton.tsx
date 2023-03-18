import React from "react"
import { Button } from "../../../../ui/Button"

interface ButtonProps {
    disabled?: boolean;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AuthButton: React.FC<ButtonProps> = ({disabled, onClick}) => {
    return (
        <Button 
                disabled={disabled || undefined} 
                primary
                onClick={onClick}
            >
                Sign Up
        </Button>
    )
}