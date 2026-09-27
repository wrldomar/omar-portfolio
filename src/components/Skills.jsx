const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-kicker">Tools I use</span>
                    <h2>My <span className="highlight">toolkit.</span></h2>
                    <p>Technology is a means to an end. These are the tools I’ve used to build and explore.</p>
                    <div className="line"></div>
                </div>
                <div className="skills-grid reveal">
                    <div className="skill-category glass-card">
                        <span className="skill-icon">01</span>
                        <h3>Web development</h3>
                        <div className="skill-tags"><span>React</span><span>JavaScript</span><span>TypeScript</span><span>HTML & CSS</span><span>Vite</span></div>
                    </div>
                    <div className="skill-category glass-card">
                        <span className="skill-icon">02</span>
                        <h3>Backend & data</h3>
                        <div className="skill-tags"><span>Node.js</span><span>Express</span><span>FastAPI</span><span>PHP</span><span>Symfony</span><span>SQL</span></div>
                    </div>
                    <div className="skill-category glass-card">
                        <span className="skill-icon">03</span>
                        <h3>AI & security</h3>
                        <div className="skill-tags"><span>Python</span><span>scikit-learn</span><span>Scapy</span><span>Network security</span><span>AI fundamentals</span></div>
                    </div>
                    <div className="skill-category glass-card">
                        <span className="skill-icon">04</span>
                        <h3>Systems & tools</h3>
                        <div className="skill-tags"><span>C / C++</span><span>Qt</span><span>Docker</span><span>Git & GitHub</span><span>Linux</span><span>PostgreSQL</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
