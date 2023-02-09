import styled from "styled-components";

interface PageLockerProps {
    isLocked: boolean;
}

export const PageLocker = styled.div<PageLockerProps>`
  display: ${props => props.isLocked ? "block" : "none"};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
  overflow: hidden;
`