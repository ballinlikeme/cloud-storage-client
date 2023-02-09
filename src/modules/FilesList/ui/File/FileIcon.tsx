import styled from "styled-components";
import React from "react";
import dirIcon from "../../../../assets/folder.svg"
import fileIcon from "../../../../assets/file.svg"

const StyledFileIcon = styled.img`
  max-width: 35px;
  justify-self: center;
`

interface FileIconProps {
    type: string;
}

export const FileIcon: React.FC<FileIconProps> = ({type}) => {
    return <StyledFileIcon src={type === "dir" ? dirIcon : fileIcon} alt="file" />
}