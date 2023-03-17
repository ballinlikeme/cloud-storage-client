import styled from "styled-components";

export const Input = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  
  width: 100%;

  padding: 10px;

  font-family: inherit;
  font-size: 15px;

  transition: border-color 500ms ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }

  &:invalid {
    border-color: red;
  }
  
  &::placeholder {
    color: #bbb;
    opacity: 1;
  }
`