import { useState, useEffect } from 'react';

const links = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
];

const Navbar = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="logo" aria-label="Omar Belhadj, home" onClick={closeMenu}>O<span className="highlight">B</span>.</a>
                <nav id="primary-navigation" className={`nav-links${menuOpen ? ' open' : ''}`} aria-label="Main navigation">
                    {links.map((link) => (
                        <a key={link.id} href={`#${link.id}`} className={activeSection === link.id ? 'active' : ''} onClick={closeMenu}>{link.label}</a>
                    ))}
                    <a href="#contact" className="nav-cta" onClick={closeMenu}>Let’s talk</a>
                </nav>
                <button className="mobile-menu-btn" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen((open) => !open)}>
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
