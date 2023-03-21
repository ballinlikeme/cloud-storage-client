import styled from "styled-components";

export const ListWrapper = styled.div`
     width: 100%;
     padding: 20px 0;

     &>*:nth-child(even) {
          background-color: var(--assist-color);
     }

     &>*:nth-child(odd) {
          background-color: var(--primary-background);
     }
`