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

export const ErrorHeading = styled.h1`
    font-size: 120px;
    font-weight: 600;
    font-style: italic;
    line-height: 96px;
    text-align: center;
    color: ${({ theme }) => theme.active};

    @media only screen and (max-width: 600px) {
        font-size: 72px;
        line-height: 60px;
    }
`;

export const ErrorParagraph = styled.p`
    padding-top: 15px;
    font-size: 18px;
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
    width: 15%;
    margin-top: 30px;
    text-decoration: none;
    display: flex;
    padding: 12px 20px;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.active};
    background: ${({ theme }) => theme.btn_bg};
    font-size: 11px;
    font-weight:300px;
    line-height: 18px;
    border: 1px solid transparent;
    transition: border 300ms;
    outline: none;
    filter: ${({ theme }) => theme.shadow};

    &:hover, &:focus {
        border: 1px solid ${({ theme }) => theme.btn_border};
        background: ${({ theme }) => theme.btn_bg};
    }

    @media only screen and (max-width: 768px) {
        width: 20%;
    }

    @media only screen and (max-width: 600px) {
        width: 45%;
    }
`;
