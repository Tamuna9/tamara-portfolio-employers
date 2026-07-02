import React, { useEffect, useState } from "react";
import profilePhoto from "./assets/images/profile.webp";
import userManagerImg from "./assets/projects/user_manager.webp";
import converterImg from "./assets/projects/currency_converter.webp";
import movieStoreImg from "./assets/projects/movie_store.webp";
import moviePredictorImg from "./assets/projects/movie_success_predictor.webp";
import pokerDiceImg from "./assets/projects/poker.webp";
import parkingLotsImg from "./assets/projects/parking_lots.webp";
import aiProfessionalCert from "./assets/certificates/AI.webp";
import awsCert from "./assets/certificates/AWS.webp";
import chatgptCert from "./assets/certificates/ChatGPT.webp";
import claudeCert from "./assets/certificates/Claude.webp";
import javaCert from "./assets/certificates/Java.webp";
import reactCert from "./assets/certificates/React.webp";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaCopy,
  FaChevronDown,
} from "react-icons/fa";




// Edit all external profile links in one place.
const LINKS = {
  github: "https://github.com/Tamuna9",
  linkedin: "https://www.linkedin.com/in/tamara-gegechkori-2a311216b/",
  fiverr: "https://www.fiverr.com/tamuna_g1",
  emailAddress: "tamyna25@gmail.com",
  gmail:
    "https://mail.google.com/mail/?view=cm&fs=1&to=tamyna25%40gmail.com",
};

// Skills are grouped as data so they are easy to update later.
const SKILL_GROUPS = [
  {
    number: "01",
    code: "JAVA",
    layout: "wide",
    tone: "orange",
    title: "Java & Backend",
    summary: "Backend foundations for maintainable web applications, services, and APIs.",
    featured: ["Java", "Spring Boot", "REST APIs", "Hibernate"],
    evidence: "Used across 4 Java projects",
    href: "#projects",
    skills: [
      "Java",
      "Java Core",
      "Spring Boot",
      "Spring Framework",
      "REST APIs",
      "Back-End Web Development",
      "Object-Oriented Programming (OOP)",
      "Hibernate",
      "Java Database Connectivity (JDBC)",
      "JSP",
      "Servlets",
      "MVC",
      "Maven",
      "Multithreading",
      "Concurrency",
    ],
  },
  {
    number: "02",
    code: "DATA",
    layout: "standard",
    tone: "blue",
    title: "Databases & APIs",
    summary: "Structured data, integrations, and dependable CRUD workflows.",
    featured: ["SQL", "MySQL", "MongoDB", "CRUD Operations"],
    evidence: "Database-backed applications",
    href: "#projects",
    skills: [
      "SQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Relational Databases",
      "Database Design",
      "Schema Design",
      "CRUD Operations",
      "Application Programming Interfaces (API)",
      "JSON",
      "Postman",
    ],
  },
  {
    number: "03",
    code: "WEB",
    layout: "standard",
    tone: "green",
    title: "Frontend & Full-Stack",
    summary: "Responsive interfaces that connect cleanly to application logic.",
    featured: ["React.js", "JavaScript", "HTML", "CSS"],
    evidence: "Responsive interfaces & live demos",
    href: "#projects",
    skills: [
      "Full-Stack Development",
      "Front-End Development",
      "Web Development",
      "React.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "Fetch API",
      "UI Development",
    ],
  },
  {
    number: "04",
    code: "AI",
    layout: "wide",
    tone: "violet",
    title: "Python, AI & Data",
    summary: "Practical data analysis and machine-learning experiments with clear results.",
    featured: ["Python (Programming Language)", "Machine Learning", "pandas", "scikit-learn"],
    evidence: "2 Python / ML projects",
    href: "#projects",
    skills: [
      "Python (Programming Language)",
      "Machine Learning",
      "Data Analysis",
      "pandas",
      "NumPy",
      "scikit-learn",
      "Random Forest",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Jupyter AI / Notebooks",
      "Kaggle",
      "Flask",
    ],
  },
  {
    number: "05",
    code: "CLOUD",
    layout: "half",
    tone: "sand",
    title: "Cloud, Tools & Delivery",
    summary: "The development, testing, version-control, and deployment workflow behind the work.",
    featured: ["Git", "GitHub", "Docker", "GitHub Actions"],
    evidence: "Deployed demos & CI workflows",
    href: "#projects",
    skills: [
      "Git",
      "GitHub",
      "IntelliJ IDEA",
      "VS Code",
      "Apache Tomcat",
      "Amazon Web Services (AWS)",
      "Cloud Computing",
      "Docker",
      "GitHub Actions",
      "JUnit",
      "Render",
      "Streamlit",
    ],
  },
  {
    number: "06",
    code: "LEAD",
    layout: "half",
    tone: "ink",
    title: "Professional & Additional",
    summary: "Analytical thinking and leadership experience applied to software delivery.",
    featured: ["Problem Solving", "Analytical Skills", "Team Leadership", "Clean Code"],
    evidence: "Leadership plus software delivery",
    href: "#experience",
    skills: [
      "Problem Solving",
      "Analytical Skills",
      "Team Leadership",
      "Android Development",
      "Data Networks",
      "Quality Management",
      "Quality Control",
      "Debugging",
      "Clean Code",
      "Process Improvement",
    ],
  },
];

