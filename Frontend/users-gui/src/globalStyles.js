import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;   
        margin: 0;
        padding: 0;   
    }

    body{
        background: #1E1E1E;
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: #00000070;
        }

        &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
    }
`

export default GlobalStyle;