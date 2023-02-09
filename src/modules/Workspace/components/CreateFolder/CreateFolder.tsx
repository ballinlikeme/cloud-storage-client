import Modal from "./ui/Modal";
import React, {useState} from "react";
import Flex from "../../../../ui/Flex";
import CreateFolderInput from "./ui/CreateFolderInput";
import Button from "../../ui/Button";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";

const CreateFolder: React.FC = () => {
    const [dirName, setDirName] = useState('')

    // const {popUpVisibility} = useAppSelector(state => state.fileReducer)
    const {id} = useAppSelector(state => state.userReducer.user)
    // const currentDir = useAppSelector(state => state.fileReducer.currentDir)

    const dispatch = useAppDispatch()

    const submit = async () => {
        // await dispatch(createDir(dirName, id, currentDir?.id || null))
        // dispatch(togglePopUpVisibility())
    }

    return (
        // <Modal visible={popUpVisibility}>
            <Flex direction="column" gap={10}>
                <CreateFolderInput value={dirName} onChange={(e) => setDirName(e.target.value)} placeholder="Folder name" />
                <Flex gap={10}>
                    <Button onClick={() => submit()}>Create Folder</Button>
                    {/*<Button onClick={() => dispatch(togglePopUpVisibility())}>Cancel</Button>*/}
                </Flex>
            </Flex>
        // </Modal>
    );
};

export default CreateFolder;