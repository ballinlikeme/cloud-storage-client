import styled from "styled-components";

const CreateFolderInput = styled.input`
  width: 100%;
  border: 1px solid grey;
  padding: 10px;
  font-size: 15px;
  transition: all 500ms ease;
  font-family: var(--application-family);
  
  &:focus {
    border-color: var(--accent-color)
  }
`

export default CreateFolderInput