import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-family: 'Be Vietnam Pro', sans-serif;
        min-height: 100vh;
        font-size: 16px;
    }
`;