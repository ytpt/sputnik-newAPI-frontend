import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
       box-sizing: border-box;
       font-family: "Arial", sans-serif;
       text-align: center;
    }
    
    html {
        height: 100%;
    }
    
    body {
        background-color: thistle;
    }
    
    ul {
        position: static;
    }
`;

export const Wrapper = styled.div`
    text-align: center;
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 50px;
`

export const ContentStyle = styled.h3`
    height: 160px;
    color: #fff;
    line-height: 160px;
    text-align: center';
`
