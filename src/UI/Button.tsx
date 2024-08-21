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
