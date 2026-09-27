const Certifications = () => {
    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-kicker">Continued learning</span>
                    <h2>Certifications & <span className="highlight">learning.</span></h2>
                    <div className="line"></div>
                </div>
                <div className="cert-card glass-card reveal">
                    <div className="cert-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7" /><path d="m8.2 13.9-1.1 8L12 19l4.9 2.9-1.1-8" /></svg>
                    </div>
                    <div className="cert-info">
                        <h3>Introduction to Cybersecurity</h3>
                        <p>Cisco Networking Academy · Issued April 2025</p>
                        <p className="cert-skills">Cybersecurity fundamentals, common threats, and protection strategies.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
