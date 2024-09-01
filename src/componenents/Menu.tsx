import { useState } from "react";
import {
  HeaderWrapper,
  LogoBox,
  MenuIcon,
  MenuIconLine,
  MenuContainer,
  MenuNav,
  MenuNavItem,
  MenuNavLink,
  MenuNavList,
  MenuSocials,
  MenuSocialsHeading,
  MenuSocialsList,
} from "../styles/Menu.style";
import { Link } from "react-router-dom";
import { FaAt, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Menu() {
  const [isClosed, setIsClosed] = useState(true);

  const menuToggleHandler = function () {
    setIsClosed(!isClosed);
  };

  const setIsClosedHandler = function () {
    setIsClosed(true);
  };
  return (
    <>
      <HeaderWrapper>
        <LogoBox>
          <Link to="/" onClick={setIsClosedHandler}></Link>
        </LogoBox>
        <MenuIcon
          className={isClosed ? "" : "opened"}
          onClick={menuToggleHandler}
        >
          <MenuIconLine
            islarge={true}
            className="line line--large"
          ></MenuIconLine>
          <MenuIconLine className="line line--small"></MenuIconLine>
        </MenuIcon>
      </HeaderWrapper>
      {!isClosed && (
        <MenuContainer>
          <MenuNav>
            <MenuNavList>
              <MenuNavItem>
                <MenuNavLink to="/" onClick={setIsClosedHandler}>
                  Home
                </MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink to="/work" onClick={setIsClosedHandler}>
                  Work
                </MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink to="/contact" onClick={setIsClosedHandler}>
                  Contact
                </MenuNavLink>
              </MenuNavItem>
              <MenuNavItem>
                <MenuNavLink to="/resume" onClick={setIsClosedHandler}>
                  Résumé
                </MenuNavLink>
              </MenuNavItem>
            </MenuNavList>
            <MenuSocials>
              <MenuSocialsHeading>Connect with me</MenuSocialsHeading>
              <MenuSocialsList>
                <a
                  href="https://github.com/Mayokunnn"
                  className="socials__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon icon--fill">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </span>
                </a>
                <a
                  href="https://twitter.com/MayokunAreola"
                  className="socials__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon icon--fill">{<FaXTwitter />}</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kelvin-mayokun-areola/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon icon--fill">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a
                  href="mailto:kareola960@gmail.com"
                  className="socials__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">{<FaAt />}</span>
                </a>
              </MenuSocialsList>
            </MenuSocials>
          </MenuNav>
        </MenuContainer>
      )}
    </>
  );
}
