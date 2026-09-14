import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Menu,
  X as CloseIcon,
  FileDown,
  Code2,
  Sparkles,
  Database,
  BrainCircuit,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profileImage from "./assets/hero.png";
import resume from "./assets/LinkedIn Resume - Nitish Shukla.pdf";
import ABOUT_IMAGE from "./assets/about.png";

/* =========================================================
   DATA
========================================================= */

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "toolkit", label: "Toolkit" },
  { id: "work", label: "Work" },
  { id: "background", label: "Background" },
  { id: "contact", label: "Contact" },
];

const SKILLS = [
  {
    group: "Languages",
    icon: Code2,
    items: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "C++",
    ],
  },

  {
    group: "Backend",
    icon: BrainCircuit,
    items: [
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JDBC",
      "REST APIs",
      "FastAPI",
      "Firebase",
      "Spring AI",
    ],
  },

  {
    group: "Frontend",
    icon: Sparkles,
    items: [
      "React.js",
      "React Query",
      "Redux Toolkit",
      "Vite",
      "Tailwind CSS",
      "Bootstrap",
      "shadcn/ui",
      "HTML",
      "CSS",
    ],
  },

  {
    group: "Databases",
    icon: Database,
    items: [
      "MySQL",
      "PostgreSQL",
      "Firestore",
      "pgvector",
    ],
  },

  {
    group: "Developer Tools",
    icon: Code2,
    items: [
      "Git",
      "GitHub",
      "Maven",
      "Docker",
      "Postman",
      "API Testing",
      "CI/CD",
      "Vercel",
    ],
  },

  {
    group: "Core Concepts",
    icon: BrainCircuit,
    items: [
      "Data Structures & Algorithms",
      "DBMS",
      "Object-Oriented Programming",
      "State Management",
      "Authentication & Authorization",
      "OAuth 2.0",
      "RESTful Architecture",
      "API Integration",
      "Real-time Systems",
      "RAG",
      "Vector Embeddings",
    ],
  },
];

const PROJECTS = [
  {
    file: "codeorbit.jsx",
    name: "CodeOrbit",
    number: "01",
    tag: "AI-powered GitHub code assistant",
    period: "2026",
    blurb:
      "An AI-powered developer tool that connects to GitHub repositories, indexes source code, and answers natural-language questions about a codebase using retrieval-augmented generation.",
    points: [
      "GitHub OAuth2 login with secure session-based repository access using Spring Security",
      "React dashboard for repository synchronization, search, indexing status, and error handling",
      "Vector embedding pipeline using PostgreSQL and pgvector for semantic code retrieval",
      "Database layer containerized with Docker Compose and exposed through REST APIs",
    ],
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "pgvector",
      "Docker",
      "OAuth2",
    ],
  },

  {
    file: "taskflow.jsx",
    name: "TaskFlow",
    number: "02",
    tag: "Multi-tenant SaaS for team collaboration",
    period: "Jun '26 — Aug '26",
    blurb:
      "A scalable multi-tenant workspace designed for real-time organizational workflow, communication, and secure team collaboration.",
    points: [
      "Organization isolation through Firestore RBAC with secondary authentication for employee provisioning",
      "Dual-layer chat using Firestore snapshots for DMs and nested collections for task threads",
      "Agora SDK video conferencing with a broadcast engine for scheduled meetings",
      "EmailJS-driven flows for verification, temporary credentials, and password recovery",
      "Metadata-driven subscription tiers enforcing per-organization limits and features",
    ],
    tech: [
      "React",
      "Firestore",
      "Agora SDK",
      "EmailJS",
      "RBAC",
    ],
  },

  {
    file: "xcrypto.jsx",
    name: "Xcrypto",
    number: "03",
    tag: "Crypto price tracker, made easy to read",
    period: "May '26 — Jun '26",
    blurb:
      "A real-time dashboard for 10,000+ digital assets designed to make cryptocurrency data approachable, searchable, and easier to understand.",
    points: [
      "CoinGecko API integration for live prices and multi-currency conversion",
      "Contextual AI assistant with a modular blog for asset insights and research",
      "Authentication-backed watch history and metadata-driven premium access tiers",
    ],
    tech: [
      "React",
      "CoinGecko API",
      "Firebase Auth",
    ],
  },
];

