import React from "react"
import { FileProperty } from "../../ui/File/FileProperty"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { removeFile } from "../../store/actions"

interface FileProps {
     id: number;
}

export const FileDelete: React.FC<FileProps> = ({ id }) => {

     const dispatch = useAppDispatch()

     const handleFileRemove = (event: React.MouseEvent) => {
          event.stopPropagation()
          dispatch(removeFile(id))
     }

     return <FileProperty onClick={handleFileRemove}>DELETE</FileProperty>
}