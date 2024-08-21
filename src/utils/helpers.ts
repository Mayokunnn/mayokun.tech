import uuid from "react-uuid";
import { FaXTwitter, FaGithub, FaAt } from "react-icons/fa6";

export const NavLinks = [
  {
    id: uuid(),
    name: "work",
    link: "/",
  },

  {
    id: uuid(),
    name: "resume",
    link: "/resume",
  },

  {
    id: uuid(),
    name: "contact",
    link: "/contact",
  },
];

export const ContactLinks = [
  {
    id: uuid(),
    name: "twitter",
    link: "https://x.com/MayokunAreola",
    Icon: FaXTwitter,
  },
  {
    id: uuid(),
    name: "github",
    link: "https://github.com/Mayokunnn/",
    Icon: FaGithub,
  },
  {
    id: uuid(),
    name: "email",
    link: "mailto:kareola960@gmail.com",
    Icon: FaAt,
  },
];

// const linked = "https://www.linkedin.com/in/kelvin-mayokun-areola/";
