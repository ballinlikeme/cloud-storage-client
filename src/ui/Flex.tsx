import styled from "styled-components";
import React from "react";

interface FlexProps {
    justify?: string;
    align?: string;
    gap?: number;
    direction?: string;
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
}

interface IProps extends FlexProps {
    children: React.ReactElement | React.ReactElement[] | string | React.ReactNode | React.ReactNode[]
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "stretch"};
  align-items: ${props => props.align || "stretch"};
  gap: ${props => `${props.gap}px` || "0"};
  width: 100%;
  height: 100%;
  margin-top: ${props => `${props.top}px` || "0"};
  margin-bottom: ${props => `${props.bottom}px` || "0"};
  margin-left: ${props => `${props.left}px` || "0"};
  margin-right: ${props => `${props.right}px` || "0"};
`

const Flex: React.FC<IProps> = (props) => {
    return <StyledFlex {...props}>{props.children}</StyledFlex>
}

export default Flex;