import styled, {css} from "styled-components";

interface RegistrationButtonProps {
    primary?: boolean;
    width?: string;
    padding?: number;
}

export const Button = styled.button<RegistrationButtonProps>`
  width: ${props => props.width || "auto"};
  cursor: pointer;

  background-color: transparent;

  transition: all 500ms ease;

  padding: 10px;

  border-radius: 3px;
  border: 3px solid var(--accent-color);

  font-family: var(--accent-family);
  font-weight: 600;

  &:hover {
    background-color: #d2eae4;
  }

  ${props => props.primary && css`
    background-color: var(--accent-color);
    color: #fff;

    &:hover {
      background-color: #a9e8dd;
      border-color: #a9e8dd;
    }

    &:disabled {
      background-color: lightgray;
      border-color: lightgray;
      cursor: unset;
    }
  `}

`