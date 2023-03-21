import React, { useState } from "react"
import Flex from "../../../../ui/Flex"
import { Input } from "../../../../ui/Input"
import { PopUpTitle } from "../../ui/PopUpTitle"
import { Button } from "../../../../ui/Button"
import { Modal } from "../../../../ui/Modal"
import { useAppSelector } from "../../../../hooks/useAppSelector"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { toggleFolderPopUp } from "../../store/store"
import { CreateDir } from "../../models/CreateDir"
import { createDir } from "../../store/actions"

export const FolderModal: React.FC = () => {
     const [name, setName] = useState('')

     const { folderPopUpVisibility, currentDir } = useAppSelector(state => state.filesReducer)
     const { id } = useAppSelector(state => state.userReducer.user)

     const dispatch = useAppDispatch()

     const create = () => {
          const dto: CreateDir = {
               name,
               userId: id,
               parentId: currentDir?.id || null,
               type: "dir"
          }
          dispatch(createDir(dto))
          setName('')
          close()
     }

     const close = () => {
          dispatch(toggleFolderPopUp())
     }

     return (
          <Modal isVisible={folderPopUpVisibility}>
               <PopUpTitle>Create New Folder</PopUpTitle>
               <Flex direction="column" gap={10}>
                    <Input type="text" placeholder="Folder name" value={name} onChange={(e) => setName(e.target.value)} />
                    <Flex justify="space-between" gap={10}>
                         <Button width="100%" primary onClick={() => create()}>Create</Button>
                         <Button width="100%" primary onClick={() => close()}>Cancel</Button>
                    </Flex>
               </Flex>
          </Modal>
     )
}