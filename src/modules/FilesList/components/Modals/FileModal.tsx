import React, { useState, useRef } from "react"
import { Modal } from "../../../../ui/Modal"
import { Button } from "../../../../ui/Button"
import { Input } from "../../../../ui/Input"
import { PopUpTitle } from "../../ui/PopUpTitle"
import Flex from "../../../../ui/Flex"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useAppSelector } from "../../../../hooks/useAppSelector"
import { toggleFilePopUp } from "../../store/store"
import { uploadFile } from "../../store/actions";

export const FileModal: React.FC = () => {

     const [name, setName] = useState('')
     const [file, setFile] = useState<File>()

     const inputRef = useRef<HTMLInputElement>(null)

     const dispatch = useAppDispatch()

     const { filePopUpVisibility, currentDir } = useAppSelector(state => state.filesReducer)
     const { id } = useAppSelector(state => state.userReducer.user)

     const upload = () => {
          if (file && name) {
               const dto = {
                    name,
                    file,
                    parentId: currentDir ? String(currentDir.id) : "",
                    userId: String(id),
               }
               dispatch(uploadFile(dto))
               inputRef.current!.value = ''
               setName('')
               dispatch(toggleFilePopUp())
          }
     }

     const uploadViaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files) setFile(e.target.files[0])
     }

     const close = () => {
          dispatch(toggleFilePopUp())
     }

     return (
          <Modal isVisible={filePopUpVisibility}>
               <PopUpTitle>Upload New File</PopUpTitle>
               <Flex direction="column" gap={10}>
                    <Input value={name} type="text" placeholder="File name" onChange={(e) => setName(e.target.value)} />
                    <Input type="file" onChange={uploadViaInput} ref={inputRef} />
                    <Flex gap={10}>
                         <Button onClick={upload} primary width="100%">Upload</Button>
                         <Button onClick={close} primary width="100%">Cancel</Button>
                    </Flex>
               </Flex>
          </Modal>
     )
}