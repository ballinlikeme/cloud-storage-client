import React from 'react';
import Flex from "../../../../ui/Flex";
import Button from "../../ui/Button";
import ToolBarWrapper from "./ui/ToolBarWrapper";
import ToolBarInput from "./ui/ToolBarInput";

const ToolBar: React.FC = () => {
    return (
            <ToolBarWrapper>
                <Flex gap={30}>
                    <ToolBarInput />
                    <Button>
                        Create
                    </Button>
                </Flex>
            </ToolBarWrapper>
    );
};

export default ToolBar;