import React from 'react';
import { ToolBarWrapper } from "../../ui/ToolBarWrapper";
import { ToolbarList } from '../ToolbarList/ToolbarList';
import { FolderModal } from '../Modals/FolderModal';
import { FileModal } from '../Modals/FileModal';

export const FilesListToolbar: React.FC = () => {
    return (
        <ToolBarWrapper>
            <FolderModal />
            <FileModal />
            <ToolbarList />
        </ToolBarWrapper>
    );
};