// Project content is stored separately from the UI component.

const PROJECTS = [
  {
    number: "01",
    title: "User Management Web Application",
    image:userManagerImg,
    description:
      "A full-stack Java web application with administrator authentication, user management, CRUD operations, and database integration. Developed using Java, JSP, Servlets, MariaDB, Maven, and Apache Tomcat following the MVC architecture.",
    problem: "Create one secure place for administrators to manage users, roles, and persistent records.",
    role: "Full-stack development · architecture, UI, server logic, and database integration",
    features: ["Administrator authentication", "User and role CRUD workflows", "MVC architecture with MariaDB persistence"],
    status: "Live demo",
    category: "Java web application",
    featured: true,
    technologies: [
  "Java",
  "JSP",
  "Servlets",
  "SQL",
  "MariaDB",
  "Maven",
  "Tomcat",
  "MVC",
    ],
    github: "https://github.com/Tamuna9/User-Manager-Web-Application",
    demo: "https://tamuna9.github.io/User-Manager-Web-Application/",
    accent: "orange",
  },

  {
    number: "02",
    title: "Currency Converter Web Application",
    image:converterImg,
    description:
      "A full-stack web application for currency conversion with user authentication, real-time exchange rates, conversion history, and CSV export. Built with Spring Boot, Hibernate, MariaDB, JSP, JavaScript, and the CurrencyFreaks API.",
    problem: "Turn real-time currency conversion into a useful workflow with saved history and exportable results.",
    role: "Full-stack development · backend, external API integration, database, and interface",
    features: ["Live exchange-rate integration", "Authentication and conversion history", "CSV export and responsive interface"],
    status: "Live demo",
    category: "Full-stack application",
    featured: true,
    technologies: [
  "Java",
  "Spring Boot",
  "Hibernate",
  "MariaDB",
  "JSP",
  "JavaScript",
  "CSS",
  "REST API",
  "Maven",
    ],
    github: "https://github.com/Tamuna9/Converter-project",
    demo: "https://tamuna9.github.io/Converter-project/",
    accent: "orange",
  },
 
  {
    number: "03",
    title: "Movie Store API",
    image:movieStoreImg,
    description:
      "RESTful API for managing movie records with CRUD operations, database integration, and clean endpoint design using Python, Flask, SQL, and REST principles.",
    problem: "Provide a simple and consistent API for creating, reading, updating, and deleting movie records.",
    role: "Backend development · endpoint design, validation, JSON responses, and persistence",
    features: ["RESTful CRUD endpoints", "SQL database integration", "Structured JSON request and response flow"],
    status: "Live demo",
    category: "Python REST API",
    featured: false,
    technologies: [
  "Python",
  "Flask",
  "REST API",
  "SQL",
  "JSON",
  "CRUD",
    ],
    github: "https://github.com/Tamuna9/movie-store-api",
    demo: "https://tamuna9.github.io/movie-store-api/",
    accent: "green",
  },

  {
    number: "04",
    title: "Movie Revenue Prediction",
    image:moviePredictorImg,
    description:
      "Machine learning project that predicts movie revenue using historical TMDB data. Includes data preprocessing, feature engineering, model training, model evaluation, and Random Forest regression.",
    problem: "Estimate potential movie revenue from historical data and explain the factors used by the model.",
    role: "End-to-end ML workflow · data preparation, modelling, evaluation, and app delivery",
    features: ["TMDB data preprocessing", "Random Forest regression pipeline", "Interactive Streamlit prediction interface"],
    status: "Live app",
    category: "Machine learning",
    featured: true,
    technologies:[
  "Python",
  "Machine Learning",
  "pandas",
  "NumPy",
  "scikit-learn",
  "Random Forest",
    ],
    github: "https://github.com/Tamuna9/movie-revenue-prediction",
    demo: "https://tamuna-movie-success-predictor.streamlit.app/",
    accent: "violet",
  },

  {
    number: "05",
    title: "Poker Dice Web Application",
    image:pokerDiceImg,
    description:
      "Java implementation of the Poker Dice game featuring object-oriented architecture, game logic, score calculation, and interactive gameplay.",
    problem: "Translate Poker Dice rules into reliable backend logic and an interactive browser experience.",
    role: "Full-stack development · game domain model, REST flow, scoring logic, and UI",
    features: ["Object-oriented game engine", "Automatic hand and score calculation", "Interactive gameplay through Fetch API"],
    status: "Live app",
    category: "Java game",
    featured: false,
    technologies:[
  "Java",
  "Spring Boot",
  "REST API",
  "JavaScript",
  "HTML",
  "CSS",
  "JSP",
  "Fetch API",
  "Maven",
    ],
    github: "https://github.com/Tamuna9/Poker-dice-game",
    demo: "https://poker-dice-game-tamuna9.onrender.com/",
    accent: "blue",
  },

  {
    number: "06",
    title: "MultiThreaded Parking Simulator",
    image:parkingLotsImg,
    description:
      "Java application that simulates a multi-level parking system using multithreading and concurrent programming concepts. Demonstrates thread synchronization, resource management, and object-oriented design.",
    problem: "Model multiple vehicles competing for limited parking spaces without corrupting shared state.",
    role: "Java development · concurrency model, synchronization, simulation logic, and live visualisation",
    features: ["Concurrent vehicle threads", "Synchronized space allocation", "Multi-level parking activity dashboard"],
    status: "Live app",
    category: "Java concurrency",
    featured: false,
    technologies: [
  "Java",
  "Multithreading",
  "Concurrency",
  "Synchronization",
  "OOP",
    ],
    github: "https://github.com/Tamuna9/MultiThreadedParkingSimulator",
    demo: "https://parkflow-live-demo.onrender.com",
    accent: "blue",
  },



];


