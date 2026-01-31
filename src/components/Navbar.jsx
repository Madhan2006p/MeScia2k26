import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [eventsOpen, setEventsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const scrollToSection = (id, pageIndex = null) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        
        if (pageIndex !== null) {
            const event = new CustomEvent('open-event-page', { detail: { pageIndex } });
            window.dispatchEvent(event);
        }

        setMenuOpen(false);
        setEventsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="nav-content">
                    <div className="nav-logo glitch" data-text="MeScia 26">
                        MeScia 26
                    </div>

                    <div
                        className="menu-toggle"
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                            setEventsOpen(false);
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                        <li><a className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>

                        {/* EVENTS */}
                        <li
                            className="dropdown"
                            onMouseEnter={() => !isMobile && setEventsOpen(true)}
                            onMouseLeave={() => !isMobile && setEventsOpen(false)}
                        >
                            <a
                                className="nav-link"
                                onClick={(e) => {
                                    if (isMobile) {
                                        e.preventDefault();
                                        setEventsOpen(!eventsOpen);
                                        scrollToSection('events');
                                    } else {
                                        scrollToSection('events');
                                    }
                                }}
                                style={{ cursor: 'pointer' }}
                            >
                                Events ▾
                            </a>

                            {eventsOpen && (
                                <ul className="dropdown-menu">
                                    <li onClick={() => scrollToSection(isMobile ? 'event-1' : 'events', 1)}>Paper Presentation</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-2' : 'events', 2)}>Project Presentation</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-3' : 'events', 3)}>Technical Quiz</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-4' : 'events', 4)}>Coding Challenge</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-5' : 'events', 5)}>Marketing Insights</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-6' : 'events', 6)}>Chaos Carnival</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-7' : 'events', 7)}>IPL Auction</li>
                                    <li onClick={() => scrollToSection(isMobile ? 'event-8' : 'events', 8)}>Free Fire</li>
                                </ul>
                            )}
                        </li>

                        <li><a className="nav-link" onClick={() => scrollToSection('schedule')}>Schedule</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('team')}>Team</a></li>
                        <li><a className="nav-link" onClick={() => scrollToSection('guidelines')}>Guidelines</a></li>

                        <li>
                            <a
                                className="nav-link"
                                href="https://forms.gle/JfgkzXoAZqTEXuGz8"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
