const Contact = () => {
    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-layout">
                    <div className="contact-content reveal">
                        <span className="section-kicker">Have a project in mind?</span>
                        <h2 className="contact-title">Let’s make<br /><span className="highlight">something useful.</span></h2>
                        <p className="contact-text">I’m open to internships, collaborations, and conversations about software, AI, or cybersecurity. Drop me a note and I’ll get back to you.</p>
                    </div>
                    <div className="contact-cards reveal">
                        <a href="mailto:obelhaj444@gmail.com" className="contact-card glass-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                            <span><small className="contact-label">Email</small>obelhaj444@gmail.com</span>
                        </a>
                        <div className="contact-card glass-card">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
                            <span><small className="contact-label">Based in</small>Ariana, Tunisia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