const EXPERIENCE = [
  {
    number: "01",
    title: "Independent Software Developer",
    company: "Self-Employed",
    period: "Jan 2026 – Present",
    location: "Center District, Israel · Remote",
    description:
      "Designing and building practical full-stack solutions—from Java and Spring Boot backend services to responsive React interfaces—with a focus on clean architecture, reliable data handling, and intuitive user experiences.",
    highlights: [
      "Develop Java and Spring Boot services, REST APIs, and responsive web interfaces.",
      "Implement secure authentication, CRUD workflows, database integration, and transaction history.",
      "Design MySQL schemas and manage source code with Git and GitHub.",
    ],
  },
  {
    number: "02",
    title: "Operations & Production Manager",
    company: "BISCOTTI",
    period: "Dec 2018 – Jan 2026",
    location: "Bnei Brak, Tel Aviv District · On-site",
    description:
      "Led daily operations and cross-functional teams in a fast-paced production environment.",
    highlights: [
      "Optimized workflows and maintained quality and process consistency.",
      "Solved complex operational problems and managed competing priorities.",
      "Strengthened leadership, stakeholder communication, and analytical decision-making.",
    ],
  },
];

const EDUCATION = [
  {
    number: "01",
    title: "Professional Certificate — Artificial Intelligence",
    institution: "Success College",
    period: "Oct 2025 – Present",
    location: "Tel Aviv, Israel",
    details:
      "Machine Learning fundamentals, relational and NoSQL databases, data analysis, and applied AI.",
  },
  {
    number: "02",
    title: "Professional Certificate — Java Programming",
    institution: "Specter Group",
    period: "Jan 2024 – Mar 2025",
    location: "Tel Aviv, Israel",
    details:
      "Java Core, OOP, Spring Boot, REST APIs, SQL, HTML, CSS, JavaScript, and full-stack projects.",
  },
  {
    number: "03",
    title: "AutoCAD 2019",
    institution: "Organization of Engineers and Architects",
    period: "Nov 2020 – Feb 2021",
    location: "Tel Aviv, Israel",
    details:
      "Professional training in technical drawing and AutoCAD 2019.",
  },
  {
    number: "04",
    title: "Master’s Degree — Food Technology and Processing",
    institution: "Kaliningrad State Technical University",
    period: "2007 – 2012",
    location: "Kaliningrad, Russia",
    details:
      "Advanced studies in food production technology and processing. Grade: A.",
  },
];

