import React from 'react';
import {IFile} from "../../models/IFile";
import {FileWrapper} from "../../ui/File/FileWrapper";
import {FileIcon} from "../../ui/File/FileIcon";
import {FileName} from "../../ui/File/FileName";
import {FileProperty} from "../../ui/File/FileProperty";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {addToStack, setCurrentDir} from "../../store/store";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {bytesToKiloBytes} from "../../helpers/BytesToKiloBytes";
import {removeFile} from "../../store/actions";
import {apiService} from "../../api/apiService";

interface FileProps {
    file: IFile
}

export const File: React.FC<FileProps> = ({file}) => {

    const dispatch = useAppDispatch()
    const {currentDir} = useAppSelector(state => state.filesReducer)

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
        try {
            const response = await fetch(`http://localhost:5000/files/downloadFile?fileId=${file.id}`)
            console.log(response)
            if (response.status === 200) {
                const blob = await response.blob()
                const downloadUrl = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.download = `${file.name}.${file.type}`
                document.body.appendChild(link)
                link.click()
                link.remove()
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <FileWrapper onClick={handleDirChange}>
            <FileIcon type={file.type} />
            <FileName>{file.name}</FileName>
            <FileProperty onClick={handleFileDownload}>DOWNLOAD</FileProperty>
            <FileProperty onClick={handleFileRemove}>DELETE</FileProperty>
            <FileProperty start={5}>{bytesToKiloBytes(file.size)} KB</FileProperty>
            {/*<FileProperty start={6}>{getLastModifiedTime(file.updatedAt)}</FileProperty>*/}
        </FileWrapper>
    )
};

