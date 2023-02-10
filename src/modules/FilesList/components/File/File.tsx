import React from 'react';
import { IFile } from "../../models/IFile";
import { FileWrapper } from "../../ui/File/FileWrapper";
import { FileIcon } from "../../ui/File/FileIcon";
import { FileName } from "../../ui/File/FileName";
import { FileProperty } from "../../ui/File/FileProperty";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { addToStack, setCurrentDir } from "../../store/store";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { bytesToKiloBytes } from "../../helpers/BytesToKiloBytes";
import { removeFile } from "../../store/actions";
import { apiService } from "../../api/apiService";
import { getLastModifiedTime } from '../../helpers/GetLastModifiedTime';

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
    }

    const handleFileRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        dispatch(removeFile(file.id))
    }

    const handleFileDownload = async (event: React.MouseEvent) => {
        event.stopPropagation()
        await apiService.downloadFile(file.id, file.name, file.type)
    }

    return (
        <FileWrapper onClick={handleDirChange}>
            <FileIcon type={file.type} />
            <FileName>{file.name}</FileName>
            {file.type !== "dir" && <FileProperty onClick={handleFileDownload}>DOWNLOAD</FileProperty>}
            <FileProperty onClick={handleFileRemove}>DELETE</FileProperty>
            <FileProperty start={5}>{bytesToKiloBytes(file.size)} KB</FileProperty>
            <FileProperty start={6}>{getLastModifiedTime(file.updatedAt)}</FileProperty>
        </FileWrapper>
    )
};

