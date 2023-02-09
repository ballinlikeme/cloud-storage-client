import React from 'react';
import styled, {css} from "styled-components";
import {useAppSelector} from "../../../../hooks/useAppSelector";
import {useAppDispatch} from "../../../../hooks/useAppDispatch";
import {changeWindow, clearErrors} from "../../store/store";

interface StyledSwitchProps {
    isLogin: boolean;
}

const StyledSwitch = styled.button<StyledSwitchProps>`
  all: unset;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 500ms ease;
  background-color: #d9d9d9;
  cursor: pointer;
  font-size: 15px;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  z-index: 3;
  
  ${props => props.isLogin && css`
    transform: translate(-50%, -50%) rotate(180deg);
  `}
`

export const RegistrationSwitch = () => {

    const dispatch = useAppDispatch()
    const {isLogin} = useAppSelector(state => state.userReducer)

    const handleChange = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(changeWindow())
        dispatch(clearErrors())
    }

    return (
        <StyledSwitch onClick={handleChange} isLogin={isLogin}>
            {">"}
        </StyledSwitch>
    );
};