const EDUCATION = [
  {
    title: "B.Tech, Artificial Intelligence",
    place: "ABESIT — Dr. A.P.J. Abdul Kalam Technical University",
    period: "Sep 2024 — Present",
    detail: "GPA 8/10 through second year",
  },

  {
    title: "Intermediate, Science",
    place: "SDSVMIC",
    period: "Apr 2022 — Apr 2023",
    detail: "GPA 8.5/10",
  },

  {
    title: "High School, Science",
    place: "SDSVMIC",
    period: "Apr 2020 — Mar 2021",
    detail: "GPA 9/10",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Nitishshukla1608",
    Icon: Github,
  },

  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nitish-shukla-dev/",
    Icon: Linkedin,
  },

  {
    label: "X",
    href: "https://x.com/Nitishs22733118",
    Icon: Twitter,
  },

  {
    label: "Instagram",
    href: "https://www.instagram.com/nitishshuklaa/?hl=en",
    Icon: Instagram,
  },


  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Nitishshukla1608/",
    Icon: SiLeetcode,
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const go = (id) => {
    setMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="site">

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #06070a;
        }

        .site {
          --bg: #06070a;
          --bg-soft: #0a0c11;
          --panel: rgba(15, 17, 24, 0.72);
          --panel-solid: #101219;
          --panel-hover: #151823;
          --border: rgba(255,255,255,0.08);
          --border-strong: rgba(255,255,255,0.14);

          --text: #f4f4f7;
          --muted: #8f94a3;
          --muted-light: #b9bdc9;

          --accent: #9b6cff;
          --accent-2: #6d4aff;
          --accent-soft: #cdbdff;

          --green: #74f0b2;

          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;

          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(109, 74, 255, 0.15),
              transparent 35%
            ),
            var(--bg);

          color: var(--text);
          font-family: "Inter", sans-serif;

          -webkit-font-smoothing: antialiased;
        }

        .site h1,
        .site h2,
        .site h3,
        .site h4 {
          font-family: "Space Grotesk", sans-serif;
        }

        .site a {
          color: inherit;
          text-decoration: none;
        }

        .site button {
          font-family: inherit;
        }

        .mono {
          font-family: "IBM Plex Mono", monospace;
        }

        .site section {
          position: relative;
          z-index: 2;
          scroll-margin-top: 90px;
        }


        /* =====================================================
           BACKGROUND
        ===================================================== */

        .background-grid {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.018) 1px,
              transparent 1px
            );

          background-size: 50px 50px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 75%
            );
        }

        .background-glow {
          position: fixed;

          width: 500px;
          height: 500px;

          top: -250px;
          left: 50%;

          transform: translateX(-50%);

          background: rgba(109, 74, 255, 0.16);

          filter: blur(120px);

          border-radius: 50%;

          pointer-events: none;
          z-index: 0;
        }


        /* =====================================================
           NAVBAR
        ===================================================== */

        .nav {
          position: sticky;
          top: 0;
          z-index: 100;

          width: 100%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          padding:
            18px
            clamp(20px, 5vw, 70px);

          border-bottom: 1px solid transparent;

          transition:
            background .3s ease,
            border-color .3s ease,
            backdrop-filter .3s ease;
        }

        .nav.scrolled {
          background: rgba(7, 8, 12, 0.72);

          backdrop-filter: blur(18px);

          border-bottom-color: var(--border);
        }

        .brand {
          display: flex;
          align-items: center;

          gap: 11px;

          font-family: "Space Grotesk", sans-serif;

          font-size: 16px;
          font-weight: 700;

          letter-spacing: -0.02em;
        }

        .brand-mark {
          width: 36px;
          height: 36px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid rgba(155,108,255,.55);

          border-radius: 10px;

          color: var(--accent-soft);

          background:
            linear-gradient(
              135deg,
              rgba(155,108,255,.18),
              rgba(109,74,255,.04)
            );

          box-shadow:
            0 0 25px rgba(109,74,255,.12);

          font-family: "IBM Plex Mono", monospace;

          font-size: 12px;
        }

        .nav-links {
          display: flex;
          align-items: center;

          gap: 30px;
        }

        .nav-links button {
          border: none;
          background: none;

          color: var(--muted);

          font-size: 13.5px;

          cursor: pointer;

          padding: 5px 0;

          position: relative;

          transition: color .2s ease;
        }

        .nav-links button::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -5px;

          width: 0;
          height: 1px;

          background: var(--accent);

          transition: width .25s ease;
        }

        .nav-links button:hover {
          color: var(--text);
        }

        .nav-links button:hover::after {
          width: 100%;
        }

        .nav-cta {
          display: none;
        }

        @media (min-width: 1050px) {
          .nav-cta {
            display: inline-flex;
          }
        }

        .menu-btn {
          display: flex;

          align-items: center;
          justify-content: center;

          border: 1px solid var(--border-strong);

          background: rgba(255,255,255,.03);

          border-radius: 9px;

          padding: 9px;

          color: var(--text);

          cursor: pointer;

          transition:
            background .2s ease,
            border-color .2s ease;
        }

        .menu-btn:hover {
          background: rgba(155,108,255,.1);

          border-color: rgba(155,108,255,.4);
        }

        @media (min-width: 860px) {
          .menu-btn {
            display: none;
          }
        }

        @media (max-width: 859px) {
          .nav-links {
            display: none;
          }
        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        .mobile-menu {
          position: fixed;

          inset: 0;

          z-index: 200;

          display: flex;
          flex-direction: column;

          align-items: center;
          justify-content: center;

          gap: 26px;

          background:
            radial-gradient(
              circle at 50% 20%,
              rgba(109,74,255,.13),
              transparent 40%
            ),
            rgba(5,6,9,.98);

          backdrop-filter: blur(20px);
        }

        .mobile-menu button.item {
          border: none;
          background: none;

          color: var(--text);

          font-family: "Space Grotesk", sans-serif;

          font-size: 28px;
          font-weight: 600;

          cursor: pointer;

          transition:
            color .2s ease,
            transform .2s ease;
        }

        .mobile-menu button.item:hover {
          color: var(--accent-soft);

          transform: translateX(4px);
        }

        .mobile-close {
          position: absolute;

          top: 20px;
          right: 22px;

          border: 1px solid var(--border-strong);

          border-radius: 9px;

          background: rgba(255,255,255,.03);

          padding: 9px;

          color: var(--text);

          cursor: pointer;
        }

        .mobile-mail {
          display: flex;
          align-items: center;

          gap: 8px;

          margin-top: 10px;

          color: var(--accent-soft);

          font-family: "IBM Plex Mono", monospace;

          font-size: 12px;
        }


        /* =====================================================
           COMMON
        ===================================================== */

        .wrap {
          width: min(1180px, 100%);

          margin: 0 auto;

          padding:
            0
            clamp(20px, 5vw, 64px);
        }

        .btn {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 8px;

          padding: 13px 19px;

          border-radius: 10px;

          border: 1px solid transparent;

          font-size: 13.5px;
          font-weight: 600;

          cursor: pointer;

          white-space: nowrap;

          transition:
            transform .2s ease,
            background .2s ease,
            border-color .2s ease,
            box-shadow .2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .btn-primary {
          color: #fff;

          background:
            linear-gradient(
              135deg,
              #a275ff,
              #704cff
            );

          box-shadow:
            0 10px 35px rgba(109,74,255,.22);
        }

        .btn-primary:hover {
          box-shadow:
            0 14px 42px rgba(109,74,255,.34);
        }

        .btn-ghost {
          color: var(--text);

          border-color: var(--border-strong);

          background: rgba(255,255,255,.025);
        }

        .btn-ghost:hover {
          border-color: rgba(155,108,255,.5);

          background: rgba(155,108,255,.06);
        }

        .section-block {
          padding: clamp(80px, 11vw, 125px) 0;

          border-top: 1px solid var(--border);
        }

        .section-head {
          margin-bottom: 46px;
        }

        .section-number {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 13px;

          color: var(--accent-soft);

          font-family: "IBM Plex Mono", monospace;

          font-size: 11px;

          letter-spacing: .08em;
        }

        .section-number::before {
          content: "";

          width: 25px;
          height: 1px;

          background: var(--accent);
        }

        .section-head h2 {
          font-size: clamp(30px, 4vw, 43px);

          letter-spacing: -.04em;
        }

        .section-head p {
          max-width: 600px;

          margin-top: 13px;

          color: var(--muted);

          font-size: 14.5px;

          line-height: 1.75;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hero {
          min-height: calc(100vh - 70px);

          display: flex;
          align-items: center;

          padding:
            70px 0
            75px;

          position: relative;

          z-index: 2;
        }

        .hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(280px, 400px)
            minmax(0, 1fr);

          align-items: center;

          gap: 30px;
        }

        .hero-left {
          display: flex;

          flex-direction: column;

          align-items: flex-start;
        }

        .hero-intro {
          color: var(--accent-soft);

          font-family: "IBM Plex Mono", monospace;

          font-size: 12px;

          margin-bottom: 13px;

          display: flex;

          align-items: center;

          gap: 8px;
        }

        .hero-intro::before {
          content: "";

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: var(--green);

          box-shadow:
            0 0 12px rgba(116,240,178,.7);
        }

        .hero-name {
          font-size: clamp(38px, 5vw, 64px);

          line-height: 1;

          letter-spacing: -.055em;

          font-weight: 700;
        }

        .hero-name .gradient {
          background:
            linear-gradient(
              110deg,
              #ffffff 10%,
              #bca5ff 55%,
              #8d66ff 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .hero-description {
          max-width: 420px;

          margin-top: 22px;

          color: var(--muted);

          font-size: 14px;

          line-height: 1.75;
        }

        .hero-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 11px;

          margin-top: 28px;
        }


        /* =====================================================
           HERO VISUAL
        ===================================================== */

        .hero-visual {
          min-height: 450px;

          display: flex;

          align-items: center;

          justify-content: center;

          position: relative;

          overflow: visible;
        }

        .hero-orbit {
          position: absolute;

          width: 340px;
          height: 340px;

          border: 1px solid rgba(155,108,255,.12);

          border-radius: 50%;

          animation:
            rotateOrbit 20s linear infinite;
        }

        .hero-orbit::before,
        .hero-orbit::after {
          content: "";

          position: absolute;

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: var(--accent);

          box-shadow:
            0 0 18px var(--accent);
        }

        .hero-orbit::before {
          top: 35px;
          left: 50%;
        }

        .hero-orbit::after {
          bottom: 50px;
          right: 25px;
        }

        @keyframes rotateOrbit {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .hero-glow {
          position: absolute;

          width: 260px;
          height: 260px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(109,74,255,.42),
              rgba(109,74,255,.10) 45%,
              transparent 72%
            );

          filter: blur(12px);
        }

        .hero-image-frame {
          width: min(310px, 72vw);

          position: relative;

          z-index: 3;

          display: flex;

          justify-content: center;

          animation:
            heroFloat 5s ease-in-out infinite;
        }

        @keyframes heroFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        .hero-image-frame::before {
          content: "";

          position: absolute;

          inset: 15% 15% 5%;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              rgba(155,108,255,.22),
              transparent
            );

          filter: blur(25px);

          z-index: -1;
        }

        .hero-image {
          width: 100%;

          display: block;

          filter:
            drop-shadow(
              0 25px 45px rgba(0,0,0,.5)
            );

          mask-image:
            linear-gradient(
              to bottom,
              black 82%,
              transparent 100%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              black 82%,
              transparent 100%
            );
        }


        /* =====================================================
           FLOATING BADGES
        ===================================================== */

        .floating-badge {
          position: absolute;

          z-index: 8;

          display: flex;

          align-items: center;

          gap: 7px;

          padding: 9px 12px;

          border: 1px solid var(--border-strong);

          border-radius: 9px;

          background:
            rgba(14,16,22,.82);

          backdrop-filter: blur(12px);

          color: var(--muted-light);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          white-space: nowrap;

          box-shadow:
            0 15px 40px rgba(0,0,0,.28);

          animation:
            badgeFloat 4s ease-in-out infinite;
        }

        /* RAG & AI */

        .badge-rag {
          top: 72px;

          left: 8px;

          animation-delay: 0s;
        }

        /* Full Stack */

        .badge-stack {
          right: 2px;

          bottom: 72px;

          animation-delay: 2s;
        }

        .badge-dot {
          width: 6px;
          height: 6px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--green);

          box-shadow:
            0 0 10px var(--green);
        }

        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-7px);
          }
        }


        /* =====================================================
           HERO RIGHT
        ===================================================== */

        .hero-right {
          display: flex;

          flex-direction: column;

          align-items: flex-end;

          text-align: right;
        }

        .hero-right-label {
          color: var(--accent-soft);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 12px;

          margin-bottom: 8px;
        }

        .hero-role {
          font-size: clamp(27px, 3.2vw, 43px);

          line-height: 1.04;

          letter-spacing: -.045em;
        }

        .hero-role .accent {
          color: var(--accent);
        }

        .hero-right-copy {
          max-width: 310px;

          margin-top: 18px;

          color: var(--muted);

          font-size: 13.5px;

          line-height: 1.75;
        }


        /* =====================================================
           AVAILABILITY
        ===================================================== */

        .availability {
          margin-top: 26px;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          border:
            1px solid
            rgba(116,240,178,.15);

          background:
            rgba(116,240,178,.035);

          padding: 9px 13px;

          border-radius: 999px;

          color: #a7cdb9;

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10.5px;
        }

        .availability-dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          border-radius: 50%;

          background: var(--green);

          box-shadow:
            0 0 12px var(--green);
        }


        /* =====================================================
           RESUME BUTTON
        ===================================================== */

        .hero-resume {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          margin-top: 12px;

          padding: 8px 12px;

          border:
            1px solid
            rgba(155,108,255,.28);

          border-radius: 8px;

          color: var(--accent-soft);

          background:
            rgba(155,108,255,.055);

          backdrop-filter: blur(10px);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          font-weight: 500;

          transition:
            transform .2s ease,
            border-color .2s ease,
            background .2s ease,
            color .2s ease;
        }

        .hero-resume:hover {
          transform: translateY(-2px);

          color: #fff;

          border-color:
            rgba(155,108,255,.55);

          background:
            rgba(155,108,255,.12);
        }

        .hero-resume svg {
          flex-shrink: 0;
        }


        /* =====================================================
           HERO STATS
        ===================================================== */

        .hero-bottom {
          display: flex;

          justify-content: center;

          gap: 42px;

          margin-top: 55px;
        }

        .hero-stat {
          text-align: center;
        }

        .hero-stat-label {
          color: var(--muted);

          font-size: 10px;

          font-family:
            "IBM Plex Mono",
            monospace;

          text-transform: uppercase;

          letter-spacing: .08em;
        }

        .hero-stat-value {
          margin-top: 5px;

          color: var(--text);

          font-family:
            "Space Grotesk",
            sans-serif;

          font-size: 13px;

          font-weight: 600;
        }


        /* =====================================================
           SOCIAL RAIL
        ===================================================== */

        .social-rail {
          position: fixed;

          left: 24px;
          top: 50%;

          transform: translateY(-50%);

          z-index: 20;

          display: flex;

          flex-direction: column;

          gap: 15px;
        }

        .social-rail a {
          width: 34px;
          height: 34px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            var(--border);

          border-radius: 8px;

          color: var(--muted);

          background:
            rgba(10,11,15,.4);

          transition:
            color .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }

        .social-rail a:hover {
          color: var(--accent-soft);

          border-color:
            rgba(155,108,255,.4);

          transform:
            translateX(3px);
        }

        .social-rail::after {
          content: "";

          width: 1px;
          height: 55px;

          background:
            var(--border);

          margin:
            4px auto 0;
        }

        @media (max-width: 1100px) {
          .social-rail {
            display: none;
          }
        }


        /* =====================================================
           ABOUT
        ===================================================== */

        .about-layout {
          display: grid;

          grid-template-columns:
            230px 1fr;

          gap: 65px;

          align-items: start;
        }

        .about-image-wrap {
          position: relative;

          width: 210px;
        }

        .about-image-wrap::after {
          content: "";

          position: absolute;

          inset:
            12px -10px -10px 12px;

          border:
            1px solid
            rgba(155,108,255,.25);

          border-radius: 18px;

          z-index: -1;
        }

        .about-image {
          width: 210px;
          height: 210px;

          object-fit: cover;

          display: block;

          border-radius: 18px;

          border:
            1px solid
            var(--border-strong);

          filter: saturate(.9);

          box-shadow:
            0 25px 60px rgba(0,0,0,.35);
        }

        .about-label {
          margin-top: 18px;

          color: var(--muted);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          text-align: center;
        }

        .about-content {
          max-width: 720px;
        }

        .about-content p {
          color: #c6cad4;

          font-size: 15px;

          line-height: 1.85;

          margin-bottom: 20px;
        }

        .about-content p strong {
          color: var(--text);
        }

        .fact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 24px;

          margin-top: 32px;
        }

        .fact {
          padding-top: 13px;

          border-top:
            1px solid
            var(--border);
        }

        .fact-key {
          color: var(--muted);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          letter-spacing: .08em;
        }

        .fact-value {
          margin-top: 7px;

          color: var(--text);

          font-size: 13.5px;
        }


        /* =====================================================
           TOOLKIT
        ===================================================== */

        .skill-grid {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 15px;
        }

        .skill-card {
          position: relative;

          padding: 25px;

          border:
            1px solid
            var(--border);

          border-radius: 15px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.035),
              rgba(255,255,255,.012)
            );

          overflow: hidden;

          transition:
            transform .25s ease,
            border-color .25s ease,
            background .25s ease;
        }

        .skill-card::before {
          content: "";

          position: absolute;

          width: 120px;
          height: 120px;

          top: -70px;
          right: -70px;

          background:
            rgba(109,74,255,.13);

          border-radius: 50%;

          filter: blur(20px);
        }

        .skill-card:hover {
          transform:
            translateY(-4px);

          border-color:
            rgba(155,108,255,.28);

          background:
            linear-gradient(
              145deg,
              rgba(155,108,255,.065),
              rgba(255,255,255,.015)
            );
        }

        .skill-heading {
          display: flex;

          align-items: center;

          gap: 10px;

          margin-bottom: 17px;
        }

        .skill-icon {
          width: 32px;
          height: 32px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 8px;

          background:
            rgba(155,108,255,.08);

          color: var(--accent-soft);
        }

        .skill-card h3 {
          font-size: 14px;

          font-weight: 600;

          color: var(--text);
        }

        .chips {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }

        .chip {
          padding: 6px 9px;

          border:
            1px solid
            var(--border);

          border-radius: 6px;

          background:
            rgba(255,255,255,.025);

          color: var(--muted-light);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10.5px;
        }


        /* =====================================================
           PROJECTS
        ===================================================== */

        .project-list {
          display: flex;

          flex-direction: column;

          gap: 18px;
        }

        .project-card {
          position: relative;

          border:
            1px solid
            var(--border);

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.035),
              rgba(255,255,255,.012)
            );

          overflow: hidden;

          transition:
            transform .3s ease,
            border-color .3s ease,
            box-shadow .3s ease;
        }

        .project-card:hover {
          transform:
            translateY(-5px);

          border-color:
            rgba(155,108,255,.3);

          box-shadow:
            0 25px 70px rgba(0,0,0,.28);
        }

        .project-card::before {
          content: "";

          position: absolute;

          width: 220px;
          height: 220px;

          top: -140px;
          right: -100px;

          border-radius: 50%;

          background:
            rgba(109,74,255,.12);

          filter: blur(35px);

          pointer-events: none;
        }

        .project-bar {
          display: flex;

          align-items: center;
          justify-content: space-between;

          padding: 12px 17px;

          border-bottom:
            1px solid
            var(--border);

          background:
            rgba(255,255,255,.018);
        }

        .project-window {
          display: flex;

          gap: 6px;
        }

        .window-dot {
          width: 8px;
          height: 8px;

          border-radius: 50%;

          background:
            rgba(255,255,255,.16);
        }

        .project-number {
          color: var(--muted);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;
        }

        .project-body {
          padding:
            clamp(23px, 4vw, 32px);
        }

        .project-top {
          display: flex;

          justify-content: space-between;

          align-items: flex-start;

          gap: 20px;

          margin-bottom: 8px;
        }

        .project-title-wrap {
          display: flex;

          align-items: center;

          gap: 12px;
        }

        .project-title {
          font-size: 23px;

          letter-spacing: -.035em;
        }

        .project-arrow {
          width: 30px;
          height: 30px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            var(--border);

          border-radius: 8px;

          color: var(--muted);

          transition:
            color .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }

        .project-card:hover .project-arrow {
          color: var(--accent-soft);

          border-color:
            rgba(155,108,255,.35);

          transform:
            translate(2px,-2px);
        }

        .project-period {
          color: var(--muted);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          white-space: nowrap;
        }

        .project-tag {
          color: var(--accent-soft);

          font-size: 12px;

          margin-bottom: 14px;
        }

        .project-blurb {
          max-width: 800px;

          color: #bfc4d0;

          font-size: 13.5px;

          line-height: 1.75;

          margin-bottom: 18px;
        }

        .project-points {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0,1fr));

          gap: 8px 25px;

          padding-left: 17px;

          margin-bottom: 22px;

          color: var(--muted);

          font-size: 12.5px;

          line-height: 1.7;
        }

        .project-points li::marker {
          color: var(--accent);
        }

        .project-tech {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }

        .project-tech span {
          padding: 5px 8px;

          border:
            1px solid
            rgba(155,108,255,.2);

          border-radius: 6px;

          color: var(--accent-soft);

          background:
            rgba(155,108,255,.035);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;
        }


        /* =====================================================
           EDUCATION
        ===================================================== */

        .timeline {
          position: relative;

          max-width: 850px;

          padding-left: 32px;
        }

        .timeline::before {
          content: "";

          position: absolute;

          left: 5px;

          top: 7px;
          bottom: 7px;

          width: 1px;

          background:
            linear-gradient(
              to bottom,
              var(--accent),
              var(--border),
              transparent
            );
        }

        .timeline-item {
          position: relative;

          padding-bottom: 48px;
        }

        .timeline-item:last-child {
          padding-bottom: 0;
        }

        .timeline-item::before {
          content: "";

          position: absolute;

          left: -32px;

          top: 4px;

          width: 11px;
          height: 11px;

          border-radius: 50%;

          background: var(--bg);

          border:
            2px solid
            var(--accent);

          box-shadow:
            0 0 14px
            rgba(155,108,255,.35);
        }

        .timeline-period {
          color: var(--accent-soft);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;

          margin-bottom: 8px;
        }

        .timeline-item h3 {
          font-size: 18px;

          letter-spacing: -.02em;
        }

        .timeline-place {
          color: var(--muted-light);

          font-size: 13px;

          margin-top: 6px;

          line-height: 1.6;
        }

        .timeline-detail {
          display: inline-block;

          margin-top: 10px;

          padding: 5px 8px;

          border-radius: 6px;

          background:
            rgba(155,108,255,.06);

          color: var(--accent-soft);

          font-family:
            "IBM Plex Mono",
            monospace;

          font-size: 10px;
        }


        /* =====================================================
           CONTACT
        ===================================================== */

        .contact-panel {
          position: relative;

          overflow: hidden;

          padding:
            clamp(40px, 7vw, 70px);

          text-align: center;

          border:
            1px solid
            var(--border-strong);

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(109,74,255,.15),
              transparent 55%
            ),
            rgba(255,255,255,.02);
        }

        .contact-panel::before {
          content: "";

          position: absolute;

          width: 350px;
          height: 350px;

          top: -230px;
          left: 50%;

          transform:
            translateX(-50%);

          background:
            rgba(109,74,255,.15);

          border-radius: 50%;

          filter: blur(60px);

          pointer-events: none;
        }

        .contact-content {
          position: relative;

          z-index: 2;
        }

        .contact-title {
          font-size:
            clamp(31px, 5vw, 52px);

          letter-spacing: -.05em;
        }

        .contact-copy {
          max-width: 570px;

          margin:
            16px auto 0;

          color: var(--muted);

          font-size: 14px;

          line-height: 1.75;
        }

        .contact-methods {
          display: flex;

          justify-content: center;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 32px;
        }

        .contact-method {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding: 10px 13px;

          border:
            1px solid
            var(--border);

          border-radius: 9px;

          color: var(--muted-light);

          background:
            rgba(255,255,255,.02);

          font-size: 12px;

          transition:
            color .2s ease,
            border-color .2s ease,
            transform .2s ease;
        }

        .contact-method:hover {
          color: var(--text);

          border-color:
            rgba(155,108,255,.35);

          transform:
            translateY(-2px);
        }

        .social-row {
          display: flex;

          justify-content: center;

          gap: 10px;

          margin-top: 30px;
        }

        .social-link {
          width: 40px;
          height: 40px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            var(--border);

          border-radius: 9px;

          color: var(--muted);

          transition:
            color .2s ease,
            border-color .2s ease,
            transform .2s ease,
            background .2s ease;
        }

        .social-link:hover {
          color: var(--accent-soft);

          border-color:
            rgba(155,108,255,.4);

          background:
            rgba(155,108,255,.07);

          transform:
            translateY(-3px);
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        footer {
          position: relative;

          z-index: 2;

          display: flex;

          justify-content: space-between;

          gap: 15px;

          padding:
            28px
            clamp(20px, 5vw, 64px)
            40px;

          border-top:
            1px solid
            var(--border);

          color: var(--muted);

          font-size: 11px;
        }


        /* =====================================================
           TOP BUTTON
        ===================================================== */

        .top-button {
          position: fixed;

          right: 24px;
          bottom: 24px;

          z-index: 80;

          width: 42px;
          height: 42px;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(155,108,255,.3);

          border-radius: 10px;

          color: var(--accent-soft);

          background:
            rgba(12,13,18,.78);

          backdrop-filter: blur(12px);

          cursor: pointer;

          box-shadow:
            0 10px 35px rgba(0,0,0,.3);

          transition:
            transform .2s ease,
            background .2s ease;
        }

        .top-button:hover {
          transform:
            translateY(-3px);

          background:
            rgba(155,108,255,.12);
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 979px) {

          .hero {
            padding-top: 50px;
          }

          .hero-grid {
            grid-template-columns: 1fr;

            text-align: center;
          }

          .hero-left,
          .hero-right {
            align-items: center;

            text-align: center;
          }

          .hero-left {
            order: 1;
          }

          .hero-visual {
            order: 2;

            min-height: 390px;
          }

          .hero-right {
            order: 3;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-bottom {
            margin-top: 45px;
          }

          .about-layout {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .about-image-wrap {
            margin: 0 auto;
          }

          .about-content {
            max-width: 100%;
          }
        }


        @media (max-width: 700px) {

          .hero {
            min-height: auto;

            padding:
              45px 0
              70px;
          }

          .hero-name {
            font-size:
              clamp(39px, 11vw, 58px);
          }

          .hero-visual {
            min-height: 330px;
          }

          .hero-orbit {
            width: 260px;
            height: 260px;
          }

          .hero-image-frame {
            width:
              min(270px, 75vw);
          }

          .badge-rag {
            left: 2px;
            top: 45px;
          }

          .badge-stack {
            right: 2px;
            bottom: 50px;
          }

          .hero-bottom {
            gap: 22px;

            flex-wrap: wrap;
          }

          .skill-grid {
            grid-template-columns: 1fr;
          }

          .project-points {
            grid-template-columns: 1fr;
          }

          .project-top {
            flex-direction: column;
          }

          .project-period {
            align-self: flex-start;
          }

          .fact-grid {
            grid-template-columns: 1fr;
          }

          footer {
            flex-direction: column;

            text-align: center;

            align-items: center;
          }
        }


        @media (max-width: 480px) {

          .hero-actions {
            width: 100%;
          }

          .hero-actions .btn {
            flex: 1;
          }

          .contact-methods {
            flex-direction: column;
          }

          .contact-method {
            justify-content: center;
          }

          .about-image {
            width: 180px;
            height: 180px;
          }

          .about-image-wrap {
            width: 180px;
          }

          .hero-resume {
            margin-top: 11px;
          }
        }


        @media (prefers-reduced-motion: reduce) {

          *,
          *::before,
          *::after {
            animation-duration: .001ms !important;

            animation-iteration-count: 1 !important;

            transition-duration: .001ms !important;

            scroll-behavior: auto !important;
          }
        }


        .site button:focus-visible,
        .site a:focus-visible {
          outline:
            2px solid
            var(--accent);

          outline-offset: 3px;
        }

      `}</style>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="background-grid"
        aria-hidden="true"
      />

      <div
        className="background-glow"
        aria-hidden="true"
      />


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav
        className={`nav ${
          scrolled ? "scrolled" : ""
        }`}
      >

        <button
          className="brand"
          onClick={goHome}
          aria-label="Go to homepage"
          style={{
            border: "none",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
          }}
        >
          <span className="brand-mark">
            NS
          </span>

          Nitish Shukla
        </button>


        <div className="nav-links">

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}

        </div>


        <a
          className="btn btn-primary nav-cta"
          href="mailto:shuklanitish057@gmail.com"
        >
          <Mail size={15} />

          Contact
        </a>


        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>

      </nav>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      {menuOpen && (
        <div className="mobile-menu">

          <button
            className="mobile-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon size={20} />
          </button>


          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className="item"
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}


          <a
            className="mobile-mail"
            href="mailto:shuklanitish057@gmail.com"
          >
            <Mail size={15} />

            shuklanitish057@gmail.com
          </a>

        </div>
      )}


      {/* =====================================================
          SOCIAL RAIL
      ===================================================== */}

      <div className="social-rail">

        {SOCIALS.map(
          ({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              <Icon size={17} />
            </a>
          )
        )}

      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <header
        className="hero"
        id="home"
      >

        <div className="wrap">

          <div className="hero-grid">


            {/* =================================================
                LEFT
            ================================================= */}

            <div className="hero-left">

              <div className="hero-intro">
                Hello, I'm Nitish
              </div>


              <h1 className="hero-name">

                <span className="gradient">
                  AI & Full-Stack
                </span>

                <br />

                Engineer

              </h1>


              <p className="hero-description">
                I build intelligent, scalable web products —
                from RAG-powered developer tools to real-time
                multi-tenant applications.
              </p>


              <div className="hero-actions">

                <button
                  className="btn btn-primary"
                  onClick={() => go("work")}
                >
                  View my work

                  <ArrowUpRight size={16} />
                </button>


                <button
                  className="btn btn-ghost"
                  onClick={() => go("contact")}
                >
                  Get in touch
                </button>

              </div>

            </div>


            {/* =================================================
                CENTER IMAGE
            ================================================= */}

            <div className="hero-visual">

              <div className="hero-orbit">
                <span className="orbit-dot dot-1" />
                <span className="orbit-dot dot-2" />
                <span className="orbit-dot dot-3" />
              </div>


              <div className="hero-glow" />


              {/* RAG & AI BADGE */}

              <div className="floating-badge badge-rag">

                <span className="badge-dot" />

                RAG & AI

              </div>


              {/* FULL STACK BADGE */}

              <div className="floating-badge badge-stack">

                <Code2 size={12} />

                Full Stack

              </div>


              {/* PROFILE IMAGE */}

              <div className="hero-image-frame">

                <img
                  className="hero-image"
                  src={profileImage}
                  alt="Nitish Shukla"
                />

              </div>

            </div>


            {/* =================================================
                RIGHT
            ================================================= */}

            <div className="hero-right">

              <div className="hero-right-label">
                ASPIRING DEVELOPER
              </div>


              <h2 className="hero-role">

                Building

                <br />

                <span className="accent">
                  useful software.
                </span>

              </h2>


              <p className="hero-right-copy">
                Focused on backend architecture, AI-powered
                applications, developer tooling, and clean
                user experiences.
              </p>


              {/* AVAILABILITY */}

              <div className="availability">

                <span className="availability-dot" />

                Open to internships & junior roles

              </div>


              {/* RESUME */}

              <a
                href={resume}
                download="Nitish-Shukla-Resume.pdf"
                className="hero-resume"
              >

                <FileDown size={14} />

                Download Resume

              </a>

            </div>

          </div>


          {/* =================================================
              HERO STATS
          ================================================= */}

          <div className="hero-bottom">

            <div className="hero-stat">

              <div className="hero-stat-label">
                Studying
              </div>

              <div className="hero-stat-value">
                B.Tech · Artificial Intelligence
              </div>

            </div>


            <div className="hero-stat">

              <div className="hero-stat-label">
                Shipped
              </div>

              <div className="hero-stat-value">
                3 Full-Stack Projects
              </div>

            </div>


            <div className="hero-stat">

              <div className="hero-stat-label">
                Based in
              </div>

              <div className="hero-stat-value">
                New Delhi, India
              </div>

            </div>

          </div>

        </div>

      </header>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="section-block"
      >

        <div className="wrap">

          <div className="section-head">

            <div className="section-number">
              01 / ABOUT
            </div>

            <h2>
              A developer who likes to build.
            </h2>

            <p>
              Most of my learning happens by turning ideas
              into working software.
            </p>

          </div>


          <div className="about-layout">

            <div>

              <div className="about-image-wrap">

                <img
                  src={ABOUT_IMAGE}
                  alt="Nitish Shukla"
                  className="about-image"
                />

              </div>


              <div className="about-label">
                // still learning, always shipping
              </div>

            </div>


            <div className="about-content">

              <p>
                I'm a third-year{" "}
                <strong>
                  Artificial Intelligence student
                </strong>{" "}
                at ABESIT under Dr. A.P.J. Abdul Kalam
                Technical University, currently maintaining
                an 8/10 GPA.
              </p>


              <p>
                I enjoy working across the whole stack:
                designing APIs with{" "}
                <strong>Spring Boot</strong>, building
                interfaces with <strong>React</strong>,
                working with databases, and integrating
                AI capabilities into practical applications.
              </p>


              <p>
                Recently, I've been especially interested in{" "}
                <strong>
                  retrieval-augmented generation,
                  semantic search, developer tools,
                  and scalable backend systems.
                </strong>
              </p>


              <div className="fact-grid">

                <div className="fact">

                  <div className="fact-key">
                    LOCATION
                  </div>

                  <div className="fact-value">
                    New Delhi, India
                  </div>

                </div>


                <div className="fact">

                  <div className="fact-key">
                    EDUCATION
                  </div>

                  <div className="fact-value">
                    B.Tech, AI — ABESIT
                  </div>

                </div>


                <div className="fact">

                  <div className="fact-key">
                    EMAIL
                  </div>

                  <div className="fact-value">
                    shuklanitish057@gmail.com
                  </div>

                </div>


                <div className="fact">

                  <div className="fact-key">
                    PHONE
                  </div>

                  <div className="fact-value">
                    +91 88404 07708
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          TOOLKIT
      ===================================================== */}

      <section
        id="toolkit"
        className="section-block"
      >

        <div className="wrap">

          <div className="section-head">

            <div className="section-number">
              02 / TOOLKIT
            </div>

            <h2>
              Technologies I work with.
            </h2>

            <p>
              From application architecture and APIs to
              interfaces, databases, and developer tooling.
            </p>

          </div>


          <div className="skill-grid">

            {SKILLS.map((skill) => {

              const Icon = skill.icon;

              return (
                <div
                  className="skill-card"
                  key={skill.group}
                >

                  <div className="skill-heading">

                    <div className="skill-icon">
                      <Icon size={16} />
                    </div>

                    <h3>
                      {skill.group}
                    </h3>

                  </div>


                  <div className="chips">

                    {skill.items.map((item) => (

                      <span
                        className="chip"
                        key={item}
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          WORK
      ===================================================== */}

      <section
        id="work"
        className="section-block"
      >

        <div className="wrap">

          <div className="section-head">

            <div className="section-number">
              03 / SELECTED WORK
            </div>

            <h2>
              Things I've built.
            </h2>

            <p>
              Projects spanning AI tooling, real-time SaaS,
              authentication, APIs, and data-heavy dashboards.
            </p>

          </div>


          <div className="project-list">

            {PROJECTS.map((project) => (

              <article
                className="project-card"
                key={project.name}
              >

                <div className="project-bar">

                  <div className="project-window">

                    <span className="window-dot" />
                    <span className="window-dot" />
                    <span className="window-dot" />

                  </div>


                  <div className="project-number">
                    PROJECT_{project.number}
                  </div>

                </div>


                <div className="project-body">

                  <div className="project-top">

                    <div>

                      <div className="project-title-wrap">

                        <h3 className="project-title">
                          {project.name}
                        </h3>

                        <span className="project-arrow">
                          <ExternalLink size={14} />
                        </span>

                      </div>


                      <div className="project-tag">
                        {project.tag}
                      </div>

                    </div>


                    <div className="project-period">
                      {project.period}
                    </div>

                  </div>


                  <p className="project-blurb">
                    {project.blurb}
                  </p>


                  <ul className="project-points">

                    {project.points.map((point) => (

                      <li key={point}>
                        {point}
                      </li>

                    ))}

                  </ul>


                  <div className="project-tech">

                    {project.tech.map((technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    ))}

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <section
        id="background"
        className="section-block"
      >

        <div className="wrap">

          <div className="section-head">

            <div className="section-number">
              04 / BACKGROUND
            </div>

            <h2>
              Education & journey.
            </h2>

          </div>


          <div className="timeline">

            {EDUCATION.map((education) => (

              <div
                className="timeline-item"
                key={education.title}
              >

                <div className="timeline-period">
                  {education.period}
                </div>


                <h3>
                  {education.title}
                </h3>


                <div className="timeline-place">
                  {education.place}
                </div>


                <div className="timeline-detail">
                  {education.detail}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="section-block"
      >

        <div className="wrap">

          <div className="contact-panel">

            <div className="contact-content">

              <div className="section-number">
                05 / CONTACT
              </div>


              <h2 className="contact-title">

                Let's build something

                <br />

                <span
                  style={{
                    color: "var(--accent)",
                  }}
                >
                  impactful.
                </span>

              </h2>


              <p className="contact-copy">
                Open to internships, junior engineering
                roles, collaborative projects, and interesting
                AI-adjacent ideas. If you're building something
                exciting, let's talk.
              </p>


              <div className="contact-methods">

                <a
                  className="contact-method"
                  href="mailto:shuklanitish057@gmail.com"
                >
                  <Mail size={15} />

                  shuklanitish057@gmail.com
                </a>


                <a
                  className="contact-method"
                  href="tel:+918840407708"
                >
                  <Phone size={15} />

                  +91 88404 07708
                </a>


                <span className="contact-method">

                  <MapPin size={15} />

                  New Delhi, India

                </span>

              </div>


              <div className="social-row">

                {SOCIALS.map(
                  ({ label, href, Icon }) => (

                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>

                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <span>
          © 2026 Nitish Kumar Shukla
        </span>


        <span className="mono">
          Built with React · Designed & engineered by Nitish
        </span>

      </footer>


      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      {showTop && (

        <button
          className="top-button"
          onClick={goHome}
          aria-label="Back to top"
        >
          <ChevronUp size={19} />
        </button>

      )}

    </div>
  );
}

