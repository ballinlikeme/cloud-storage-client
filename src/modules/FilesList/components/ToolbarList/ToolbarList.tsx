import React from "react"
import Flex from "../../../../ui/Flex"
import { Filter } from "../Filter/Filter"
import { ModalControls } from "./ModalControls"
import { ReturnButton } from "./ReturnButton"

export const ToolbarList: React.FC = () => {
     return (
          <Flex gap={20} justify="space-between" direction="row">
               <ReturnButton />
               <Filter />
               <ModalControls />
          </Flex>
     )
}