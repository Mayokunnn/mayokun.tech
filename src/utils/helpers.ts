import uuid from "react-uuid";
import { FaLinkedin, FaGithub, FaAt } from "react-icons/fa6";

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
    name: "linkedIn",
    link: "https://www.linkedin.com/in/kelvin-mayokun-areola",
    Icon: FaLinkedin,
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
  title: "Resply",
  description:
    "A reusable API response toolkit designed to standardize success, error responses across backend services. Resply enforces consistent response shapes, improves error traceability, and simplifies frontend integration by providing predictable API contracts for backend applications.",
  isPrivate: false,
  liveLink: "https://www.npmjs.com/package/resply",
  github: "https://github.com/Mayokunnn/resply",
  stack: "Node.js + TypeScript",
  featured: false,
},
{
  id: uuid(),
  title: "Ticketer Africa",
  description:
    "An event management platform where users can buy, resell, and manage tickets. The backend handles wallet funding, payment verification, ticket transactions, and payout flows. Built to support scalable and secure event experiences.",
  isPrivate: true,
  liveLink: "https://www.ticketer.africa",
  github: "",
  stack: "NestJS + Prisma + PostgreSQL + Redis + Docker",
  featured: true,
},
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
    title: "Vision Forge (Backend)",
    description:
      "An AI-powered chatbot that supports text and image inputs, using Google Gemini to generate responses. Built with a Node.js backend, Prisma, and PostgreSQL, handling authentication, API requests, and reliable AI integration.",
    isPrivate: false,
    liveLink: "",
    github: "https://github.com/Mayokunnn/visionforge",
    stack: "Node.js + TypeScript + Prisma + PostgreSQL",
    featured: false,
  },
   {
    id: uuid(),
    title: "UniVote",
    description:
      "A decentralized voting platform that enables transparent, secure, and tamper-proof elections using smart contracts. The frontend provides an intuitive interface for voters, admins, and election creators.",
    isPrivate: false,
    liveLink: "https://univote-edu.vercel.app/",
    github: "https://github.com/Mayokunnn/univote-app",
    stack: "ReactJS + TailwindCSS + Ethers.js",
    featured: false,
  },
  {
    id: uuid(),
    title: "UniVote API",
    description:
      "A Node.js and Express backend for UniVote, supporting signature-based transaction verification and election management. Integrates with Solidity smart contracts for decentralized logic.",
    isPrivate: false,
    liveLink: "https://univote-eta.vercel.app/",
    github: "https://github.com/Mayokunnn/univote",
    stack: "Node.js + Solidity + Sequelize + PostgreSQL + Hardhat",
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
    "JavaScript",
    "TypeScript",
    "Python",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Knex.js",
    "Chakra UI and Similar Components",
    "PostgreSQL",
    "MySQL",
    "PHP",
    "Laravel",
    "Solidity",
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
    "Ethers.js",
    "Hardhat",
    "Git",
    "GitHub",
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
      endDate: "August 2025",
    },
  ],

  hobbies: ["Watching Anime", "Scrabble", "Video Games", "Coding"],

  experience: [
  {
    id: uuid(),
    company: "Ticketer Africa",
    position: "Full Stack Engineer",
    startDate: "May 2025",
    endDate: "Present",
    description:
      "Led the development of Ticketer, an event ticketing and management platform supporting wallet systems, ticket reselling, payment verification, and user management across backend and frontend systems.",
    achievements: [
      "Designed and implemented the core backend architecture using NestJS, Knex.js, PostgreSQL, Redis, and Docker to support high volume ticketing and payment workflows.",
      "Built secure wallet systems including funding, withdrawals, commission splits, and payout logic for users, organizers, and the platform.",
      "Implemented payment verification, transaction tracking, and resell workflows enabling a reliable peer to peer ticket marketplace.",
      "Developed and maintained frontend flows for wallet funding, ticket purchases, and reselling with a strong focus on transactional reliability and user feedback.",
      "Defined clean API contracts and maintained consistent response structures to enable seamless frontend integration and reduce integration bugs.",
      "Handled end to end ownership including performance optimization, error handling, and production stability across backend and frontend."
    ],
  },
  {
    id: uuid(),
    company: "Vantage Point Solutions",
    position: "Frontend Engineerer",
    startDate: "September 2024",
    endDate: "March 2025",
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
  ],
};
