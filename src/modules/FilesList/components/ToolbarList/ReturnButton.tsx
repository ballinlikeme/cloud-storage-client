import React from "react"
import { Button } from "../../../../ui/Button"
import { useAppDispatch } from "../../../../hooks/useAppDispatch"
import { useAppSelector } from "../../../../hooks/useAppSelector"
import { deleteFromStack, setCurrentDir } from "../../store/store"
import prevIcon from "../../../../assets/previous.svg"


export const ReturnButton: React.FC = () => {

     const dispatch = useAppDispatch()
     const { dirStack } = useAppSelector(state => state.filesReducer)

     const backClickHandler = () => {
          const lastFolder = dirStack[dirStack.length - 1]
          dispatch(deleteFromStack())
          dispatch(setCurrentDir(lastFolder || null))
     }

     return (
          <Button onClick={backClickHandler} padding={5}>
               <img width={20} src={prevIcon} alt="previous" />
          </Button>
     )
}