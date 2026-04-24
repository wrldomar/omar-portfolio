const Certifications = () => {
    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <div className="section-header reveal">
                    <h2>My <span className="highlight">Certificate</span></h2>
                    <div className="line"></div>
                </div>

                <div className="cert-card glass-card reveal">
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
        </section>
    );
};

export default Certifications;
