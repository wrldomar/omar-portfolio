const Navbar = ({ activeSection }) => {
    return (
        <header className="navbar">
            <div className="nav-container">
                <a href="#" className="logo">O<span className="highlight">B</span>.</a>
                <nav className="nav-links">
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                    <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                    <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                </nav>
                <button className="mobile-menu-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
