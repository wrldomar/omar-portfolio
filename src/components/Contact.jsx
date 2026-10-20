import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from './icons';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-panel reveal">
                    <div>
                        <span className="kicker">Contact</span>
                        <h2>Let’s build something <span className="highlight">useful.</span></h2>
                        <p>I’m open to internships, collaborations, and conversations about software, AI, or cybersecurity. Drop me a note and I’ll get back to you.</p>
                        <a className="btn btn-primary" href="mailto:obelhaj444@gmail.com">Send me an email <ArrowIcon /></a>
                    </div>
                    <div className="contact-list">
                        <a className="contact-item" href="mailto:obelhaj444@gmail.com">
                            <MailIcon />
                            <span><small>Email</small>obelhaj444@gmail.com</span>
                        </a>
                        <a className="contact-item" href="https://www.linkedin.com/in/omar-belhaj-a8571b295/" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon />
                            <span><small>LinkedIn</small>Omar Belhaj</span>
                        </a>
                        <a className="contact-item" href="https://github.com/wrldomar" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon />
                            <span><small>GitHub</small>@wrldomar</span>
                        </a>
                        <div className="contact-item">
                            <PinIcon />
                            <span><small>Based in</small>Ariana, Tunisia</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