const CERTIFICATES = [
  {
    number: "01",
    title: "Qualified Artificial Intelligence (AI) Professional",
    issuer: "Success College",
    date: "Apr 29, 2026",
    image: aiProfessionalCert,
    link: aiProfessionalCert,
  },
  {
    number: "02",
    title: "AI PRO - ChatGPT",
    issuer: "Success College",
    date: "Mar 23, 2026",
    image: chatgptCert,
    link: chatgptCert,
  },
  {
    number: "03",
    title: "AI PRO - Claude",
    issuer: "Success College",
    date: "Mar 27, 2026",
    image: claudeCert,
    link: claudeCert,
  },
  {
    number: "04",
    title: "Java Programming",
    issuer: "Specter Group",
    date: "Mar 26, 2025",
    image: javaCert,
    link: javaCert,
  },
  {
    number: "05",
    title: "React Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jun 23, 2026",
    image: reactCert,
    link: reactCert,
  },
  {
    number: "06",
    title: "AWS Certified Cloud Practitioner Cert Prep",
    issuer: "LinkedIn Learning",
    date: "Apr 18, 2026",
    image: awsCert,
    link: awsCert,
  },
];


// const SERVICES = [
//   {
//     number: "01",
//     title: "Java API Development",
//     text: "I can build a clean and documented Java Spring Boot REST API.",
//     icon: "⌘",
//   },
//   {
//     number: "02",
//     title: "Debug & Fix",
//     text: "I can fix Java, SQL, or Spring Boot bugs and explain the solution.",
//     icon: "↗",
//   },
//   {
//     number: "03",
//     title: "Responsive Websites",
//     text: "I can create a responsive website with HTML, CSS, JavaScript, or React.",
//     icon: "◇",
//   },
//   {
//     number: "04",
//     title: "Python & ML Support",
//     text: "I can help with small Python or Machine Learning projects.",
//     icon: "✦",
//   },
// ];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function FiverrIcon() {
  return <span className="social-mark" aria-hidden="true">F</span>;
}

