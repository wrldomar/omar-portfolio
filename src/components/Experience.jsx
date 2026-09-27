const Experience = () => {
    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-kicker">Where I’ve learned</span>
                    <h2>Experience & <span className="highlight">education.</span></h2>
                    <div className="line"></div>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>AI & Network Security Internship</h4>
                                <p className="timeline-subtitle">SOTETEL · 2025–2026 · Tunisia</p>
                                <p>Built an AI-assisted network intrusion detection prototype, connecting a live traffic sensor to a machine-learning pipeline, secured API, PostgreSQL persistence, and React monitoring dashboard.</p>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>IT Security & Infrastructure Intern</h4>
                                <p className="timeline-subtitle">MULTICOM · July 2024 · Tunis, Tunisia</p>
                                <p>Supported the technical team with IT security system setup, basic configuration, and equipment testing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
