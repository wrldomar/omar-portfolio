import profilePhoto from '../assets/profile.png';
import { ArrowIcon, CapIcon, GitHubIcon, LinkedInIcon, ShieldIcon } from './icons';

const stats = [
    { value: '3', label: 'Internships completed' },
    { value: '6', label: 'Projects shipped' },
    { value: '4', label: 'Certifications earned' },
    { value: '2028', label: 'Expected graduation' },
];

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-layout">
                    <div className="hero-text fade-in">
                        <span className="availability"><span className="pulse" aria-hidden="true"></span>Open to internships & collaborations</span>
                        <h1 className="hero-name">Omar <span className="highlight">Belhadj</span></h1>
                        <p className="hero-role">Computer engineering student building full-stack software, applied AI, and secure systems.</p>
                        <p className="hero-summary">
                            I turn complex ideas into clear, dependable products, from support platforms and agentic AI apps to network intrusion detection.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary">See my work <ArrowIcon /></a>
                            <a href="#contact" className="btn btn-secondary">Get in touch</a>
                            <a className="icon-link" href="https://github.com/wrldomar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                            <a className="icon-link" href="https://www.linkedin.com/in/omar-belhaj-a8571b295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                        </div>
                    </div>

                    <div className="portrait fade-in-late">
                        <div className="portrait-frame">
                            <img src={profilePhoto} alt="Omar Belhadj" width="320" height="400" />
                        </div>
                        <div className="portrait-chip chip-focus">
                            <span className="chip-icon"><ShieldIcon /></span>
                            <span><strong>AI & Security</strong><span>Full-stack · ML · Networks</span></span>
                        </div>
                        <div className="portrait-chip chip-school">
                            <span className="chip-icon"><CapIcon /></span>
                            <span><strong>ESPRIT</strong><span>Computer Engineering</span></span>
                        </div>
                    </div>
                </div>

                <div className="stats fade-in-late">
                    {stats.map((stat) => (
                        <div className="stat" key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
