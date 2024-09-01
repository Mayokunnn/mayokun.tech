import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import {
  Container,
  Highlight,
  SideBar,
  SideBarBigHeading,
  SideBarSmallHeading,
  SideBarParagraph,
  SideBarParagraphContainer,
  SideBarMenu,
  SideBarMenuList,
  SideBarMenuItem,
  MainView,
  SideBarMenuLink,
  SideBarMenuLinkUnderline,
  SideBarMenuName,
  SideBarFooter,
  SideBarContact,
  SideBarAvatarContainer,
  SideBarAvatar,
  SidebarSocials,
  SideBarInspired,
  SideBarInspiredContainer,
  SideBarHeader,
} from "../styles/Main.style";
import Toggle from "./Toggle";
import { ContactLinks, NavLinks } from "../utils/helpers";

interface Props {
  children: ReactNode;
  theme: string;
  toggleTheme: (() => void);
}

export default function Main({ children, theme, toggleTheme }: Props) {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Container>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <SideBar>
        <SideBarHeader>
          <SideBarSmallHeading>Hello, I'm</SideBarSmallHeading>
          <SideBarBigHeading>Mayokun Areola.</SideBarBigHeading>
          <SideBarParagraphContainer>
            <SideBarParagraph>
              I'm a <Highlight>results-driven</Highlight> Full-stack developer with{" "}
              <Highlight>experience</Highlight> in frontend development and in
              backend development. My <Highlight>expertise</Highlight> includes{" "}
              <Highlight>
                HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Next.js,
                PHP, Laravel.
              </Highlight>
              , responsive design, and design systems. I am committed to{" "}
              <Highlight>creating and optimizing</Highlight> user-friendly web
              solutions and interactions, <Highlight>helping</Highlight>{" "}
              organizations achieve their goals <Highlight>effectively</Highlight>.
            </SideBarParagraph>
          </SideBarParagraphContainer>
        </SideBarHeader>
          <SideBarMenu>
            <SideBarMenuList>
              {NavLinks.map((navItem, i) => {
                return (
                  <SideBarMenuItem
                    title={navItem.name}
                    key={navItem.id}
                    $path={currentPath}
                  >
                    <SideBarMenuLink
                      to={navItem.link}
                      id={navItem.id}
                      $active={currentPath === navItem.link}
                    >
                      <span>0{i}</span>
                      <SideBarMenuLinkUnderline className="underline" />
                      <SideBarMenuName>{navItem.name}</SideBarMenuName>
                    </SideBarMenuLink>
                  </SideBarMenuItem>
                );
              })}
            </SideBarMenuList>
          </SideBarMenu>
        <SideBarFooter>
          <SideBarContact>
            <SideBarAvatarContainer>
              <SideBarAvatar
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Mayokun Areola"
              />
            </SideBarAvatarContainer>
            <SidebarSocials>
              {ContactLinks.map((contact, i) => {
                return (
                  <a
                    id={`${i}`}
                    key={contact.id}
                    href={contact.link}
                    className="socials__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon icon--lg">
                      <contact.Icon />
                    </span>
                    <span className="text">{contact.name}</span>
                    <span className="icon icon--sm">
                      <FaExternalLinkAlt />
                    </span>
                  </a>
                );
              })}
            </SidebarSocials>
          </SideBarContact>
          <SideBarInspiredContainer>
            Inspired by{" "}
            <SideBarInspired
              href="https://lope.cell.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lope Adebesin
            </SideBarInspired>
          </SideBarInspiredContainer>
        </SideBarFooter>
      </SideBar>
      <MainView>{children}</MainView>
    </Container>
  );
}
