import { createGlobalStyle, styled } from "styled-components";


export const GlobalStyles = createGlobalStyle`

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #202024;
        color: white;
    }
` 

export const Container = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;


`