function CopyEmailButton({ className = "button button-secondary" }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.emailAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button className={`${className} copy-email-button`} type="button" onClick={copyEmail}>
      <FaCopy aria-hidden="true" />
      <span aria-live="polite">{copied ? "Email copied!" : "Copy email"}</span>
    </button>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Back to home">
        TG<span>.</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
  <a href="#about" onClick={closeMenu}>About</a>
  <a href="#skills" onClick={closeMenu}>Skills</a>
  <a href="#projects" onClick={closeMenu}>Projects</a>
  <a href="#experience" onClick={closeMenu}>Experience</a>
  <a href="#education" onClick={closeMenu}>Education</a>
  <a href="#certificates" onClick={closeMenu}>Certificates</a>
  <a href="#contact" onClick={closeMenu}>Contact</a>
    <a href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer" onClick={closeMenu}>
  Resume
</a>
  <a className="nav-cta" href={LINKS.gmail} target="_blank" rel="noreferrer" onClick={closeMenu}>
    Hire me <ArrowIcon />
  </a>
</nav>
    </header>
  );
}

function App() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
<section className="hero" id="home">
  <div className="hero-glow glow-one" />
  <div className="hero-glow glow-two" />

  <div className="hero-content hero-with-photo">
    <div className="hero-text">
      <div className="availability">
        <span />
        Open to junior software engineering roles
      </div>

      <p className="hero-kicker">Hi, I&apos;m</p>

      <h1>
        Tamara
        <br />
        <em>Gegechkori.</em>
      </h1>

      <div className="hero-bottom">
        <p className="hero-intro">
          Junior Java Full Stack Developer focused on building clean backend
          services, REST APIs, responsive web applications, and practical AI/ML
          projects with Java, Spring Boot, SQL, React, and Python.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my projects <ArrowIcon />
          </a>
<a
  className="button button-secondary"
  href={`${import.meta.env.BASE_URL}resume.pdf`}
  target="_blank"
  rel="noreferrer"
>
  <FaFileDownload /> Download Resume
</a>
        </div>
      </div>

      <div className="hero-socials" aria-label="Social links">
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          <span>GitHub</span>
        </a>

        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin aria-hidden="true" />
          <span>LinkedIn</span>
        </a>

        <a href={LINKS.fiverr} target="_blank" rel="noreferrer">
          <span className="social-mark" aria-hidden="true">F</span>
          <span>Fiverr</span>
        </a>
      </div>
    </div>

    <div className="hero-photo-card">
      <img
        src={profilePhoto}
        alt="Tamara Gegechkori"
        decoding="async"
      />
    </div>
  </div>

  <p className="scroll-note">
    Scroll to explore <span>↓</span>
  </p>
