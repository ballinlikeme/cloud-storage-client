import styled from "styled-components";

export const FileWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 30% repeat(4, 15%);
  align-items: center;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;

  padding: 10px 0;

  transition: all 500ms ease;

  &>*:nth-child(3),
  &>*:nth-child(4)
  {
    transition: color 500ms ease;
    &:hover {
      color: var(--accent-color);
    }
  }
  
  &:hover {
    transform: scale(1.05);
    background-color: #eaeaea;
    &>*:nth-child(3),
    &>*:nth-child(4)
    {
      display: block;
    }
  }
`