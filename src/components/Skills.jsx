const skillGroups = [
    { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Vite'] },
    { title: 'Backend & data', skills: ['NestJS', 'Node.js', 'Express', 'FastAPI', 'PHP', 'Symfony', 'Prisma', 'PostgreSQL', 'MySQL'] },
    { title: 'AI & machine learning', skills: ['Python', 'scikit-learn', 'LLM agents', 'AI fundamentals'] },
    { title: 'Security & networks', skills: ['Network security', 'Scapy', 'OSPF', 'VPN', 'NAT/PAT', 'JWT auth'] },
    { title: 'Systems & desktop', skills: ['C / C++', 'Qt', 'SDL', 'Linux'] },
    { title: 'Tools & platforms', skills: ['Git & GitHub', 'Docker', 'CI pipelines', 'Hedera'] },
];

const Skills = () => {
    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <div className="section-header reveal">
                    <span className="kicker">Toolkit</span>
                    <h2>Tools I build <span className="highlight">with.</span></h2>
                    <p>Technology is a means to an end. These are the tools I’ve used across my projects and internships.</p>
                </div>
                <div className="skills-grid reveal">
                    {skillGroups.map((group, index) => (
                        <div className="skill-group card" key={group.title}>
                            <h3><span>{String(index + 1).padStart(2, '0')}</span>{group.title}</h3>
                            <ul className="tags">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
