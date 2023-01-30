import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  color: #fff;
  border: 2px solid var(--accent-color);
  font-size: 16px;
  font-family: var(--application-family);
  background-color: var(--accent-color);
  cursor: pointer;
  transition: all 500ms ease;

  &:hover {
    background-color: #5577e2;
    border-color: #5577e2;
  }

`

export default Button