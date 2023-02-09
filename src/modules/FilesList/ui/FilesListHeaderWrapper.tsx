import styled from "styled-components";

export const FilesListHeaderWrapper = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 10% 30% repeat(4, 15%);
  
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 10px;
  
  &>*:first-child {
    grid-column-start: 2;
  }

  &>*:nth-child(2) {
    grid-column-start: 5;
    justify-self: center;
  }

  &>*:nth-child(3) {
    grid-column-start: 6;
    justify-self: center;
  }
`