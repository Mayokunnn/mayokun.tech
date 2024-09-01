import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
`;

export const HomeView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;

  @media only screen and (max-width: 600px) {
    width: 64px;
    height: 64px;
  }
`;

export const Heading = styled.h1`
  margin-top: 20px;
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  text-align: left;
  color: ${({ theme }) => theme.active};
  text-align: center;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 27px;
  }

  span {
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;

    @media only screen and (max-width: 600px) {
      font-size: 12px;
      line-height: 16px;
    }
  }
`;

export const Paragraph = styled.p`
  padding-top: 10px;
  color: ${({ theme }) => theme.paragraph};
  font-size: 14px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;

  @media only screen and (max-width: 990px) {
    padding-right: 80px;
    padding-left: 80px;
  }

  @media only screen and (max-width: 600px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const ParagraphHighlight = styled.span`
  @keyframes flash {
    0% {
      color: #777778;
    }

    20% {
      color: #cecece;
    }

    30% {
      color: #ffffff;
    }

    40% {
      color: #b4b4b4;
    }

    45% {
      color: #777778;
    }

    100% {
      color: #fff;
    }
  }

  animation: 5s ease-in-out 0s 1 flash;
  font-weight: 500;
  color: ${({ theme }) => theme.highlight};
`;

export const MenuLink = styled(Link)`
  margin-top: 30px;
  text-decoration: none;

  & button {
    display: flex;
    padding: calc(10px + 5px) 30px;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.active};
    background: ${({ theme }) => theme.btn_bg};
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    border: 1px solid transparent;
    outline: none;

    &:hover,
    &:focus {
      border: 1px solid ${({ theme }) => theme.btn_border};
      background: ${({ theme }) => theme.btn_bg};
    }
  }

  span.icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const Button = styled.button`
  filter: ${({ theme }) => theme.shadow};
`;
