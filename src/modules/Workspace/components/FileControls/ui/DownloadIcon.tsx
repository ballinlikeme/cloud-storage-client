import React from 'react';
import downloadIcon from "../../../../../assets/download.svg"
import ControlIcon from "./ControlButton";

const DownloadIcon = () => {
    return (
        <ControlIcon>
            <img src={downloadIcon} alt="download"/>
        </ControlIcon>
    );
};

export default DownloadIcon;