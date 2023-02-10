import React, { useState, useEffect } from "react"
import { Input } from "../../../../ui/Input"
import { useAppSelector } from "../../../../hooks/useAppSelector"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { setFilesToDisplay } from "../../store/store"

export const Filter = () => {
     const [filter, setFilter] = useState('')
     const { files } = useAppSelector(state => state.filesReducer)
     const dispatch = useAppDispatch()

     useEffect(() => {
          const newFiles = files.filter(file => file.name.includes(filter))
          dispatch(setFilesToDisplay(newFiles))
     }, [filter, files, dispatch])

     return (
          <Input
               onChange={(e) => setFilter(e.target.value)}
               value={filter}
               type="text"
               placeholder="Search for your files"
          />
     )
}