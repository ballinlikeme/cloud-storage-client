import React from 'react';
import file from "../../../../../assets/file.svg"
import folder from "../../../../../assets/folder.svg"

interface Props {
    type: string;
}

const FileIcon: React.FC<Props> = ({type}) => {

    return (
        <img
            width={50}
            src={type === "dir" ? folder : file}
            alt="file"
        />
    );
};

export default FileIcon;