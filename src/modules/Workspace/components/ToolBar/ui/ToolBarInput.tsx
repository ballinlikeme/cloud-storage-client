import styled from "styled-components";

const ToolBarInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-family: inherit;
  padding: 0 10px;
  border: 2px solid #7f7f7f;

  transition: all 500ms ease;
  &:focus {
    border-color: var(--accent-color);
    outline: none;
  }
`

export default ToolBarInput