import React from 'react';
import Flex from "../../../../ui/Flex";
import FileIcon from "./ui/FileIcon";
import FileName from "./ui/FileName";
import styled from "styled-components";
import FileControls, {ControlsWrapper} from "../FileControls/FileControls";
// import {IFile} from "../../../../models/IFile";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
// import {addToStack, setCurrentDir} from "../../../../store/slices/FileSlice";
import {useAppSelector} from "../../../../hooks/useAppSelector";

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

// interface FileProps {
//     file: IFile;
// }

const File: React.FC = () => {

    const dispatch = useAppDispatch()
    // const currentDir = useAppSelector(state => state.fileReducer.currentDir)

    const handleDirSwitch = () => {
        // if (file.type === 'dir') {
            // dispatch(setCurrentDir(file))
            // dispatch(addToStack(currentDir || null))
        // }
    }

    return (
        <FileWrapper onClick={() => handleDirSwitch()}>
            <Flex align="center" justify="space-between">
                <Flex gap={10} align="center">
                    {/*<FileIcon type={file.type} />*/}
                    {/*<FileName>{file.name}</FileName>*/}
                </Flex>
                <FileControls />
            </Flex>
        </FileWrapper>
    );
};

export default File;