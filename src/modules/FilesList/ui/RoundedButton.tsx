import styled from "styled-components";

export const RoundedButton = styled.button`
     all: unset;

     width: 40px;
     height: 40px;

     background-color: var(--assist-color);

     display: flex;
     justify-content: center;
     align-items: center;

     border-radius: 50%;
     cursor: pointer;

     img {
          max-width: 20px;
     }

     &.active {
          background-color: var(--accent-color);
     }
`