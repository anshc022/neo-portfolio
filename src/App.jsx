import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

const NAV_ITEMS = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

const SKILLS = {
  Languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL'],
  Frontend: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
  Backend: ['Node.js', 'Express', 'FastAPI', 'Django'],
  Tools: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Linux'],
};

const PROJECTS = [
  {
    title: 'Distributed Task Scheduler',
    year: '2025',
    desc: 'Built a fault-tolerant distributed task scheduler using Raft consensus. Handles 10K+ concurrent jobs with automatic failover and leader election.',
    tags: ['Go', 'gRPC', 'Raft', 'Docker'],
    img: 'https://placehold.co/600x340/1A1A1A/FF6B35?text=Task+Scheduler&font=space-mono',
  },
  {
    title: 'ML-Powered Code Review Bot',
    year: '2025',
    desc: 'Fine-tuned CodeBERT model to auto-review pull requests. Catches bugs and style issues with 87% precision. Integrated via GitHub Actions.',
    tags: ['Python', 'PyTorch', 'HuggingFace', 'GitHub API'],
    img: 'https://placehold.co/600x340/1A1A1A/3B82F6?text=Code+Review+Bot&font=space-mono',
  },
  {
    title: 'Real-Time Collaboration Editor',
    year: '2024',
    desc: 'CRDT-based collaborative text editor supporting 50+ concurrent users. Operational transform engine with sub-50ms sync latency.',
    tags: ['TypeScript', 'React', 'WebSocket', 'Yjs'],
    img: 'https://placehold.co/600x340/1A1A1A/22C55E?text=Collab+Editor&font=space-mono',
  },
  {
    title: 'Cloud Infrastructure Visualizer',
    year: '2024',
    desc: 'Interactive visualization tool for AWS cloud topologies. Auto-discovers resources via CloudWatch API and renders dependency graphs.',
    tags: ['Next.js', 'D3.js', 'AWS SDK', 'Terraform'],
    img: 'https://placehold.co/600x340/1A1A1A/A855F7?text=Cloud+Viz&font=space-mono',
  },
];

const EXPERIENCE = [
  {
    period: 'May 2025 — Aug 2025',
    role: 'Software Engineering Intern',
    company: 'TechCorp Inc.',
    desc: 'Developed microservice APIs handling 2M+ daily requests. Reduced p99 latency by 40% through caching and query optimization.',
  },
  {
    period: 'Jan 2024 — Apr 2024',
    role: 'Research Assistant',
    company: 'University ML Lab',
    desc: 'Implemented novel attention mechanisms for transformer models. Published findings at a peer-reviewed workshop.',
  },
  {
    period: 'Summer 2023',
    role: 'Backend Developer Intern',
    company: 'StartupXYZ',
    desc: 'Built REST APIs with Node.js/Express. Designed PostgreSQL schema and migrated legacy MongoDB data store.',
  },
];

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => scrollTo('hero')}>
        {'>'} portfolio.cs
      </div>
      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className="nav-link"
            onClick={() => scrollTo(item.toLowerCase())}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-greeting">$ whoami</p>
        <h1 className="hero-name">
          Hi, I'm <span>Your Name</span>
        </h1>
        <p className="hero-tagline">
          4th year Computer Science student. I build things for the web, cloud, and somewhere in between.
        </p>
        <div className="hero-status">
          <div className="status-dot" />
          Open to opportunities
        </div>
      </div>
      <div className="hero-avatar">
        <div className="avatar-frame">
          <img
            src="https://placehold.co/280x280/1A1A1A/FF6B35?text=:)&font=space-mono"
            alt="Profile"
            className="avatar-img"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section animate-in" id="about">
      <p className="section-label">// about</p>
      <h2 className="section-title">A bit about me</h2>
      <div className="about-grid">
        <div className="about-card">
          <div className="number">4</div>
          <h3>Years of Coding</h3>
          <p>From intro CS courses to building distributed systems</p>
        </div>
        <div className="about-card">
          <div className="number">12+</div>
          <h3>Projects Shipped</h3>
          <p>Full-stack apps, ML pipelines, and open-source contributions</p>
        </div>
        <div className="about-card">
          <div className="number">3</div>
          <h3>Internships</h3>
          <p>Backend, frontend, and research — across startups and enterprise</p>
        </div>
        <div className="about-card">
          <div className="number">∞</div>
          <h3>Curiosity</h3>
          <p>Always learning — currently exploring systems programming and LLMs</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section animate-in" id="skills">
      <p className="section-label">// skills</p>
      <h2 className="section-title">Tech stack</h2>
      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: 20 }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              marginBottom: 10,
            }}
          >
            {category}
          </p>
          <div className="skills-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function Projects() {
  return (
    <section className="section animate-in" id="projects">
      <p className="section-label">// projects</p>
      <h2 className="section-title">What I've built</h2>
      <div className="projects-list">
        {PROJECTS.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-img-wrap">
              <img src={project.img} alt={project.title} className="project-img" />
            </div>
            <div className="project-card-body">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section animate-in" id="experience">
      <p className="section-label">// experience</p>
      <h2 className="section-title">Where I've worked</h2>
      <div className="timeline">
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className="timeline-item">
            <p className="timeline-period">{exp.period}</p>
            <h3 className="timeline-role">{exp.role}</h3>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-desc">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section animate-in" id="contact">
      <p className="section-label">// contact</p>
      <h2 className="section-title">Get in touch</h2>
      <div className="contact-grid">
        <a className="contact-link" href="mailto:you@email.com">
          <span className="contact-icon">✉</span>
          you@email.com
        </a>
        <a
          className="contact-link"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">⌘</span>
          github.com/yourusername
        </a>
        <a
          className="contact-link"
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">◎</span>
          linkedin.com/in/yourusername
        </a>
        <a
          className="contact-link"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">↗</span>
          Resume (PDF)
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Built with <span>React</span> + <span>Vite</span> — {new Date().getFullYear()}
      </p>
    </footer>
  );
}

function App() {
  const containerRef = useScrollReveal();

  return (
    <div className="app" ref={containerRef}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;