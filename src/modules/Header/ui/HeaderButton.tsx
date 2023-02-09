import styled from "styled-components";

export const HeaderButton = styled.button`
  all: unset;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  height: fit-content;
  border: 2px solid #fff;
  
  transition: all 300ms ease;

  &:hover {
    background-color: #ffffff;
    color: var(--accent-color);
  }
`