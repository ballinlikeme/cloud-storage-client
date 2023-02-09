import styled from "styled-components";
import React from "react";

interface StyledModalProps {
    visible: boolean
}

interface ModalProps extends StyledModalProps {
    children: React.ReactNode | React.ReactNode[] | string
}

const StyledModal = styled.div<StyledModalProps>`
  display: ${props => props.visible ? "block" : "none"};
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 20px;
  background-color: #efefef;
`

const Modal: React.FC<ModalProps> = (props) => {
    return <StyledModal {...props}>{props.children}</StyledModal>
}

export default Modal