import { CapIcon, PinIcon } from './icons';

const jobs = [
    {
        role: 'Software Development Intern',
        company: 'ELITINFO',
        date: 'Sep – Oct 2026',
        location: 'Remote',
        latest: true,
        summary: 'Worked on TicketFlow, a full-stack customer-support platform.',
        points: [
            'Role-based workspaces for clients, consultants, and administrators',
            'Ticket lifecycle with assignment, status history, and automatic closure',
            'Intervention reports, file attachments, and email notifications',
        ],
        tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'TypeScript'],
    },
    {
        role: 'AI & Network Security Intern',
        company: 'SOTETEL',
        date: '2025 – 2026',
        location: 'Tunisia',
        summary: 'Built an AI-assisted network intrusion detection prototype, end to end.',
        points: [
            'Live traffic sensor feeding a five-class Random Forest model',
            'Secured FastAPI backend with PostgreSQL persistence',
            'React monitoring dashboard with alerts, history, and audit trail',
        ],
        tags: ['Python', 'scikit-learn', 'FastAPI', 'React', 'Docker'],
    },
    {
        role: 'IT Security & Infrastructure Intern',
        company: 'MULTICOM',
        date: 'July 2024',
        location: 'Tunis, Tunisia',
        summary: 'Supported the technical team on security and infrastructure work.',
        points: [
            'IT security system setup and basic configuration',
            'Equipment testing alongside the technical team',
        ],
        tags: ['IT security', 'Infrastructure'],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="section section-alt">
            <div className="container experience-layout">
                <div className="experience-intro reveal">
                    <span className="kicker">Experience</span>
                    <h2>Where I’ve <span className="highlight">learned.</span></h2>
                    <p>Three internships across software, AI, and security, each one shipping real systems with real teams.</p>
                    <div className="education card">
                        <span className="edu-icon"><CapIcon /></span>
                        <div>
                            <span className="edu-label">Education</span>
                            <h3>Computer Engineering Degree</h3>
                            <p>ESPRIT · 2023 – 2028</p>
                            <p>Ariana, Tunisia</p>
                        </div>
                    </div>
                </div>

                <ol className="timeline">
                    {jobs.map((job) => (
                        <li className={`timeline-entry reveal${job.latest ? ' latest' : ''}`} key={job.company}>
                            <span className="timeline-node" aria-hidden="true">{job.company[0]}</span>
                            <article className="job card">
                                <header className="job-head">
                                    <div>
                                        <h3>{job.role}</h3>
                                        <p className="job-company">{job.company}</p>
                                    </div>
                                    <div className="job-meta">
                                        {job.latest && <span className="latest-badge">Latest</span>}
                                        <span className="job-date">{job.date}</span>
                                    </div>
                                </header>
                                <p className="job-location"><PinIcon /> {job.location}</p>
                                <p className="job-summary">{job.summary}</p>
                                <ul className="job-points">{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                                <ul className="tags">{job.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;
