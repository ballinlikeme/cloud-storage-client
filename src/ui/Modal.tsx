import styled from "styled-components";

interface ModalProps {
    isVisible: boolean
}

export const Modal = styled.div<ModalProps>`
  visibility: ${props => props.isVisible ? "visible" : "hidden"};
  padding: 20px;
  background-color: #FFF;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(${props => props.isVisible ? "-50%, -50%" : "-50%"});
  width: 300px;
  overflow: hidden; 
  transition: all 300ms ease;
`