import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #f4f4f4;
        color: #333;
        font-size: 9px;

    }

    * {
        box-sizing: border-box;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-top: 0;
        margin-bottom: 15px;
        color: #A0522D;
    }

    p {
        margin-top: 0;
        margin-bottom: 10px;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;