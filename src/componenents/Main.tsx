import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import profilePic from "../assets/profile.png";
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
    <>
    <Toggle theme={theme} toggleTheme={toggleTheme} />
    <Container>
      <SideBar>
       <SideBarHeader>
  <SideBarSmallHeading>Hello, I'm</SideBarSmallHeading>
  <SideBarBigHeading>Mayokun Areola.</SideBarBigHeading>
  <SideBarParagraphContainer>
    <SideBarParagraph>
      I'm a <Highlight>full-stack developer</Highlight> and{" "}
      <Highlight>smart contract engineer</Highlight>. I excel at building{" "}
      <Highlight>user-centric applications</Highlight> that are{" "}
      <Highlight>visually appealing</Highlight>, highly functional, and{" "}
      <Highlight>secure</Highlight>. With expertise across the stack, I ensure{" "}
      <Highlight>seamless frontend</Highlight>,{" "}
      <Highlight>backend</Highlight>, and{" "}
      <Highlight>blockchain integrations</Highlight> to deliver{" "}
      <Highlight>top-tier experiences</Highlight>.
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
                src={profilePic}
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
    </>
  );
}
