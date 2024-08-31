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

export const FeaturedProjects = [
  // {
  //   id: uuid(),
  //   title: "IQ.WIKI",
  //   description:
  //     "IQ.wiki is the world's largest blockchain and cryptocurrency encyclopedia with thousands of wikis on all topics and branches of knowledge in the crypto space.",
  //   isPrivate: false,
  //   liveLink: "https://iq.wiki",
  //   github: "https://github.com/EveripediaNetwork/ep-ui",
  //   stack: "Next.js + Chakra UI + RTK + Wagmi + IPFS",
  // },
  // {
  //   id: uuid(),
  //   title: "IQ GPT",
  //   description:
  //     "IQ GPT is an AI-powered assistant developed by IQ.wiki, the largest blockchain encyclopedia. It focuses on providing real-time and contextually relevant information within the blockchain domain",
  //   isPrivate: true,
  //   liveLink: "https://iqgpt.com",
  //   github: "https://github.com/EveripediaNetwork/iq-search/",
  //   stack: "Next.js + TailwindCSS + Typescript + Langchain",
  // },
  // {
  //   id: uuid(),
  //   title: "IQ.Social",
  //   description:
  //     "IQ.social is a digital platform specializing in cryptocurrency news and market insights, leveraging AI technology to provide up-to-date, comprehensiveanalysis and trends in the crypto world.",
  //   isPrivate: false,
  //   liveLink: "https://iq.social",
  //   github: "https://github.com/EveripediaNetwork/aiq-ui",
  //   stack: "Next.js + Typescript + Wagmi + TailwindCSS",
  // },
];

export const projects = [
  {
    id: uuid(),
    title: "Fast Pizza",
    description:
      "A user-friendly pizza ordering app without logins, featuring a dynamic menu loaded from an API. Users can add pizzas to their cart, order with minimal details, opt for priority, and pay on delivery.",
    isPrivate: false,
    liveLink: "https://fast-pizza-beta.vercel.app/",
    github: "https://github.com/Mayokunnn/fast-pizza",
    stack: "React + TailwindCSS + Redux",
    featured: false,
  },
  {
    id: uuid(),
    title: "Chat Hive API",
    description:
      "A backend application that powers real-time messaging, user authentication, and media sharing for the Chat Hive platform, ensuring secure and scalable communication. ",
    isPrivate: true,
    liveLink: "https://documenter.getpostman.com/view/36619018/2sA3s4nr4n",
    github: "",
    stack: "Laravel + Pusher + JWT + Eloquent",
    featured: false,
  },
  {
    id: uuid(),
    title: "Toodle",
    description:
      "A versatile and user-friendly app designed to help individuals efficiently manage tasks  . With a focus on simplicity and productivity, Toodle empowers users to stay organized, and accomplish their goals seamlessly.",
    isPrivate: false,
    liveLink: "https://toodle-v2.vercel.app/",
    github: "https://github.com/Mayokunnn/toodle-v2",
    stack: "React +  Framer Motion + Typescript + React-hot-toast",
    featured: false,
  },
  {
    id: uuid(),
    title: "Mayokun",
    description:
      "Explore the digital world through the lens of a passionate software developer. Discover my projects, skills, and experiences",
    isPrivate: false,
  liveLink: "",
    github: "https://github.com/Mayokunnn/mayokun.tech",
    stack: "React + Helmet + Styled Components",
    featured: false,
  },
];
