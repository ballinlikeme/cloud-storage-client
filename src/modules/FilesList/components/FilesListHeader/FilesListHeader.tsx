import React from 'react';
import Flex from "../../../../ui/Flex";
import {FilesListHeaderWrapper} from "../../ui/FilesListHeaderWrapper";
import {FilesListHeaderItem} from "../../ui/FilesListHeaderItem";

export const FilesListHeader = () => {
    return (
        <FilesListHeaderWrapper>
            <FilesListHeaderItem>Name</FilesListHeaderItem>
            <FilesListHeaderItem>Size</FilesListHeaderItem>
            <FilesListHeaderItem>Modified</FilesListHeaderItem>
        </FilesListHeaderWrapper>
    );
};