import { GitHubIcon, LinkedInIcon } from './icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <a href="#hero" className="logo" aria-label="Omar Belhadj, back to top">O<span className="highlight">B</span>.</a>
                    <p>© 2026 Omar Belhadj · Designed and built with care.</p>
                    <div className="footer-links">
                        <a className="icon-link" href="https://github.com/wrldomar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
                        <a className="icon-link" href="https://www.linkedin.com/in/omar-belhaj-a8571b295/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
