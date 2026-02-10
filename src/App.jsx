import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Menu, X } from 'lucide-react';
import profileImg from "../src/kubin.jpeg";
import './index.css'

// Router Setup
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return children(currentPath, setCurrentPath);
};

const Link = ({ to, children, className, onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.hash = to;
    if (onClick) onClick();
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

// Navbar Component
const Navbar = ({ currentPath }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <span className="logo-letter">K</span>
          <span className="logo-letter">S</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="nav-menu-desktop">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${currentPath === item.path ? 'nav-link-active' : ''}`}
            >
              {item.name}
              <span className="nav-link-underline" />
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="nav-mobile-menu">
          <div className="nav-mobile-menu-content">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-mobile-link ${currentPath === item.path ? 'nav-mobile-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">
              Kubinsamuvel
            </h3>
            <p className="footer-description">
              Python Full-Stack Developer passionate about building scalable web applications.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <div className="footer-contact-links">
              <a href="mailto:Kubinsamuvel@gmail.com" className="footer-contact-item">
                <Mail size={16} />
                <span>Kubinsamuvel@gmail.com</span>
              </a>
              <a href="tel:+916374143168" className="footer-contact-item">
                <Phone size={16} />
                <span>+91 6374143168</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="footer-social-links">
              <a 
                href="https://github.com/KubinSamuvel026" 
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/kubin-samuvel/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 Kubinsamuvel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Debug: Temporary overflow detector for Home and Contact pages
const OverflowDebugger = ({ enabled }) => {
  useEffect(() => {
    if (!enabled) return;

    const overflowEls = [...document.querySelectorAll('*')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.right > (window.innerWidth - 1);
    });

    if (overflowEls.length) {
      console.log('Detected overflowing elements:', overflowEls);
      overflowEls.forEach((el) => {
        el.__origOutline = el.style.outline;
        el.style.outline = '2px solid rgba(38, 37, 37, 0.9)';
      });
    } else {
      console.log('No overflowing elements detected.');
    }

    return () => {
      overflowEls.forEach((el) => {
        if (el && el.__origOutline !== undefined) el.style.outline = el.__origOutline;
      });
    };
  }, [enabled]);

  return null;
};

// Home Page
const HomePage = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const radius = 300; // small movement radius
    const x = (Math.random() * 2 - 1) * radius;
    const y = (Math.random() * 2 - 1) * radius;
    setOffset({ x, y });
  };

  return (
    <div className="home-container">
      <div className="home-gradient-bg" />

      <div className="home-particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      <div className="home-content">
        {/* ===== ORIGINAL CONTENT (UNCHANGED) ===== */}
        <h1 className="home-title">Kubinsamuvel</h1>

        <p className="home-subtitle">
          Python Full-Stack Developer building scalable, clean, and impactful web applications
        </p>

        <p className="home-description">
          Focused on performance, modern UI, and real-world problem solving
        </p>

        <div className="home-cta-group">
          <Link to="/projects" className="btn btn-primary">
            <span className="btn-text">View Projects</span>
            <span className="btn-ripple"></span>
          </Link>

          <Link to="/contact" className="btn btn-secondary">
            <span className="btn-text">Contact Me</span>
            <span className="btn-ripple"></span>
          </Link>
        </div>

        {/* ===== NEW BUTTONS (ADDED ONLY) ===== */}
        <div className="hire-cta-wrapper mt-8">
          <a href="/KUBIN_SAMUVEL_resume.pdf" download className="btn btn-primary mr-4">
            Hire Me
          </a>

          <button
            className="btn btn-secondary runaway-btn "
            onMouseEnter={moveButton}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            Not Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};




// About Page
const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="page-title">
          About Me
        </h1>
        
        <div className="about-grid">
          <div className="about-text-section">
            <div className="about-paragraphs">
              <p className="about-paragraph">
                I'm a passionate <span className="highlight-primary">Python Full-Stack Developer</span> dedicated 
                to creating efficient, scalable systems that make a real impact.
              </p>
              <p className="about-paragraph">
                With a strong foundation in backend development, I specialize in building robust APIs, 
                optimizing database performance, and architecting scalable microservices. My backend expertise 
                is complemented by modern frontend skills that allow me to deliver complete, polished applications.
              </p>
              <p className="about-paragraph">
                I'm passionate about <span className="highlight-secondary">clean, maintainable code</span> and 
                believe that great software is built on solid architecture and thoughtful design patterns.
              </p>
              <p className="about-paragraph">
                Continuous learning is at the core of my approach. I stay current with emerging technologies 
                and best practices, always seeking ways to improve my craft and deliver better solutions.
              </p>
              <p className="about-paragraph">
                Whether I'm designing RESTful APIs, implementing complex business logic, or crafting 
                responsive user interfaces, my goal is always the same: build software that solves real 
                problems and provides genuine value to users.
              </p>
            </div>
            
            <div className="about-skills-grid">
              <div className="skill-card skill-card-primary">
                <h3 className="skill-card-title">Backend</h3>
                <p className="skill-card-text">Python, Django, Flask, FastAPI, PostgreSQL</p>
              </div>
              <div className="skill-card skill-card-secondary">
                <h3 className="skill-card-title">Frontend</h3>
                <p className="skill-card-text">React, JavaScript, HTML5, CSS3, Tailwind</p>
              </div>
            </div>
          </div>
          
          <div className="about-image-section">
            <div className="about-image-wrapper">
              <div className="about-image-glow" />
              <div className="about-image-container">
                <img src={profileImg} alt="Profile" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Projects Page
const ProjectsPage = () => {
  const backendProjects = [
    {
  id: 1,
  title: "Smart Expense Tracker",
  description:
    "A full-stack expense management platform that allows users to track daily expenses, categorize spending, and visualize financial insights through interactive charts. Includes secure authentication, budget planning, and real-time analytics to help users manage personal finances effectively.",
  tech: ["Python", "Django", "React", "PostgreSQL"],
  live: "https://smart-expense-tacker.vercel.app/",
  github: "https://github.com/KubinSamuvel026/SMART_EXPENSE_TACKER/tree/main/frontend/expense-frontend",
},
{
  id: 2,
  title: "ATS Resume Analyzer Application",
  description:
    "An AI-powered Applicant Tracking System (ATS) resume analyzer that evaluates resumes against job roles. The system extracts skills, identifies gaps, provides ATS optimization tips, and scores resumes using AI integration, delivering structured feedback through a modern frontend interface.",
  tech: ["Django", "React", "REST API", "AI Integration"],
  live: "https://ai-resume-hg5odtdum-kubinsamuve1s-projects.vercel.app/",
  github: "https://github.com/KubinSamuvel026/ai-resume",
},
{
  id: 3,
  title: "Real-Time Chat Application",
  description:
    "A real-time messaging application built using WebSockets that supports user authentication, instant message delivery, and persistent chat history. Designed with a scalable backend and responsive frontend to provide seamless real-time communication.",
  tech: ["Django", "React", "WebSocket"],
  live: "#",
  github: "#",
},
  ]

  const frontendProjects = [
  {
    id: 4,
    title: "Movie Search Application",
    description:
      "A frontend application that allows users to search and explore movies in real time using a third-party movie API. Features include dynamic search results, movie details view, responsive UI, and optimized API handling for smooth user experience.",
    tech: ["React", "JavaScript", "API Integration", "CSS"],
    live: "https://movie-search-application-alpha.vercel.app/",
    github: "https://github.com/KubinSamuvel026/MOVIE_SEARCH_APPLICATION",
  },
  {
    id: 5,
    title: "Notes Application",
    description:
      "A clean and user-friendly notes management application that allows users to create, edit, and organize notes efficiently. Built with a responsive frontend and supports real-time updates, making it suitable for daily productivity use.",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://notes-application-jet-omega.vercel.app/",
    github: "https://github.com/KubinSamuvel026/Notes_Application",
  },
  {
    id: 6,
    title: "Weather Application (Frontend)",
    description:
      "A frontend application that displays real-time weather information for any location. Features include current weather data, 5-day forecasts, and a responsive UI that adapts to different screen sizes.",
    tech: ["React", "JavaScript", "API Integration", "CSS"],
    live: "#",
    github: "#",
  },
];


  const ProjectSection = ({ title, subtitle, projects }) => (
    <div className="projects-section">
      <h1 className="page-title">
        {title}
      </h1>
      {subtitle && (
        <h2 className="projects-subtitle">
          {subtitle}
        </h2>
      )}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="project-card-glow" />
            <div className="project-icon">
              <span>📁</span>
            </div>

            <h3 className="project-title">
              {project.title}
            </h3>

            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech-tags">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="tech-tag"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a 
                href={project.live}
                className="project-link project-link-primary"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href={project.github}
                className="project-link project-link-secondary"
              >
                <span>GitHub</span>
                <Github size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="projects-container">
      <ProjectSection title="Projects" projects={backendProjects} />
      
      <div className="projects-divider">
        <ProjectSection 
          title="" 
          subtitle="Frontend Projects" 
          projects={frontendProjects} 
        />
      </div>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="page-title">
          Get In Touch
        </h1>
        
        <div className="contact-grid">
          <div className="contact-info-section">
            <h2 className="contact-section-title">Contact Information</h2>
            
            <div className="contact-info-cards">
              <div className="contact-info-card contact-info-card-primary">
                <div className="contact-info-icon contact-info-icon-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Email</p>
                  <a href="mailto:Kubinsamuvel@gmail.com" className="contact-info-value">
                    Kubinsamuvel@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="contact-info-card contact-info-card-secondary">
                <div className="contact-info-icon contact-info-icon-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="contact-info-label">Phone</p>
                  <a href="tel:+916374143168" className="contact-info-value">
                    +91 6374143168
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-social-section">
              <h3 className="contact-social-title">Social Links</h3>
              <div className="contact-social-links">
                <a 
                  href="https://github.com/KubinSamuvel026" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/kubin-samuvel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-section">
            <h2 className="contact-section-title">Send a Message</h2>
            <div className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea 
                  rows="5"
                  className="form-textarea"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  alert('Message sent! (This is a demo)');
                }}
                className="btn btn-primary btn-full"
              >
                <span className="btn-text">Send Message</span>
                <span className="btn-ripple"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
const App = () => {
  return (
    <Router>
      {(currentPath) => (
        <div className="app-container">
          <Navbar currentPath={currentPath} />
          <OverflowDebugger enabled={currentPath === '/' || currentPath === '/contact'} />
          
          <main>
            {currentPath === '/' && <HomePage />}
            {currentPath === '/about' && <AboutPage />}
            {currentPath === '/projects' && <ProjectsPage />}
            {currentPath === '/contact' && <ContactPage />}
          </main>
          
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;