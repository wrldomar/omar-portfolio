const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container">
                <div className="hero-layout">
                    <div className="hero-content fade-in">
                        <p className="eyebrow">Computer engineering student · Tunisia</p>
                        <h1 className="name">Belhadj <span className="text-gradient">Omar</span></h1>
                        <h2 className="title">I build useful software and explore intelligent systems.</h2>
                        <p className="summary">
                            Full-stack development, applied AI, and cybersecurity. I enjoy turning complex ideas into clear, dependable products—from web applications to network monitoring tools.
                        </p>
                        <div className="hero-cta">
                            <a href="#projects" className="btn btn-primary">Explore my work <span aria-hidden="true">↘</span></a>
                            <a href="#contact" className="btn btn-secondary">Let’s connect</a>
                        </div>
                        <div className="hero-social">
                            <span className="hero-social-label">Find me online</span>
                            <div className="social-links">
                                <a href="https://github.com/wrldomar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73 .65 16 2.48a13.38 13.38 0 0 0-7 0C6.27 .65 5.09 .65 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/omar-belhaj-a8571b295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual reveal" aria-label="SOTETEL AI network intrusion detection project preview">
                        <div className="monitor-window">
                            <div className="monitor-topbar">
                                <div className="monitor-brand"><span className="monitor-brand-mark">N</span> SOTETEL AI · NIDS</div>
                                <span className="monitor-status"><span className="status-dot" /> LAB PROTOTYPE</span>
                            </div>
                            <div className="monitor-body">
                                <p className="monitor-label">Network intelligence</p>
                                <h3 className="monitor-title">Traffic, understood.</h3>
                                <p className="monitor-copy">From packet capture to actionable security alerts.</p>
                                <div className="signal-chart" aria-hidden="true">
                                    <svg viewBox="0 0 420 105" preserveAspectRatio="none"><defs><linearGradient id="signalFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#bde875" stopOpacity=".22" /><stop offset="1" stopColor="#bde875" stopOpacity="0" /></linearGradient></defs><path className="signal-fill" d="M0 79 L28 75 L48 80 L67 71 L84 74 L101 48 L118 66 L137 63 L157 69 L173 60 L191 64 L211 31 L226 55 L246 52 L263 59 L284 47 L301 53 L320 22 L337 50 L355 45 L375 53 L395 39 L420 43 L420 105 L0 105 Z" /><polyline points="0,79 28,75 48,80 67,71 84,74 101,48 118,66 137,63 157,69 173,60 191,64 211,31 226,55 246,52 263,59 284,47 301,53 320,22 337,50 355,45 375,53 395,39 420,43" /></svg>
                                </div>
                                <div className="monitor-flow" aria-label="Detection flow">
                                    <span className="flow-step">CAPTURE</span><span className="flow-step">FEATURES</span><span className="flow-step active">AI MODEL</span><span className="flow-step">ALERTS</span>
                                </div>
                                <div className="monitor-foot"><span>RANDOM FOREST · 5 CLASSES</span><span>END-TO-END FLOW ↗</span></div>
                            </div>
                        </div>
                        <span className="hero-note">FEATURED PROJECT · 2026</span>
                    </div>
                </div>
                <div className="scroll-cue" aria-hidden="true">Scroll to explore</div>
            </div>
        </section>
    );
};

export default Hero;
