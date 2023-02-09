import React from 'react';
import Flex from "../../../../ui/Flex";
import {Button} from "../../../../ui/Button";
import prevIcon from "../../../../assets/previous.svg"
import {Input} from "../../../../ui/Input";
import {ToolBarWrapper} from "../../ui/ToolBarWrapper";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {deleteFromStack, setCurrentDir, toggleFolderPopUp, toggleFilePopUp} from "../../store/store";
import {useAppSelector} from "../../../../hooks/useAppSelector";

export const FilesListToolbar = () => {

    const dispatch = useAppDispatch()
    const {dirStack} = useAppSelector(state => state.filesReducer)

    const toggleFolderModal = () => {
        dispatch(toggleFolderPopUp())
    }

    const toggleFileModal = () => {
        dispatch(toggleFilePopUp())
    }

    const backClickHandler = () => {
        const lastFolder = dirStack[dirStack.length - 1]
        dispatch(deleteFromStack())
        dispatch(setCurrentDir(lastFolder || null))
    }

    return (
        <ToolBarWrapper>
            <Flex gap={20} justify="space-between"  direction="row-reverse">
                <Flex direction="row-reverse" gap={10}>
                    <Button primary onClick={toggleFileModal}>Upload File</Button>
                    <Button primary onClick={toggleFolderModal}>Create Folder</Button>
                </Flex>
                <Input type="text" placeholder="Search for your files" />
                <Button onClick={backClickHandler} padding={5}>
                    <img width={20} src={prevIcon} alt="previous"/>
                </Button>
            </Flex>
        </ToolBarWrapper>
    );
};