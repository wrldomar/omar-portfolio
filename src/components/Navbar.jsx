import { useState } from 'react';

const Navbar = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="nav-container">
                <a href="#hero" className="logo" aria-label="Omar Belhadj, home" onClick={closeMenu}>O<span className="highlight">B</span>.</a>
                <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={closeMenu}>About</a>
                    <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={closeMenu}>Skills</a>
                    <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={closeMenu}>Experience</a>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={closeMenu}>Projects</a>
                    <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={closeMenu}>Certification</a>
                    <a href="#contact" className="nav-cta" onClick={closeMenu}>Let’s talk <span aria-hidden="true">↗</span></a>
                </nav>
                <button className="mobile-menu-btn" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
