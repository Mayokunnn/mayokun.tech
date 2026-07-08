import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import profilePic from "../assets/profile.png";
import {
  Container,
  Highlight,
  SideBar,
  SiteId,
  CommentLabel,
  SideBarBigHeading,
  SideBarSmallHeading,
  SideBarParagraph,
  SideBarParagraphContainer,
  SideBarMenu,
  SideBarMenuList,
  SideBarMenuItem,
  MainView,
  SideBarMenuLink,
  SideBarMenuName,
  SideBarFooter,
  SideBarContact,
  SideBarAvatarContainer,
  SideBarAvatar,
  SidebarSocials,
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
       <SiteId>
         <span>mayokun.cv</span>
         <span className="prompt cursor">_</span>
       </SiteId>
       <SideBarHeader>
  <SideBarSmallHeading>Hello, I'm</SideBarSmallHeading>
  <SideBarBigHeading>Mayokun Areola.</SideBarBigHeading>
  <SideBarParagraphContainer>
    <CommentLabel>// about</CommentLabel>
    <SideBarParagraph>
      I'm a <Highlight>full-stack developer</Highlight> with a focus on
      frontend craft. I build{" "}
      <Highlight>user-centric, high-performance applications</Highlight>{" "}
      with <Highlight>React, TypeScript, and Next.js</Highlight> — and the
      backend systems that support them. I{" "}
      <Highlight>sweat the details</Highlight> other engineers skip.
    </SideBarParagraph>
  </SideBarParagraphContainer>
</SideBarHeader>
          <SideBarMenu>
            <SideBarMenuList>
              {NavLinks.map((navItem, i) => {
                const isActive =
                  currentPath === navItem.link ||
                  (navItem.link === "/" && currentPath === "/work");
                return (
                  <SideBarMenuItem title={navItem.name} key={navItem.id}>
                    <SideBarMenuLink
                      to={navItem.link}
                      id={navItem.id}
                      $active={isActive}
                    >
                      <span className="index">0{i}</span>
                      <SideBarMenuName>
                        {navItem.name}.{navItem.ext}
                      </SideBarMenuName>
                      <span className="caret">&gt;</span>
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
                    title={contact.name}
                    aria-label={contact.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon icon--lg">
                      <contact.Icon />
                    </span>
                    <span className="text">{contact.name}</span>
                  </a>
                );
              })}
            </SidebarSocials>
          </SideBarContact>
        </SideBarFooter>
      </SideBar>
      <MainView>{children}</MainView>
    </Container>
    </>
  );
}
