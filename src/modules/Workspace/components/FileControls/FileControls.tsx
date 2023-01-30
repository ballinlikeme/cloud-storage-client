import React from 'react';
import Flex from "../../../../ui/Flex";
import DownloadIcon from "./ui/DownloadIcon";
import DeleteIcon from "./ui/DeleteIcon";
import styled from "styled-components";

export const ControlsWrapper = styled.div`
display: none;
`

const FileControls = () => {
    return (
        <ControlsWrapper>
            <Flex direction="row-reverse" gap={10}>
                <DeleteIcon />
                <DownloadIcon />
            </Flex>
        </ControlsWrapper>
    );
};

export default FileControls;