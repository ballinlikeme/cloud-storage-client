import styled from "styled-components"

export const StyledRedirect = styled.div`
    font-size: 12px;
    text-align: center;
    
    a {
        color: var(--accent-color);
        text-decoration: none;

        &::visited {
            color: inherit;
        }
    }
`