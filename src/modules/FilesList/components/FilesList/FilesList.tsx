import React from 'react';
import { ListWrapper } from '../../ui/ListWrapper';
import { FilesListHeader } from '../FilesListHeader/FilesListHeader';

export const FilesList: React.FC = () => {

    // TODO
    // [ ] Titles
    // [ ] List
    // [ ] Controls

    return (
        <>
            <FilesListHeader />
            <ListWrapper>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
                <div style={{ width: "100%" }}>1</div>
            </ListWrapper>
        </>
    );
};

