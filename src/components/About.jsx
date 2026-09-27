const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-kicker">A little about me</span>
                    <h2>Curious by nature.<br /><span className="highlight">Builder by choice.</span></h2>
                    <div className="line"></div>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>I’m a computer engineering student at ESPRIT who likes working where software meets real-world systems. I build full-stack applications, experiment with machine learning, and keep learning how to make the things I ship more secure and reliable.</p>
                        <p>Recently, I worked on an AI-assisted network intrusion detection platform—from the traffic sensor and model to the API, database, and operator dashboard. I value thoughtful engineering, clear communication, and learning through hands-on work.</p>

                        <div className="timeline">
                            <h3 className="timeline-title">Education</h3>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>Computer Engineering Degree</h4>
                                <p className="timeline-subtitle">ESPRIT · 2023–2028</p>
                                <p>Ariana, Tunisia</p>
                            </div>
                        </div>
                    </div>
                    <aside className="about-aside reveal">
                        <p className="aside-heading">Areas I like working in</p>
                        <div className="about-stat"><strong>01</strong><span>Full-stack product development</span></div>
                        <div className="about-stat"><strong>02</strong><span>Applied AI and machine learning</span></div>
                        <div className="about-stat"><strong>03</strong><span>Networks and cybersecurity</span></div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default About;
