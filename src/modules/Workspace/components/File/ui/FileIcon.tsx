import React from 'react';
import file from "../../../../../assets/file.svg"
import folder from "../../../../../assets/folder.svg"

interface Props {
    type: string;
}

const FileIcon: React.FC = () => {

    return (
        <img width={50} src={file} alt="file" />
    );
};

export default FileIcon;