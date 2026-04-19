const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header reveal">
                    <h2>About <span className="highlight">Me</span></h2>
                    <div className="line"></div>
                </div>
                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>I am a third-year computer engineering student at ESPRIT, deeply passionate about building scalable web applications and exploring the realms of Artificial Intelligence. I thrive in collaborative environments and am constantly motivated to learn and apply AI-driven technologies to solve real-world problems.</p>
                        
                        <div className="timeline">
                            <h3 className="timeline-title">Education</h3>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <h4>Computer Engineering Degree</h4>
                                <p className="timeline-subtitle">ESPRIT (Private Higher School of Engineering and Technology) | 2023 - 2028</p>
                                <p>Ariana, Tunisia</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
