import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import {Modal} from "../../../../ui/Modal";
import {PageLocker} from "../../../../ui/PageLocker";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {toggleFilePopUp} from "../../store/store";
import {PopUpTitle} from "../../ui/PopUpTitle";
import Flex from "../../../../ui/Flex";
import {Input} from "../../../../ui/Input";
import {Button} from "../../../../ui/Button";
import {uploadFile} from "../../store/actions";
import {UploadFile} from "../../models/UploadFile";

export const UploadFilePopUp = () => {
    const [name, setName] = useState('')
    const [file, setFile] = useState<File>()

    const inputRef = useRef<HTMLInputElement>(null)

    const {filePopUpVisibility, currentDir} = useAppSelector(state => state.filesReducer)
    const {id} = useAppSelector(state => state.userReducer.user)

    const dispatch = useAppDispatch()

    const closeModal = () => {
        dispatch(toggleFilePopUp())
    }

    const handleUploadClick = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0])
        }
    }

    const handleUpload = () => {
        if (file && name) {
            const dto = {
                name,
                file,
                parentId: currentDir ? String(currentDir.id) : "",
                userId: String(id),
            }
            console.log('dto handle', dto)
            dispatch(uploadFile(dto))
        }
        inputRef.current!.value = ''
        setName('')
        dispatch(toggleFilePopUp())
    }


    return (
        <>
            <PageLocker isLocked={filePopUpVisibility} />
            <Modal isVisible={filePopUpVisibility}>
                <PopUpTitle>Upload New File</PopUpTitle>
                <Flex direction="column" gap={10}>
                    <Input type="text" placeholder="File name" onChange={(e) => setName(e.target.value)}/>
                    <Input type="file" onChange={handleUploadClick} ref={inputRef} />
                    <Flex gap={10}>
                        <Button onClick={handleUpload} primary width="100%">Upload</Button>
                        <Button onClick={closeModal} primary width="100%">Cancel</Button>
                    </Flex>
                </Flex>
            </Modal>
        </>
    );
};