</section>

        {/* About section */}
        <section className="section about" id="about">
          <aside className="about-intro">
            <p className="eyebrow">01 / About</p>
            <p className="about-kicker">
              A career transition grounded in structured thinking, responsibility,
              and the confidence to keep learning.
            </p>
            <div className="about-facts" aria-label="Quick facts">
              <div><span>Based in</span><strong>Tel Aviv, Israel</strong></div>
              <div><span>Focus</span><strong>Java Full Stack</strong></div>
              <div><span>Learning</span><strong>AI & Machine Learning</strong></div>
            </div>
          </aside>

          <div className="about-content">
            <h2>
              I build reliable software with <em>curiosity</em> and care.
            </h2>

            <div className="about-body">
              <p>
                I am a Junior Java Full Stack Developer building backend services,
                REST APIs, database-driven applications, and responsive interfaces
                with Java, Spring Boot, SQL, React, and Python.
              </p>
              <p>
                My background in technology, business, and operations shaped a
                practical approach to software: understand the problem, organise
                the work, pay attention to details, and deliver a dependable result.
              </p>
            </div>

            <div className="about-focus" aria-label="Development focus">
              <div><span>01</span><strong>Backend</strong><small>Java · Spring Boot · APIs</small></div>
              <div><span>02</span><strong>Frontend</strong><small>React · JavaScript · CSS</small></div>
              <div><span>03</span><strong>AI & Data</strong><small>Python · ML · Analysis</small></div>
            </div>

            <div className="about-actions">
              <a className="link-pill link-pill-inverse" href="#projects">
                View projects <ArrowIcon />
              </a>
              <a className="about-secondary-link" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">
                Download resume <FaFileDownload />
              </a>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section className="skills section" id="skills">
          <SectionHeading
            eyebrow="02 / Expertise"
            title={<>Tools I use to<br /><em>bring ideas to life.</em></>}
          />
          <div className="skill-grid">
            {SKILL_GROUPS.map((group) => (
              <article
                className={`skill-card skill-card-${group.layout} skill-card-${group.tone}`}
                key={group.title}
              >
                <div className="card-topline">
                  <span>{group.number}</span>
                  <span className="skill-code">{group.code}</span>
                </div>
                <div className="skill-copy">
                  <h3>{group.title}</h3>
                  <p className="skill-summary">{group.summary}</p>
                </div>
                <div className="featured-skills">
                  {group.featured.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <div className="tag-list skill-tag-list">
                  {group.skills
                    .filter((skill) => !group.featured.includes(skill))
                    .map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <a className="skill-evidence" href={group.href}>
                  <span>{group.evidence}</span>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section className="projects section" id="projects">
          <SectionHeading
            eyebrow="03 / Selected work"
           title={
           <>
           Featured
            <br />
            <em>Software Projects.</em>
           </>
          }
          description="A collection of Java, React, Python, REST API, SQL, and Machine Learning projects showcasing my software engineering skills, technical growth, and problem-solving approach."
          />
          <div className="project-list">
            {PROJECTS.map((project) => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-number">{project.number}</div>
                <div className="project-body">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                  decoding="async"
                  />
                  <div className="project-card-flags">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status"><i aria-hidden="true" />{project.status}</span>
                    {project.featured && <span className="project-featured">Featured</span>}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-overview">{project.description}</p>
                  <div className="project-case">
                    <div>
                      <span>Problem</span>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <span>My role</span>
                      <p>{project.role}</p>
                    </div>
                  </div>
                  <div className="project-feature-list">
                    <span>Key features</span>
                    <ul>
                      {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                  </div>
                  <div className="project-stack">
                    <span>Stack</span>
                    <div className="tag-list">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-links">
  <a className="link-pill link-pill-compact" href={project.github} target="_blank" rel="noreferrer">
   <FaGithub /> GitHub
  </a>

  {project.demo && project.demo !== "#" && (
    <a className="link-pill link-pill-compact" href={project.demo} target="_blank" rel="noreferrer">
      Live demo <ArrowIcon />
    </a>
  )}
</div>
              </article>
            ))}
          </div>
          <div className="section-actions">
            <a className="button button-dark all-projects" href={LINKS.github} target="_blank" rel="noreferrer">
              <FaGithub /> View all on GitHub
            </a>
            <a className="link-pill" href={LINKS.fiverr} target="_blank" rel="noreferrer">
              <FiverrIcon /> Fiverr
            </a>
          </div>
        </section>

       {/* Experience section */}
<section className="services section" id="experience">
<SectionHeading
  eyebrow="04 / Experience"
  title={
    <>
      My professional
      <br />
      <em>journey.</em>
    </>
  }
  description="Software development backed by years of operations leadership, analytical problem-solving, and team coordination."
/>

<div className="service-grid">
  {EXPERIENCE.map((item) => (
    <article className="service-card" key={item.title}>
      <span className="service-number">{item.number}</span>
      <span className="experience-period">{item.period}</span>

      <h3>{item.title}</h3>

      <h4>{item.company}</h4>
      <p className="experience-location">{item.location}</p>

      <p>{item.description}</p>
      <ul className="experience-highlights">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  ))}
</div>
</section>

{/* Education section */}
<section className="education section" id="education">
  <SectionHeading
    eyebrow="05 / Education"
    title={
      <>
        Learning that supports
        <br />
        <em>my next chapter.</em>
      </>
    }
    description="Formal education and professional training across software development, artificial intelligence, engineering, and technology."
  />

  <div className="education-grid">
    {EDUCATION.map((item) => (
      <article className="education-card" key={item.title}>
        <div className="education-card-top">
          <span>{item.number}</span>
          <span>{item.period}</span>
        </div>
        <h3>{item.title}</h3>
        <h4>{item.institution}</h4>
        <p className="education-location">{item.location}</p>
        <p>{item.details}</p>
      </article>
    ))}
  </div>
</section>

<section className="certificates section" id="certificates">
  <SectionHeading
    eyebrow="06 / Certificates"
    title={
      <>
        Training and
        <br />
        <em>certifications.</em>
      </>
    }
    description="Certificates and courses that support my development path in Java, AI, cloud, and frontend technologies."
  />

  <div className="certificate-grid">
    {(showAllCertificates ? CERTIFICATES : CERTIFICATES.slice(0, 3)).map((certificate) => (
      <article className="certificate-card" key={certificate.title}>
        {certificate.image && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="certificate-image"
            loading="lazy"
            decoding="async"
          />
        )}

        <span className="service-number">{certificate.number}</span>
        <h3>{certificate.title}</h3>
        <p>{certificate.issuer}</p>
        <p>{certificate.date}</p>

        {certificate.link && certificate.link !== "#" && (
          <a className="link-pill link-pill-compact" href={certificate.link} target="_blank" rel="noreferrer">
            View certificate <ArrowIcon />
          </a>
        )}
      </article>
    ))}
  </div>
  <button
    className="certificate-toggle"
    type="button"
    aria-expanded={showAllCertificates}
    onClick={() => setShowAllCertificates((current) => !current)}
  >
    {showAllCertificates ? "Show fewer certificates" : `View all ${CERTIFICATES.length} certificates`}
    <FaChevronDown aria-hidden="true" />
  </button>
</section>

        {/* Contact section */}
<section className="contact section" id="contact">
  <SectionHeading
    eyebrow="07 / Contact"
    title={
      <>
        Let&apos;s build something
        <br />
        <em>meaningful together.</em>
      </>
    }
    description="I am open to junior software development roles, internships, student positions, and freelance projects where I can contribute, learn, and grow."
  />

  <div className="contact-panel">
    <div>
      <p className="eyebrow">Get in touch</p>
      <h2>Have an opportunity or project in mind?</h2>
      <p className="contact-direct-email">{LINKS.emailAddress}</p>
    </div>

    <div className="contact-actions">
      <a className="button button-primary" href={LINKS.gmail} target="_blank" rel="noreferrer">
  <FaEnvelope /> Open Gmail
</a>

<CopyEmailButton />

<a className="button button-secondary" href={LINKS.github} target="_blank" rel="noreferrer">
  <FaGithub /> GitHub
</a>

<a className="button button-secondary" href={LINKS.linkedin} target="_blank" rel="noreferrer">
  <FaLinkedin /> LinkedIn
</a>

<a className="button button-secondary" href={LINKS.fiverr} target="_blank" rel="noreferrer">
  <FiverrIcon /> Fiverr
</a>
    </div>
  </div>
</section>
<footer className="footer">
  <div className="footer-content">

    <h3>Tamara Gegechkori</h3>

    <p className="footer-role">
      Junior Java Full Stack Developer
    </p>

    <p className="footer-location">
      📍 Tel Aviv, Israel
    </p>

    <p className="footer-message">
      Building reliable software, learning continuously, and creating solutions
      that make a difference.
    </p>

    <div className="footer-links">
      <a className="link-pill link-pill-inverse" href={LINKS.github} target="_blank" rel="noreferrer">
        <FaGithub /> GitHub
      </a>

      <a className="link-pill link-pill-inverse" href={LINKS.linkedin} target="_blank" rel="noreferrer">
     <FaLinkedin /> LinkedIn
 
      </a>

      <a className="link-pill link-pill-inverse" href={LINKS.fiverr} target="_blank" rel="noreferrer">
        <FiverrIcon /> Fiverr
      </a>

      <a className="link-pill link-pill-inverse" href={LINKS.gmail} target="_blank" rel="noreferrer">
       <FaEnvelope /> Open Gmail
      </a>
    </div>

    <p className="footer-copy">
      © 2026 Tamara Gegechkori • Designed and Built with React by Tamara Gegechkori
    </p>

  </div>
</footer>
  </main>
    </>
  );
}

export default App;
