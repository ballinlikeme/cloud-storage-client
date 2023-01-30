import styled from "styled-components";

interface IProps {
    flex: string
}

const Layout = styled.div<IProps>`
  flex: ${props => props.flex};
  
`

export default Layout