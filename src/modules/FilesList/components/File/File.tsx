import React from 'react';
import { IFile } from "../../models/IFile";
import { FileWrapper } from "../../ui/File/FileWrapper";
import { FileIcon } from "../../ui/File/FileIcon";
import { FileName } from "../../ui/File/FileName";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { addToStack, setCurrentDir } from "../../store/store";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { FileProperies } from './FileProperties';
import { StyledList } from '../../ui/StyledList';

interface FileProps {
    file: IFile
}

export const File: React.FC<FileProps> = ({ file }) => {

    const dispatch = useAppDispatch()
    const { currentDir } = useAppSelector(state => state.filesReducer)

    const handleDirChange = () => {
        if (file.type === "dir") {
            dispatch(setCurrentDir(file))
            dispatch(addToStack(currentDir))
        }
    };

    return (
        <StyledList onClick={handleDirChange}>
            <FileIcon type={file.type} />
            <FileName>{file.name}</FileName>
            <FileProperies file={file} />
        </StyledList>
    )
}
