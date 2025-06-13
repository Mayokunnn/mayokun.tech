import uuid from "react-uuid";
import { FaXTwitter, FaGithub, FaAt } from "react-icons/fa6";

export const firebaseConfig = {
  apiKey: "AIzaSyDIPG_N0AUepzM3KZ4mG2IU-7Nuc1NOs4s",
  authDomain: "mayokun-areola.firebaseapp.com",
  projectId: "mayokun-areola",
  storageBucket: "mayokun-areola.appspot.com",
  messagingSenderId: "744227965855",
  appId: "1:744227965855:web:16e717449af6cbccd5cbaa",
  measurementId: "G-HZ63N933N2",
};

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

export const projects = [
  {
    id: uuid(),
    title: "Turningways",
    description:
      "TurningWays is an AI-powered digital tool designed to help churches efficiently organize their membership, manage giving, events, and soul-winning all in one place.",
    isPrivate: true,
    liveLink: "https://www.turningways.com/",
    github: "",
    stack: "NextJS + TailwindCSS + Tanstack Query + Shadcn ",
    featured: true,
  },
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
    title: "Waste Routing System",
    description:
      "An interactive web app for visualizing optimized waste collection routes in real time. It simulates bin fill levels and highlights the most efficient paths using intelligent algorithms.",
    isPrivate: false,
    liveLink: "https://wastemanagementproject.vercel.app/",
    github: "https://github.com/Mayokunnn/WasteCollectionRoutingFrontend",
    stack: "React + TypeScript + Chart.js",
    featured: false,
  },
  {
    id: uuid(),
    title: "Waste Routing API",
    description:
      "A FastAPI-powered backend system that generates synthetic bin data, calculates optimal waste collection routes using Dijkstra, A*, and 2-opt algorithms, and serves visual insights for smarter logistics.",
    isPrivate: false,
    liveLink: "https://wastecollectionroutingbackend.onrender.com/",
    github: "https://github.com/Mayokunnn/WasteCollectionRoutingBackend",
    stack: "FastAPI + NetworkX + PostgreSQL + SQLAlchemy",
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
    liveLink: "https://mayokun-areola.vercel.app/",
    github: "https://github.com/Mayokunnn/mayokun.tech",
    stack: "React + Typescript + Helmet + Styled Components",
    featured: false,
  },
];

export const resumeObj = {
  coreTechnologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "PHP",
    "Laravel",
    "Solidity",
    "Ethers.js",
    "Hardhat",
    "Git",
    "GitHub",
  ],

  familiarWith: [
    "React Query",
    "Redux",
    "Styled-Components",
    "Shadcn",
    "Daisy UI",
    "Figma",
    "Firebase",
    "Pusher",
    "Composer",
    "Prisma",
    "CI/CD",
    "Framer Motion",
    "GraphQL",
    "REST API",
    "Vercel",
    "Version Control",
  ],

  education: [
    {
      id: uuid(),
      school: "Covenant University, Ota, Nigeria.",
      startDate: "September 2021",
      endDate: "",
    },
  ],

  hobbies: ["Watching Anime", "Scrabble", "Video Games", "Coding"],

  experience: [
    {
      id: uuid(),
      company: "Investment One Financial Services",
      position: "Backend Developer [Intern]",
      startDate: "March 2024",
      endDate: "September 2024",
      description:
        "Contributed to the development of core backend APIs and services for a banking application, focusing on loan management and customer management.",
      achievements: [
        "Gained foundational and intermediate backend development skills while working on a core banking application.",
        "Collaborated with the team to design and implement robust APIs for managing critical banking features such as loans, funds, and customer data.",
        "Integrated a reporting software into the API, enabling automated generation of detailed financial report statements.",
        "Worked closely with the QA team to test and debug the application, ensuring reliability and performance in a high-stakes environment.",
        "Contributed to the enhancement of backend architecture, improving system efficiency and scalability.",
      ],
    },
    {
      id: uuid(),
      company: "Vantage Point Solutions",
      position: "Frontend Developer",
      startDate: "September 2024",
      endDate: "Present",
      description:
        "Developing TurningWays, an AI-powered digital tool designed to help churches efficiently organize membership, manage giving, events, and soul-winning all in one place using Next.js.",
      achievements: [
        "Led the frontend development of TurningWays, delivering an optimized user interface for church management.",
        "Collaborated with backend developers to ensure seamless integration of membership management, giving, event scheduling, and other features.",
        "Utilized NextJS to create a scalable, efficient, and responsive web application, enhancing user experience and accessibility.",
        "Contributed to the design and implementation of key features for improving church administrative workflows.",
        "Ensured high performance and responsiveness of the application across a wide range of devices and browsers.",
      ],
    },
  ],
};
