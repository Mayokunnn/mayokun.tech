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
    ext: "tsx",
    link: "/",
  },

  {
    id: uuid(),
    name: "resume",
    ext: "pdf",
    link: "/resume",
  },

  {
    id: uuid(),
    name: "activity",
    ext: "log",
    link: "/activity",
  },

  {
    id: uuid(),
    name: "contact",
    ext: "sh",
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

export const aboutCopy =
  "I'm a full-stack engineer who builds reliable product experiences across fintech, payments, commerce, event ticketing, automation, and AI-enabled products. I move comfortably from React and TypeScript interfaces to APIs, databases, authentication, and the production edge cases that make systems dependable.";

export const currentWork = [
  {
    id: uuid(),
    title: "Bachs",
    role: "Lead Engineer",
    description:
      "Payments and billing infrastructure for internet businesses selling globally, covering checkout, subscriptions, payouts, settlement, KYB, and developer tools.",
    stack: "React + TypeScript + Vite + TanStack Query",
    url: "https://bachs.io",
  },
  {
    id: uuid(),
    title: "Syncgram",
    role: "Software Engineer",
    description:
      "Subscription and product infrastructure for paid communities, with authenticated APIs, Telegram workflows, payment events, and automated access management.",
    stack: "Node.js + REST APIs + PostgreSQL + Webhooks",
    url: "https://sync-gram.com",
  },
  {
    id: uuid(),
    title: "KomKom",
    role: "Software Engineer",
    description:
      "Cross-border wallet product work spanning financial workflows, API-connected experiences, authentication, transactional flows, and dependable delivery.",
    stack: "Backend systems + APIs + Financial workflows",
    url: "https://komkomwallet.com",
  },
];

export const projects = [
  {
  id: uuid(),
  title: "Resply",
  description:
    "A reusable API response toolkit for standardizing success and error responses across backend services. Resply improves error traceability and makes frontend integration more predictable.",
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
    "An event-ticketing platform where users buy, resell, and manage tickets. Built across authentication, wallets, payment verification, ticket transactions, event operations, and payout flows.",
  isPrivate: true,
  liveLink: "https://www.ticketer.africa",
  github: "",
  stack: "NestJS + Prisma + PostgreSQL + Redis + Docker",
  featured: true,
},
  {
    id: uuid(),
    title: "TurningWays",
    description:
      "A church-management application for membership, giving, event scheduling, forms, dashboards, and progress tracking, built with React, Next.js, and TypeScript.",
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
      "A focused task-management app designed to help people stay organized and move work forward with less friction.",
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
      "The portfolio behind this site - a small React and TypeScript system for presenting work, experience, and engineering activity.",
    isPrivate: false,
    liveLink: "https://mayokun-areola.vercel.app/",
    github: "https://github.com/Mayokunnn/mayokun.tech",
    stack: "React + Typescript + Helmet + Styled Components",
    featured: false,
  },
];

export const resumeObj = {
  coreTechnologies: [
    "TypeScript",
    "JavaScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "Prisma",
    "REST APIs",
    "Authentication",
  ],

  familiarWith: [
    "React Router",
    "TanStack Query",
    "Zustand",
    "React Hook Form",
    "Zod",
    "Tailwind CSS",
    "Recharts",
    "Redis",
    "Docker",
    "JWT and cookies",
    "RBAC and 2FA flows",
    "Sentry and PostHog",
    "Paystack",
    "Kora Payments API",
    "Git and GitHub",
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
      company: "Bachs",
      position: "Lead Engineer - Payments & Billing Platform",
      startDate: "2026",
      endDate: "Present",
      description:
        "Lead product engineering for a payments and billing platform built for internet businesses selling globally.",
      achievements: [
        "Build and evolve merchant dashboards for balances, payments, payouts, refunds, customers, products, billing, developer tools, connected accounts, onboarding, and compliance.",
        "Deliver global checkout, subscription billing, usage billing, tax/VAT, and settlement to African bank accounts.",
        "Implement Connect capabilities including connected-account creation, capability-aware onboarding, account links, analytics, transfers, and nested resource management.",
        "Build KYB and compliance workflows with identity requirements, TIN/CAC lookups, eKYB polling, document uploads, and review states.",
        "Improve authentication recovery, withdrawals, auto-payouts, refunds, webhooks, transaction visibility, and sensitive-value masking.",
      ],
    },
    {
      id: uuid(),
      company: "Syncgram",
      position: "Software Engineer - Backend & Product Systems",
      startDate: "2026",
      endDate: "Present",
      description:
        "Developed and supported a subscription and product platform with authenticated APIs, Telegram workflows, and payment-driven access management.",
      achievements: [
        "Built REST endpoints for businesses, products, analytics, settings, notifications, team management, and mini-app experiences.",
        "Operated Telegram bot workflows for membership status, support commands, customer registration, subscription lifecycle messaging, and plan retrieval.",
        "Integrated payment events, product activation, subscription expiry reminders, and external email delivery.",
        "Improved reliability through JWT authentication, rate limiting, structured logging, and database-backed workflows.",
      ],
    },
    {
      id: uuid(),
      company: "Ticketer Africa",
      position: "Full-Stack Engineer",
      startDate: "May 2025",
      endDate: "Present",
      description:
        "Built production features across authentication, dashboards, wallet funding, ticket purchases, ticket resale, event operations, and administration for an event-ticketing platform.",
      achievements: [
        "Implemented frontend and server-side flows with Next.js, React, TypeScript, route handlers, middleware, TanStack Query, and typed API contracts.",
        "Contributed to Node.js, Express, and Prisma backend logic, relational data access, session validation, and payment flows.",
        "Integrated Paystack for wallet funding and ticket purchases while handling gateway inconsistencies, degraded networks, fallback states, and structured errors.",
      ],
    },
    {
      id: uuid(),
      company: "Black Financial Consulting Group",
      position: "Operations Engineer - KomKom Wallet",
      startDate: "Mar 2026",
      endDate: "Aug 2026",
      description:
        "Supported day-to-day operations for KomKom Wallet, helping keep financial-product workflows, API-connected services, and user-facing systems reliable.",
      achievements: [
        "Investigated operational issues across authentication, transactional flows, data handling, integrations, and production delivery, coordinating fixes and follow-through.",
        "Worked across engineering and product workflows to improve service reliability, resolve defects, and connect operational feedback to product iteration.",
      ],
    },
    {
      id: uuid(),
      company: "Vantage Point Solutions",
      position: "Frontend Engineer (Contract)",
      startDate: "Sep 2024",
      endDate: "Mar 2025",
      description:
        "Developed TurningWays, a church-management application for membership, giving, event scheduling, forms, dashboards, and progress tracking.",
      achievements: [
        "Built reusable UI and data-fetching patterns with React, Next.js, TypeScript, and Axios.",
        "Improved state handling and data visualisation, fixed production issues, and collaborated with product and design on maintainable releases.",
      ],
    },
    {
      id: uuid(),
      company: "Investment One Financial Services",
      position: "Backend Developer (Intern)",
      startDate: "Mar 2024",
      endDate: "Sep 2024",
      description:
        "Built and consumed REST APIs for internal financial systems using PHP and Laravel, with a focus on secure data flows and relational systems.",
      achievements: [
        "Designed relational schemas, optimised queries, implemented protected endpoints and permission-based access, and improved debugging practices.",
        "Integrated reporting functionality into backend services to support automated financial report statements.",
      ],
    },
  ],
};
