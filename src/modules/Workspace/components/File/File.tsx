import React from 'react';
import Flex from "../../../../ui/Flex";
import FileIcon from "./ui/FileIcon";
import FileName from "./ui/FileName";
import styled from "styled-components";
import FileControls, {ControlsWrapper} from "../FileControls/FileControls";
import {IFile} from "../../../../models/IFile";

const FileWrapper = styled.li`
  list-style: none;
  border-radius: 10px;
  transition: background-color 500ms ease;
  padding: 5px;
  width: 100%;
  
  &:hover {
    background-color: #d1d1d1;
  }
  
  &:hover ${ControlsWrapper} {
    display: block;
  }
`

interface FileProps {
    file: IFile;
}

const File: React.FC<FileProps> = ({file}) => {
    return (
        <FileWrapper>
            <Flex align="center" justify="space-between">
                <Flex
                    gap={10}
                    align="center"
                >
                    <FileIcon />
                    <FileName>{file.name}</FileName>
                </Flex>
                <FileControls />
            </Flex>
        </FileWrapper>
    );
};

export default File;