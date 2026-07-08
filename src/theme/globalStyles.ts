import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:border-box;
        color: ${({ theme }) => theme.text};
    }

    *:focus-visible {
        outline: 2px solid ${({ theme }) => theme.focusRing};
        outline-offset: 3px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Syne", "JetBrains Mono", monospace;
        font-weight: 700;
        letter-spacing: -0.02em;
        text-wrap: balance;
    }

    body {
        background: ${({ theme }) => theme.body};
        transition: background 300ms linear, color 300ms linear;
        overflow: hidden;
        font-family: "JetBrains Mono", monospace;
        font-optical-sizing: auto;
        font-style: normal;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.6;
        @media only screen and (min-width: 1799px) {
            max-width: 1540px;
            position: relative;
            margin: 0 auto;
            font-size: 20px;

        }
    }

    #root{
        width: 100%;
    }

    @keyframes blink {
        0%, 45% {
            opacity: 1;
        }
        50%, 95% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .cursor {
        display: inline-block;
        animation: blink 1.1s step-end infinite;
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
