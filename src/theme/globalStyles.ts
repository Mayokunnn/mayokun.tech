import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing:border-box;
        letter-spacing:1.1px;
        color: ${({ theme }) => theme.text};

    }
    body {
        background: ${({ theme }) => theme.body};
        transition: all 300ms linear;
        overflow: hidden;
        font-family: "Open Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings: "wdth" 100;
        font-size: 16px;
        font-weight: 500;
        @media only screen and (min-width: 1799px) {
            max-width: 1540px;
            position: relative;
            margin: 0 auto;
            font-size: 24px;

        }
    }

    #root{
        width: 100%;
    }

    
`;
