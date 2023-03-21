import styled from "styled-components";

interface TitleProps {
  start: string | number;
  justify?: string;
}

export const ListTitle = styled.div<TitleProps>`

  font-family: var(--assist-family);
  font-size: 18px;
  color: var(--primary-text);
  display: flex;
  justify-content: ${props => props.justify || "stretch"};
  
  grid-column-start: ${props => props.start};
`