import React, { useEffect } from 'react';
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { getFiles } from "../../store/actions"
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { File } from "../File/File";
import { FilesListHeader } from "../FilesListHeader/FilesListHeader";
import { FilesListToolbar } from "../FilesListToolbar/FilesListToolbar";
import { FilesListWrapper } from "../../ui/FilesListWrapper";
import { CreateFolderPopUp } from "../CreateFolderPopUp/CreateFolderPopUp";
import { UploadFilePopUp } from "../UploadFilePopUp/UploadFilePopUp";
import { sortByType } from "../../helpers/SortByType";
import axios from "axios";

export const FilesList = () => {

    const { filesToDisplay, currentDir } = useAppSelector(state => state.filesReducer)
    const { id } = useAppSelector(state => state.userReducer.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getFiles(id, currentDir?.id || null))
    }, [currentDir])

    return (
        <>
            <CreateFolderPopUp />
            <UploadFilePopUp />
            <FilesListWrapper>
                <FilesListToolbar />
                <FilesListHeader />
                {sortByType(filesToDisplay).map(file => <File file={file} key={file.id} />)}
            </FilesListWrapper>
        </>
    );
};

