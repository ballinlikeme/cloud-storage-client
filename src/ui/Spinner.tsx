import styled, {keyframes} from "styled-components";
import Flex from "./Flex";

const loaderAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    
    100% {
      transform: rotate(360deg);
    }
  
`

const StyledLoader = styled.div`
  width: 120px;
  height: 120px;
  
  border: 16px solid #fff;
  border-top-color: var(--accent-color);
  border-radius: 50%;
  
  animation: ${loaderAnimation} 2s linear infinite;
`

const Spinner = () => {
    return (
        <Flex justify="center" align="center">
            <StyledLoader />
        </Flex>
    )
}

export default Spinner