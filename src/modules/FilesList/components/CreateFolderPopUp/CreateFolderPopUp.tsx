import React, {useState} from 'react';
import {Modal} from "../../../../ui/Modal";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {Input} from "../../../../ui/Input";
import {PageLocker} from "../../../../ui/PageLocker";
import Flex from "../../../../ui/Flex";
import {Button} from "../../../../ui/Button";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {toggleFolderPopUp} from "../../store/store";
import {createDir} from "../../store/actions";
import {CreateDir} from "../../models/CreateDir";
import {PopUpTitle} from "../../ui/PopUpTitle";

export const CreateFolderPopUp = () => {
    const [name, setName] = useState('')

    const {folderPopUpVisibility, currentDir} = useAppSelector(state => state.filesReducer)
    const {id} = useAppSelector(state => state.userReducer.user)
    const dispatch = useAppDispatch()

    const closePopUp = () => {
        dispatch(toggleFolderPopUp())
    }

    const createDirectory = () => {

        const dto: CreateDir = {
            name,
            userId: id,
            parentId: currentDir?.id || null,
            type: "dir"
        }
        dispatch(createDir(dto))
        setName('')
        closePopUp()
    }

    return (
        <>
            <PageLocker isLocked={folderPopUpVisibility} />
            <Modal isVisible={folderPopUpVisibility}>
                <PopUpTitle>Create New Folder</PopUpTitle>
                <Flex direction="column" gap={10}>
                    <Input type="text" placeholder="Folder name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Flex justify="space-between" gap={10}>
                        <Button width="100%" primary onClick={() => createDirectory()}>Create</Button>
                        <Button width="100%" primary onClick={() => closePopUp()}>Cancel</Button>
                    </Flex>
                </Flex>
            </Modal>
        </>
    );
};