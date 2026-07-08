import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ErrorPrompt = styled.p`
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.cardStack};

    span.accent {
        color: ${({ theme }) => theme.accent};
    }

    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const ErrorHeading = styled.h1`
    margin-top: 14px;
    font-size: 96px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    color: ${({ theme }) => theme.active};

    @media only screen and (max-width: 600px) {
        font-size: 56px;
    }
`;

export const ErrorParagraph = styled.p`
    padding-top: 15px;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    line-height: 23px;
    text-align: center;
    color: ${({ theme }) => theme.paragraph};

    @media only screen and (max-width: 600px) {
        padding-top: 10px;
        font-size:12px;
        line-height: 20px;
    }
`;

export const ErrorLink = styled(Link)`
    margin-top: 30px;
    text-decoration: none;
    display: flex;
    padding: 12px 28px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text};
    background: transparent;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    border: 1px solid ${({ theme }) => theme.btn_border};
    transition: border-color 300ms, color 300ms, background 300ms;

    &::before {
        content: "$ cd";
        margin-right: 6px;
        color: ${({ theme }) => theme.accent};
    }

    &:hover, &:focus-visible {
        border-color: ${({ theme }) => theme.accent};
        background: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.accentInk};

        &::before {
            color: ${({ theme }) => theme.accentInk};
        }
    }
`;
