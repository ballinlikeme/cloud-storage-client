import React from 'react';
import deleteIcon from "../../../../../assets/delete.svg"
import ControlIcon from "./ControlButton";

const DeleteIcon = () => {
    return (
        <ControlIcon>
            <img src={deleteIcon} alt="delete can"/>
        </ControlIcon>
    );
};

export default DeleteIcon;