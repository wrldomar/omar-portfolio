import { CodeIcon, ShieldIcon, SparkIcon } from './icons';

const focusAreas = [
    { icon: <CodeIcon />, title: 'Full-stack products', text: 'React and Next.js front ends backed by NestJS, FastAPI, and PostgreSQL.' },
    { icon: <SparkIcon />, title: 'Applied AI', text: 'Machine-learning pipelines and LLM-powered agentic applications.' },
    { icon: <ShieldIcon />, title: 'Networks & security', text: 'Intrusion detection, secure APIs, and network infrastructure.' },
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="kicker">About me</span>
                    <h2>Curious by nature.<br /><span className="highlight">Builder by choice.</span></h2>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>I’m a <strong>computer engineering student at ESPRIT</strong> who likes working where software meets real-world systems. I build full-stack applications, experiment with machine learning, and keep learning how to make what I ship more secure and reliable.</p>
                        <p>At <strong>SOTETEL</strong>, I built an AI-assisted network intrusion detection platform, from the traffic sensor and model to the API, database, and operator dashboard. At <strong>ELITINFO</strong>, I worked on TicketFlow, a full-stack customer-support platform.</p>
                        <p>I value thoughtful engineering, clear communication, and learning through hands-on work.</p>
                    </div>
                    <div className="focus-list reveal">
                        {focusAreas.map((area) => (
                            <div className="focus-item card" key={area.title}>
                                <span className="focus-icon">{area.icon}</span>
                                <div>
                                    <h3>{area.title}</h3>
                                    <p>{area.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
