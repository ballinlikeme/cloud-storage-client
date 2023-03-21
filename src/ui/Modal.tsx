import styled from "styled-components";

interface CommonProps {
  isVisible: boolean
}

const PageLocker = styled.div<CommonProps>`
  display: ${props => props.isVisible ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  overflow: hidden;
`

const StyledModal = styled.div<CommonProps>`
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

export const Modal: React.FC<React.PropsWithChildren<CommonProps>> = ({ children, isVisible }) => {
  return (
    <PageLocker isVisible={isVisible}>
      <StyledModal isVisible={isVisible}>
        {children}
      </StyledModal>
    </PageLocker>
  )
}