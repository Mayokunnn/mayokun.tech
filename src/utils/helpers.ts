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
    title: "IQ Oraqles",
    description:
      "IQ OraQles formerly Everipedia OraQles is a service that allows verified first parties to bring real-world information on-chain.",
    isPrivate: false,
    liveLink: "https://oraqles.com/",
    github: "https://github.com/EveripediaNetwork/oraqles-ui/",
    stack: "Next.js + Chakra UI + Wagmi",
  },
  {
    id: uuid(),
    title: "Syncia",
    description:
      "Syncia is a free and open-source browser extension that enables users to chat with ChatGPT (an AI chatbot powered by OpenAI's GPT model) on any website they visit.",
    isPrivate: false,
    liveLink:
      "https://chromewebstore.google.com/detail/syncia-power-of-chatgpt-o/bhdfllifdfodbkihgmahlfmddlmfdjak",
    github: "https://github.com/Royal-lobster/Syncia",
    stack: "Open Source + Typescript + TailwindCSS",
  },
  {
    id: uuid(),
    title: "UniAbuja",
    description:
      "Discover the University of Abuja: Nigerian excellence in education, research, and innovation, at your fingertips.",
    isPrivate: true,
    liveLink: "https://www.uniabuja.edu.ng/",
    github: "",
    stack: "Laravel + SCSS + PHP",
  },
  {
    id: uuid(),
    title: "Space Tourism",
    description:
      "A futuristic and immersive interface for space tourism, featuring stunning graphics, virtual tours, and interactive guides.",
    isPrivate: false,
    liveLink: "https://space-tour.vercel.app",
    github: "https://github.com/Adebesin-Cell/space-tourism",
    stack: "React + SCSS",
  },
  {
    id: uuid(),
    title: "Whatsapp Web UI",
    description:
      "A fresh and modern user interface for seamless messaging and communication, now with enhanced functionality.",
    isPrivate: false,
    liveLink: "https://whatsapp-web-nu.vercel.app",
    github: "https://github.com/Adebesin-Cell/whatsapp-web",
    stack: "React + Firebase + SCSS",
  },
  {
    id: uuid(),
    title: "Lope.dev",
    description:
      "Explore the digital world through the lens of a passionate software developer. Discover my projects, skills, and experiences",
    isPrivate: false,
    liveLink: "https://lope-dev-cell.vercel.app/",
    github: "https://github.com/Adebesin-Cell/lope.dev",
    stack: "React + Helmet + Styled Components",
  },
];