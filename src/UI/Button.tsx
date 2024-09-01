import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ThemeButton = styled(Button)`
  background: ${({ theme }) => theme.btn_bg};
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
  z-index: 9;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: all 300ms;
  color: ${({ theme }) => theme.text};

  @media only screen and (max-width: 990px) {
    bottom: 20px;
    top: initial;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const FormButton = styled(Button)`
    width: 100%;
    background: ${({ theme }) => theme.formButtonBg};
    height: 55px;
    font-size: 24px;
    font-weight: 300;
    line-height: 23px;
    text-align: center;
    color: ${({ theme }) => theme.formButtonTxt};
`;


export const MenuButtonContainer = styled.div`
    display: none;
    justify-content: center;
    margin: 60px 0px 50px 0px;
    /* width: 100%; */
    @media only screen and (max-width: 990px) {
        display: flex;
    }
`;

export const MenuButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }

    a {
        text-decoration: none;
        display: flex;
        padding: 12px 0px;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.active};
        background: ${({ theme }) => theme.btn_bg};
            font-size: 12px;
        font-weight: 300;
        line-height: 18px;
        border: 1px solid transparent;
        transition: all 300ms;
        outline: none;

        &:hover, &:focus {
            border: 1px solid ${({ theme }) => theme.btn_border};
            background: ${({ theme }) => theme.btn_bg};
        }
    }
`;

export const MenuLink = styled(Link)`
    filter: ${({ theme }) => theme.shadow};
`;