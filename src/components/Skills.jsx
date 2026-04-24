const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header reveal">
                    <h2>My <span className="highlight">Skills</span></h2>
                    <div className="line"></div>
                </div>
                <div className="skills-grid reveal">
                    <div className="skill-category glass-card">
                        <h3>Back-End</h3>
                        <div className="skill-tags">
                            <span>Node.js</span>
                            <span>Express.js</span>
                            <span>PHP</span>
                            <span>Symfony</span>
                            <span>Java</span>
                        </div>
                    </div>
                    <div className="skill-category glass-card">
                        <h3>Front-End</h3>
                        <div className="skill-tags">
                            <span>JavaScript</span>
                            <span>TypeScript</span>
                            <span>HTML5</span>
                            <span>CSS3</span>
                        </div>
                    </div>
                    <div className="skill-category glass-card">
                        <h3>Languages</h3>
                        <div className="skill-tags">
                            <span>C</span>
                            <span>C++</span>
                            <span>Qt Framework</span>
                            <span>SQL (MySQL)</span>
                        </div>
                    </div>
                    <div className="skill-category glass-card">
                        <h3>Tools & Emerging Tech</h3>
                        <div className="skill-tags">
                            <span>Git & GitHub</span>
                            <span>GitHub Actions</span>
                            <span>Testing</span>
                            <span>AI Fundamentals</span>
                            <span>Generative AI</span>
                        </div>
                    </div>
                </div>

                <div className="tools-platforms glass-card reveal">
                    <h3>Outils & Plateformes</h3>
                    <div className="tools-platforms-line"></div>

                    <div className="tool-progress-item">
                        <div className="tool-progress-head">
                            <div className="tool-label">
                                <span className="tool-icon">Git</span>
                                <span>Git</span>
                            </div>
                            <span className="tool-percent">85%</span>
                        </div>
                        <div className="tool-track" aria-label="Git skill level">
                            <div className="tool-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>

                    <div className="tool-progress-item">
                        <div className="tool-progress-head">
                            <div className="tool-label">
                                <span className="tool-icon">GH</span>
                                <span>GitHub Actions</span>
                            </div>
                            <span className="tool-percent">90%</span>
                        </div>
                        <div className="tool-track" aria-label="GitHub Actions skill level">
                            <div className="tool-fill" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                </div>
                
                <div className="certifications reveal">
                    <div className="cert-card glass-card">
                        <div className="cert-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        </div>
                        <div className="cert-info">
                            <h3>Introduction to Cyber Security</h3>
                            <p>Cisco Networking Academy • Issued April 2025</p>
                            <p className="cert-skills">Fundamentals of cybersecurity, cyber threats, and protection strategies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
