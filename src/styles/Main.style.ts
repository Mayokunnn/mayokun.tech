import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100dvh;

  @media only screen and (max-width: 990px) {
    display: none;
  }
`;

export const MainView = styled.div`
  padding: 4rem 6rem 6rem 4rem;
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
  height: 100vh;
  padding: 2.5rem 2.5rem 2rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow-y: scroll;
  border-right: 1px solid ${({ theme }) => theme.btn_border};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SiteId = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 2.5rem;
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.active};

  span.prompt {
    color: ${({ theme }) => theme.accent};
  }
`;

export const SideBarHeader = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 5px;
`;

export const CommentLabel = styled.p`
  margin-bottom: 10px;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.accentText};
`;

export const SideBarSmallHeading = styled.h2`
  font-family: "JetBrains Mono", monospace;
  color: ${({ theme }) => theme.paragraph};

  @media only screen and (min-width: 990px) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export const SideBarBigHeading = styled.h2`
  @media only screen and (min-width: 990px) {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
  }
`;

export const SideBarParagraph = styled.p`
  @media only screen and (min-width: 990px) {
    font-size: 0.85rem;
    color: ${(props) => props.theme.paragraph};
    line-height: 24px;
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

    35% {
      color: ${({ theme }) => theme.accent};
    }

    50% {
      color: #b4b4b4;
    }

    60% {
      color: #777778;
    }

    100% {
      color: ${({ theme }) => theme.highlight};
    }
  }

  font-weight: var(--weight-md);
  color: ${({ theme }) => theme.highlight};

  &.animate {
    animation: 5s ease-in-out 0s 1 flash;
  }
`;

export const SideBarMenu = styled.nav`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  border-top: 1px solid ${({ theme }) => theme.btn_border};
  border-bottom: 1px solid ${({ theme }) => theme.btn_border};
`;

export const SideBarMenuList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export const SideBarMenuItem = styled.li`
  width: 100%;
  display: flex;
`;

export const SideBarMenuLink = styled(NavLink)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 8px 10px;
  margin: 0 -10px;
  font-size: 12.5px;
  line-height: 20px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  color: ${({ $active, theme }) => ($active ? theme.accentText : theme.inactive)};
  text-decoration: none;
  transition: color 150ms ease-out, background-color 150ms ease-out;

  .index {
    color: ${({ $active, theme }) => ($active ? theme.accent : theme.cardStack)};
  }

  .caret {
    margin-left: auto;
    opacity: ${({ $active }) => ($active ? 1 : 0)};
    color: ${({ theme }) => theme.accent};
    transition: opacity 150ms ease-out;
  }

  &:hover,
  &:focus-visible {
    color: ${({ theme }) => theme.accentText};
    background: ${({ theme }) => theme.card};

    .caret {
      opacity: 1;
    }
  }
`;

export const SideBarMenuName = styled.span`
  font-size: 12.5px;
`;

export const SideBarFooter = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const SideBarContact = styled.div`
  display: flex;
  margin-top: 2rem;
  align-items: center;
  gap: 20px;
`;

export const SideBarAvatarContainer = styled.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  padding: 3px;
  border: 1px solid ${({ theme }) => theme.btn_border};
  display: flex;
`;

export const SideBarAvatar = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const SidebarSocials = styled.div`
  align-self: center;
  display: flex;
  gap: 14px;
  font-weight: 400;
  min-width: 0;

  .socials__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    color: ${({ theme }) => theme.inactive};
    text-decoration: none;
    border: 1px solid transparent;
    transition: color 200ms ease-out, border-color 200ms ease-out;

    &:hover,
    &:focus-visible {
      color: ${({ theme }) => theme.accentText};
      border-color: ${({ theme }) => theme.btn_border};
    }

    .text {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
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
          fill: currentColor;
        }
      }

      &--sm {
        display: none;
      }
    }
  }
`;
