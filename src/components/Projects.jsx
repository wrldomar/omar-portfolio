import { useState } from 'react';
import { ArrowIcon, DocIcon, GitHubIcon } from './icons';

const filters = [
    { id: 'all', label: 'All' },
    { id: 'security', label: 'Security & networks' },
    { id: 'web', label: 'Web' },
    { id: 'desktop', label: 'Desktop & games' },
];

const projects = [
    {
        title: 'SOTETEL AI · Network Intrusion Detection',
        category: 'security',
        date: '2025 – 2026',
        org: 'SOTETEL internship',
        featured: true,
        description: 'A cybersecurity prototype validated in a controlled network lab. It captures test traffic, classifies behavior with a Random Forest model, and routes suspicious activity into a secured alert dashboard.',
        highlights: ['Live sensor and five-class detection pipeline', 'Role-based dashboard, alert history, and audit trail', 'Containerized services with automated CI builds'],
        tags: ['Python', 'Scapy', 'scikit-learn', 'FastAPI', 'PostgreSQL', 'React', 'Docker'],
        report: 'reports/sotetel-ai-nids-internship-report.pdf',
    },
    {
        title: 'TicketFlow · Support Platform',
        category: 'web',
        date: 'Sep – Oct 2026',
        org: 'ELITINFO internship',
        description: 'A full-stack customer-support platform where clients, consultants, and admins create, assign, track, and resolve tickets, with intervention reports, attachments, and status history.',
        tags: ['TypeScript', 'Next.js', 'NestJS', 'PostgreSQL', 'Prisma'],
        repo: 'https://github.com/Yassine-Jmai/TicketFlow-',
    },
    {
        title: 'Network Backbone Administration',
        category: 'security',
        date: 'Oct – Dec 2025',
        description: 'Designed an OSPF Area 0 backbone linking departmental routers, with site-to-site VPNs and NAT/PAT for secure connectivity.',
        tags: ['OSPF', 'VPN', 'NAT/PAT', 'Networking'],
        repo: 'https://github.com/Azer-khadhraoui/Pi_Reseau',
    },
    {
        title: 'Advisio · Office Management',
        category: 'desktop',
        date: 'Jan – May 2025',
        description: 'A desktop platform for consulting teams with SQL-backed records, biometric sign-in, scheduling, and AI-assisted meeting tracking.',
        tags: ['C++', 'Qt', 'SQL', 'AI'],
        repo: 'https://github.com/wrldomar/Advisio-Management-System',
    },
    {
        title: 'Green Harvest',
        category: 'web',
        date: 'Sep – Dec 2024',
        description: 'An e-commerce website for agricultural and organic products, with a working cart, checkout flow, and MySQL data storage.',
        tags: ['HTML/CSS/JS', 'PHP', 'MySQL'],
        repo: 'https://github.com/wrldomar/projet-web',
    },
    {
        title: 'Shadows of Liberty',
        category: 'desktop',
        date: 'Jan – May 2024',
        description: 'A 2D adventure game with an original story, sprite animation, and interactive gameplay built with SDL.',
        tags: ['C/C++', 'SDL 1.2', 'Photoshop'],
        repo: 'https://github.com/wrldomar/Shadows-Of-Liberty',
    },
];

const NidsPreview = () => (
    <div className="monitor" aria-hidden="true">
        <div className="monitor-topbar">
            <span className="monitor-brand"><b>N</b> SOTETEL AI · NIDS</span>
            <span className="monitor-status"><span className="pulse"></span> LIVE</span>
        </div>
        <div className="monitor-body">
            <p className="monitor-label">Network intelligence</p>
            <p className="monitor-title">Traffic, understood.</p>
            <div className="signal-chart">
                <svg viewBox="0 0 420 100" preserveAspectRatio="none"><defs><linearGradient id="signalFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#60a5fa" stopOpacity=".28" /><stop offset="1" stopColor="#60a5fa" stopOpacity="0" /></linearGradient></defs><path className="signal-fill" d="M0 75 L28 71 L48 76 L67 67 L84 70 L101 45 L118 62 L137 59 L157 65 L173 56 L191 60 L211 28 L226 51 L246 48 L263 55 L284 43 L301 49 L320 19 L337 46 L355 41 L375 49 L395 35 L420 39 L420 100 L0 100 Z" /><polyline points="0,75 28,71 48,76 67,67 84,70 101,45 118,62 137,59 157,65 173,56 191,60 211,28 226,51 246,48 263,55 284,43 301,49 320,19 337,46 355,41 375,49 395,35 420,39" /></svg>
            </div>
            <div className="monitor-flow">
                <span className="flow-step">CAPTURE</span><span className="flow-step">FEATURES</span><span className="flow-step active">AI MODEL</span><span className="flow-step">ALERTS</span>
            </div>
        </div>
    </div>
);

const ProjectLinks = ({ project }) => (
    <div className="project-links">
        {project.report && <a className="text-link" href={`${import.meta.env.BASE_URL}${project.report}`} target="_blank" rel="noopener noreferrer"><DocIcon /> Read internship report</a>}
        {project.repo && <a className="text-link" href={project.repo} target="_blank" rel="noopener noreferrer"><GitHubIcon /> View on GitHub <ArrowIcon /></a>}
    </div>
);

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const visible = projects.filter((project) => filter === 'all' || project.category === filter);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="kicker">Selected work</span>
                    <h2>Ideas made <span className="highlight">real.</span></h2>
                    <p>Software, AI, and network engineering projects, built to learn by solving practical problems.</p>
                </div>
                <div className="filters reveal" role="group" aria-label="Filter projects">
                    {filters.map((f) => (
                        <button key={f.id} type="button" className="filter" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>{f.label}</button>
                    ))}
                </div>
                <div className="projects-grid reveal">
                    {visible.map((project) => project.featured ? (
                        <article className="project featured card" key={project.title}>
                            <div className="project-body">
                                <div className="project-top"><span className="project-date">{project.date}</span><span>{project.org}</span></div>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <ul className="highlights">{project.highlights.map((item) => <li key={item}>{item}</li>)}</ul>
                                <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                                <ProjectLinks project={project} />
                            </div>
                            <NidsPreview />
                        </article>
                    ) : (
                        <article className="project card hoverable" key={project.title}>
                            <div className="project-top"><span className="project-date">{project.date}</span>{project.org && <span>{project.org}</span>}</div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                            <ProjectLinks project={project} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
