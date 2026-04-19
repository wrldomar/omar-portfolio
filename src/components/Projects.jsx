const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Featured <span className="highlight">Projects</span></h2>
                    <div className="line"></div>
                </div>
                <div className="projects-grid">
                    
                    <div className="project-card glass-card reveal">
                        <div className="project-content">
                            <span className="project-date">Oct 2025 – Dec 2025</span>
                            <h3>Administrateur Backbone Réseau</h3>
                            <p>Designed and deployed an OSPF (Area 0) backbone ensuring interconnection between multiple departmental routers. Configured OSPFv2, site-to-site VPNs for traffic security, and Internet access via NAT/PAT.</p>
                            <div className="project-tech">
                                <span>OSPF</span>
                                <span>VPN</span>
                                <span>Networking</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card glass-card reveal">
                        <div className="project-content">
                            <span className="project-date">Jan 2025 – May 2025</span>
                            <h3>Advisio – Office Management</h3>
                            <p>A desktop management platform for consulting firms built with C++ and Qt Creator. Features include database management (SQL), biometric authentication, smart scheduling, and AI-driven automation for meeting tracking.</p>
                            <div className="project-tech">
                                <span>C++</span>
                                <span>Qt</span>
                                <span>SQL</span>
                                <span>AI</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card glass-card reveal">
                        <div className="project-content">
                            <span className="project-date">Sep 2024 – Dec 2024</span>
                            <h3>Green Harvest</h3>
                            <p>A responsive e-commerce website dedicated to selling agricultural and organic products. Implemented full cart functionality, seamless checkout, and secure data management using MySQL.</p>
                            <div className="project-tech">
                                <span>HTML/CSS/JS</span>
                                <span>PHP</span>
                                <span>MySQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="project-card glass-card reveal">
                        <div className="project-content">
                            <span className="project-date">Jan 2024 – May 2024</span>
                            <h3>Shadows of Liberty</h3>
                            <p>A 2D adventure game with engaging storytelling and interactive gameplay. Developed using SDL 1.2, with custom sprite rendering, animations, and game logic.</p>
                            <div className="project-tech">
                                <span>C/C++</span>
                                <span>SDL 1.2</span>
                                <span>Photoshop</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
