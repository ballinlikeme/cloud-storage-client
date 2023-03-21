import React from "react"
import { SwitchWrapper } from "../../ui/SwitchWrapper"
import { RoundedButton } from "../../ui/RoundedButton"
import list from "../../../../assets/new_icons/list.svg"
import tiles from "../../../../assets/new_icons/tiles.svg"

export const Switch: React.FC = () => {
     return (
          <SwitchWrapper>
               <RoundedButton>
                    <img src={list} alt="list" />
               </RoundedButton>
               <RoundedButton>
                    <img src={tiles} alt="tiles" />
               </RoundedButton>
          </SwitchWrapper>
     )
}