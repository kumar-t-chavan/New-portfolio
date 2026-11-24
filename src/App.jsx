
import React, { useEffect } from "react";
import "./App.css";
import kumar from "./images/kumar.jpg";

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Python",
  "MySQL", "Git", "GitHub", "Bootstrap", "Tailwind CSS",
  "Manual Testing", "SQL", "C#", ".NET"
];

const projects = [
  {
    title: "Recruitment Management System",
    desc: "A recruitment management system to manage candidates, records and recruitment workflows.",
    tech: ["React", "Python", "Flask", "MySQL"],
    icon: "👨‍💼",
  },
  {
    title: "StudyShare",
    desc: "A notes sharing platform where students can upload, share and download study materials.",
    tech: ["React", "Python", "Flask", "MySQL"],
    icon: "📚",
  },
  {
    title: "Personal Portfolio",
    desc: "A responsive personal portfolio website showcasing skills, projects and contact details.",
    tech: ["React", "CSS", "JavaScript"],
    icon: "💻",
  },
];

function App() {
  // Sucify Chat Widget
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[data-inbox="e3474f9a-11ff-4957-8c42-2acddf6809e3"]'
    );

    if (existingScript) return;

    const script = document.createElement("script");

    script.src = "https://app.sucify.cloud/svc-chat/public/sdk.js";
    script.setAttribute("data-inbox", "e3474f9a-11ff-4957-8c42-2acddf6809e3");
    script.setAttribute("data-widget-origin", "https://widget.sucify.cloud");
    script.async = true;

    document.body.appendChild(script);
  }, []);

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">K<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>
          <h1>Kumar <span>Chavan</span></h1>
          <h2>Frontend Developer & QA Learner</h2>

          <p className="hero-description">
            I build responsive web applications using React and JavaScript.
            I am also learning software testing and improving my programming skills.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>

          <div className="social-links">
            <a href="https://github.com/kumar-t-chavan" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="profile-circle">
            <div className="profile-icon">
              <img src={kumar} alt="Kumar Chavan" />
            </div>
          </div>
          <div className="floating-card">
            <span>💻</span> Developer
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div className="about-card">
            <span className="about-icon">🎓</span>
            <h3>Education</h3>
            <p>B.Sc. Information Technology</p>
          </div>

          <div className="about-text">
            <h3>I'm passionate about technology and web development.</h3>
            <p>
              I am an IT student interested in frontend development,
              software development and quality assurance. I enjoy learning
              new technologies and building practical projects.
            </p>
            <p>
              I work with React, JavaScript, Python and MySQL.
              I am also developing my skills in manual testing,
              debugging and problem solving.
            </p>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-heading">
          <p>WHAT I KNOW</p>
          <h2>My <span>Skills</span></h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>My <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-list">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a href="#contact" className="project-link">
                Let's Discuss ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact <span>Me</span></h2>
        </div>

        <div className="contact-card">
          <h3>Let's work together!</h3>
          <p>
            I'm interested in entry-level IT opportunities,
            web development and software testing.
          </p>

          <a href="mailto:your-email@example.com" className="btn primary">
            Send Email ↗
          </a>

          <div className="contact-links">
            <a href="https://github.com/kumar-t-chavan" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 Kumar Chavan | Built with React</p>
      </footer>
    </div>
  );
}

export default App;
