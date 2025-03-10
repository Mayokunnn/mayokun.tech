import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100dvh;
  /* transform: skew(2deg, 0deg); */
  
  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

export const MainView = styled.div`
  padding: 5% 15% 10% 5%;
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 990px) {
    padding-right: 8%;
    display: none;
  }
`;

export const SideBar = styled.div`
  width: 100%;
  margin: 2rem 1rem;
  padding: 0rem 5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;

`;

export const SideBarHeader = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 5px;
`;

export const SideBarSmallHeading = styled.h2`
  @media only screen and (min-width: 990px) {
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export const SideBarBigHeading = styled.h2`
  @media only screen and (min-width: 990px) {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const SideBarParagraph = styled.p`
  @media only screen and (min-width: 990px) {
    font-size: 0.9rem;
    color: ${(props) => props.theme.paragraph};
    line-height: 25px;
  }
`;

export const SideBarParagraphContainer = styled.div`
  @media only screen and (min-width: 990px) {
    text-align: left;
    padding: 1rem 0;
  }
`;

export const Highlight = styled.span`
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

  font-weight: var(--weight-md);
  color: ${({ theme }) => theme.highlight};

  &.animate {
    animation: 5s ease-in-out 0s 1 flash;
  }
`;

export const SideBarMenu = styled.nav`
  margin-top: var(--span-xl);
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const SideBarMenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SideBarMenuItem = styled.li<{ $path: string }>`
  width: fit-content;
  display: flex;

  &:first-child a {
    color: ${({ $path, theme }) =>
      $path === "/" || $path === "/work" ? theme.active : theme.inactive};

    .underline {
      background: ${({ $path, theme }) =>
        $path === "/" || $path === "/work" ? theme.active : theme.inactive};
      width: ${({ $path }) =>
        $path === "/" || $path === "/work" ? "80px" : "40px"};
    }

    &:hover {
      color: ${({ theme }) => theme.active};

      .underline {
        background: ${({ theme }) => theme.active};
        width: 80px;
      }
    }
  }
`;

export const SideBarMenuLink = styled(NavLink)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  line-height: 15px;
  font-weight: 600;
  color: ${({ $active, theme }) => ($active ? theme.active : theme.inactive)};
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  .underline {
    background: ${({ $active, theme }) =>
      $active ? theme.active : theme.inactive};
    width: ${({ $active }) => ($active ? "80px" : "40px")};
  }

  &:hover {
    color: ${({ theme }) => theme.active};

    .underline {
      background: ${({ theme }) => theme.active};
      width: 80px;
    }
  }
`;

export const SideBarMenuLinkUnderline = styled.span`
  height: 1.5px;
  width: 40px;
  transition: all 0.2s ease-in-out;
`;

export const SideBarMenuName = styled.h4`
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SideBarFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const SideBarContact = styled.div`
  display: flex;
  margin-top: 3rem;
  align-items: center;
  gap: 30px;
`;

export const SideBarAvatarContainer = styled.div`
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
`;

export const SideBarAvatar = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const SidebarSocials = styled.div`
  align-self: center;
  display: flex;
  gap: 20px;
  font-weight: 400;

  .socials__link {
    display: flex;
    align-items: center;
    font-size: 1rem;
    line-height: 21px;
    color: ${({ theme }) => theme.active};
    text-decoration: none;
    gap: 8px;

    .text {
      text-transform: capitalize;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      &--no-fill {
        svg {
          fill: none !important;
        }
      }

      &--lg {
        svg {
          width: 16px;
          height: 16px;
          fill: ${({ theme }) => theme.active};
        }
      }

      &--sm {
        svg {
          width: 14px;
          height: 14px;
          stroke-width: 2px;
        }
      }
    }
  }
`;

export const SideBarInspired = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.highlight};
`;

export const SideBarInspiredContainer = styled(SideBarParagraph)`
  font-size: 0.7rem;
  font-weight: 500;
`;
