import React from 'react';
import Flex from '../../../../ui/Flex';
import { ListTitle } from '../../ui/ListTitle';
import { StyledList } from '../../ui/StyledList';

export const FilesListHeader: React.FC = () => {
    return (
        <StyledList>
            <ListTitle start={2}>Name</ListTitle>
            <ListTitle start={3} justify="center">Type</ListTitle>
            <ListTitle start={6} justify="center">Size</ListTitle>
            <ListTitle start={7} justify="center">Modified</ListTitle>
        </StyledList>
    );
};