import styled from "styled-components";

const AuthInput = styled.input`
  padding: 15px 20px;
  border: none;
  border-bottom: 1px solid #d9d9d9;
  
  font-family: var(--application-family);
  font-weight: 300;
  
  font-size: 16px;
  
  width: 100%;
  
  &::placeholder {
    font-family: inherit;
  }
  
  &:focus {
    outline: none
  }
`

// @ts-ignore
export default AuthInput