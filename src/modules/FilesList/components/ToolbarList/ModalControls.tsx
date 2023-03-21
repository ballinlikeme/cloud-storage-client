import React from "react"
import Flex from "../../../../ui/Flex"
import { Button } from "../../../../ui/Button"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { toggleFilePopUp, toggleFolderPopUp } from "../../store/store"

export const ModalControls: React.FC = () => {

     const dispatch = useAppDispatch()

     const toggleFolderModal = () => {
          dispatch(toggleFolderPopUp())
     }

     const toggleFileModal = () => {
          dispatch(toggleFilePopUp())
     }

     return (
          <Flex direction="row-reverse" gap={10}>
               <Button primary onClick={toggleFileModal}>Upload File</Button>
               <Button primary onClick={toggleFolderModal}>Create Folder</Button>
          </Flex>
     )
}