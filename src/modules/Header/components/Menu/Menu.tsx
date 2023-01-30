import React from 'react';
import {logout} from "../../../../store/slices/ActionCreators";
import Flex from "../../../../ui/Flex";
import Button from "../../../Workspace/ui/Button";
const Menu: React.FC = () => {
    return (
        <nav>
            <Flex gap={15}>
                <Button>Settings</Button>
                <Button onClick={logout}>Sign out</Button>
            </Flex>
        </nav>
    );
};

export default Menu;