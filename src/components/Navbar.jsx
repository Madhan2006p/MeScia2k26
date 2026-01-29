import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <div className="nav-logo glitch" data-text="MeScia 26">MeScia 26</div>

                    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <li><a className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('events')}>Events</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('schedule')}>Schedule</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('team')}>Team</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('guidelines')}>Guidelines</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('register')}>Register</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
