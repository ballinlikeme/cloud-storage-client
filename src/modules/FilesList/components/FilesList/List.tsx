import React, { useEffect } from "react"
import { sortByType } from "../../helpers/SortByType"
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { getFiles } from "../../store/actions"
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { File } from "../File/File";

export const List: React.FC = () => {

     const { filesToDisplay, currentDir } = useAppSelector(state => state.filesReducer)
     const { id } = useAppSelector(state => state.userReducer.user)
     const dispatch = useAppDispatch()

     useEffect(() => {
          dispatch(getFiles(id, currentDir?.id || null))
     }, [currentDir, id, dispatch])

     return (
          <>
               {sortByType(filesToDisplay).map(file => <File file={file} key={file.id} />)}
          </>
     )
}