import React from 'react';
import Flex from "../../../../ui/Flex";
import ToolBarWrapper from "./ui/ToolBarWrapper";
import ToolBarButton from "./ui/ToolBarButton";
import CreateFolder from "../CreateFolder/CreateFolder";
// import {togglePopUpVisibility} from "../../../../store/creators/FileActionCreators";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {useAppSelector} from "../../../../hooks/useAppSelector";
// import {deleteFromStack, setCurrentDir} from "../../../../store/slices/FileSlice";

const ToolBar: React.FC = () => {

    // const dirStack = useAppSelector(state => state.fileReducer.dirStack)
    const dispatch = useAppDispatch()

    const backClickHandler = () => {
        // const lastFolder = dirStack[dirStack.length - 1]
        // dispatch(deleteFromStack())
        // dispatch(setCurrentDir(lastFolder || null))
    }

    return (
            <ToolBarWrapper>
                <Flex gap={30}>
                    {/*<ToolBarButton onClick={() => dispatch(togglePopUpVisibility())}>New Folder</ToolBarButton>*/}
                    <ToolBarButton onClick={() => backClickHandler()}>Prev</ToolBarButton>
                    <CreateFolder />
                </Flex>
            </ToolBarWrapper>
    );
};

export default ToolBar;