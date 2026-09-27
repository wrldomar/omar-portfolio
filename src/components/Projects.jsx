const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
);

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-kicker">Selected work</span>
                    <h2>Ideas made <span className="highlight">real.</span></h2>
                    <p>A mix of software, AI, and network engineering projects—built to learn by solving practical problems.</p>
                    <div className="line"></div>
                </div>
                <div className="projects-grid">
                    <article className="project-card featured glass-card reveal">
                        <div className="project-content">
                            <div className="project-topline">
                                <span className="project-date">Internship project · 2025–2026</span>
                                <span className="project-org">SOTETEL · Cybersecurity</span>
                            </div>
                            <h3>SOTETEL AI — Network Intrusion Detection</h3>
                            <p>A cybersecurity prototype validated in a controlled network lab. It captures test traffic, classifies behavior with a Random Forest model, and routes suspicious activity into a secured alert dashboard.</p>
                            <ul className="project-highlights">
                                <li>Live sensor and five-class detection pipeline</li>
                                <li>Role-based dashboard, alert history, and audit trail</li>
                                <li>Containerized services with automated CI builds</li>
                            </ul>
                            <div className="project-tech">
                                <span>Python</span><span>Scapy</span><span>scikit-learn</span><span>FastAPI</span><span>PostgreSQL</span><span>React</span><span>Docker</span>
                            </div>
                            <div className="project-actions">
                                <a className="project-link" href={`${import.meta.env.BASE_URL}reports/sotetel-ai-nids-internship-report.pdf`} target="_blank" rel="noopener noreferrer">Read internship report <ArrowIcon /></a>
                            </div>
                        </div>
                    </article>

                    <article className="project-card glass-card reveal">
                        <div className="project-content">
                            <div className="project-topline"><span className="project-date">Oct – Dec 2025</span></div>
                            <h3>Network Backbone Administration</h3>
                            <p>Designed an OSPF Area 0 backbone linking departmental routers, with site-to-site VPNs and NAT/PAT for secure connectivity.</p>
                            <div className="project-tech"><span>OSPF</span><span>VPN</span><span>NAT/PAT</span><span>Networking</span></div>
                        </div>
                    </article>

                    <article className="project-card glass-card reveal">
                        <div className="project-content">
                            <div className="project-topline"><span className="project-date">Jan – May 2025</span></div>
                            <h3>Advisio · Office Management</h3>
                            <p>A desktop platform for consulting teams with SQL-backed records, biometric sign-in, scheduling, and AI-assisted meeting tracking.</p>
                            <div className="project-tech"><span>C++</span><span>Qt</span><span>SQL</span><span>AI</span></div>
                        </div>
                    </article>

                    <article className="project-card glass-card reveal">
                        <div className="project-content">
                            <div className="project-topline"><span className="project-date">Sep – Dec 2024</span></div>
                            <h3>Green Harvest</h3>
                            <p>An e-commerce website for agricultural and organic products, with a working cart, checkout flow, and MySQL data storage.</p>
                            <div className="project-tech"><span>HTML/CSS/JS</span><span>PHP</span><span>MySQL</span></div>
                        </div>
                    </article>

                    <article className="project-card glass-card reveal">
                        <div className="project-content">
                            <div className="project-topline"><span className="project-date">Jan – May 2024</span></div>
                            <h3>Shadows of Liberty</h3>
                            <p>A 2D adventure game with original story, sprite animation, and interactive gameplay built with SDL.</p>
                            <div className="project-tech"><span>C/C++</span><span>SDL 1.2</span><span>Photoshop</span></div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;
