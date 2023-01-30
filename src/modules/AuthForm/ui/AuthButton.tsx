import styled, {css} from "styled-components";

interface StyledAuthButtonProps {
    isLoading?: boolean;
}

const AuthButton = styled.button`
  padding: 10px 15px;
  font-size: 14px;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  color: #FFF;
  font-family: var(--application-family);
  font-weight: 500;
  letter-spacing: 0.05em;
  width: 100px;
  cursor: pointer;
  transition: all 500ms ease;
  
  &:hover {
    background-color: #6386ea;
    border: 2px solid #6386ea;
  }
`

// const AuthButton = () => {
//     return <StyledAuthButton></StyledAuthButton>
// }

export default AuthButton