import styled from "styled-components";

interface FilePropertyProps {
    start?: number
}

export const FileProperty = styled.span<FilePropertyProps>`
  color: #B0B0B0;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  grid-column-start: ${props => props.start || "initial"};
  justify-self: center;
  &:nth-child(3), &:nth-child(4) {
    display: none;
  }
`