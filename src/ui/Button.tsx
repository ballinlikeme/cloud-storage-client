import styled, {css} from "styled-components";

interface RegistrationButtonProps {
    primary?: boolean;
    width?: string;
    padding?: number;
}

export const Button = styled.button<RegistrationButtonProps>`
  width: ${props => props.width || "auto"};
  cursor: pointer;

  background-color: var(--assist-color);

  transition: all 500ms ease;

  padding: 10px;

  border-radius: 3px;
  border: 3px solid var(--assist-color);

  font-family: var(--accent-family);
  font-weight: 600;

  color grey;

  &:hover {
    background-color: transparent;
    color: #000;
  }

  a {
    color: inherit;
  }

  ${props => props.primary && css`
    background-color: var(--accent-color);
    border-color var(--accent-color);
    color: #fff;

    a {
      color: inherit;
    }

    &:hover {
      background-color: var(--accent-color-hover);
      border-color: var(--accent-color-hover);
      color: #fff;
    }

    &:active {
      background-color: var(--accent-color);
      border-color: var(--accent-color);
    }

    &:disabled {
      background-color: lightgray;
      border-color: lightgray;
      cursor: unset;
    }
  `}

`