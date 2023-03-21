import React from 'react';
import { FilesListHeader } from "../FilesListHeader/FilesListHeader";
import { FilesListToolbar } from "../FilesListToolbar/FilesListToolbar";
import { FilesListWrapper } from "../../ui/FilesListWrapper";
import { List } from './List';

export const FilesList: React.FC = () => {

    return (
        <FilesListWrapper>
            <FilesListToolbar />
            <FilesListHeader />
            <List />
        </FilesListWrapper>
    );
};

