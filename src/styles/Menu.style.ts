import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    position: relative;
    z-index: 5;
`;

export const MenuIcon = styled.button`
    outline: none;
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    gap: 10px;
    cursor: pointer;

    &.opened {
        min-height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &.opened .line {
        width: 25px !important;
        transition: all 300ms linear !important;
    }

    &.opened .line--large {
        transform: rotate(45deg) translateY(7px) !important;
        position: relative !important;
        top: 1px !important;
        transition: transform 300ms linear !important;
    }

    &.opened .line--small {
        transform: rotate(-45deg) translateY(-7px) !important;
        transition: transform 300ms linear !important;
    }
`;

export const MenuIconLine = styled.span<{islarge?: boolean}>`
    height: 1px;
    width: ${({ islarge }) => (islarge ? "40px" : "25px")};
    background: ${({ theme }) => theme.active};
`;

export const MenuContainer = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.btn_bg};
    animation: fadeIn 300ms linear 1;

    @keyframes fadeIn {
        from {
            transform: translateY(-50px);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media only screen and (max-width: 990px) {
        display: flex;
    }
`;

export const MenuNav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 990px) {
        padding: 120px 40px;
        padding-bottom: 80px;
    }

    @media only screen and (max-width: 768px) {
        padding: 110px 30px;
        padding-bottom: 70px;
    }

    @media only screen and (max-width: 600px) {
        padding: 80px 20px;
        padding-bottom: 60px;
    }
`;

export const MenuNavList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const MenuNavItem = styled.li`
    margin: 15px 0;
    display: flex;
    justify-content: center;
`;

export const MenuNavLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    text-align: center;
    color: ${({ theme }) => theme.workHeading};

    @media only screen and (max-width: 600px) {
        font-size: 18px;
        line-height: 21px;
    }
`;

export const MenuSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenuSocialsHeading = styled.h1`
    margin: 20px 0;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    text-align: center;
    color: ${({ theme }) => theme.active};
    text-transform: capitalize;
`;

export const MenuSocialsList = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;
    margin-left: 7.5px;
    margin-right: 7.5px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${({ theme }) => theme.active};
            
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }

    a span.icon--fill {
        svg {
            fill: ${({ theme }) => theme.active};
        }
    }

    
`;

export const LogoBox = styled.div`
    display: flex;

    a {
        display: inline-block;
        text-decoration: none;
            font-size: 27px;
        font-weight: 700;
        line-height: 30px;
        text-align: left;
        color: ${({ theme }) => theme.text};
    }
`;