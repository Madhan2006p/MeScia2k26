function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                    <div className="footer-section">
                        <h3 className="glitch" data-text="MeScia – 26">MeScia – 26</h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            The Empire Business of Technical Symposiums.
                            Step into our territory for a day of pure, unadulterated innovation.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul className="footer-links" style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#home" className="nav-link">Home</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#about" className="nav-link">About</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#events" className="nav-link">Events</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#schedule" className="nav-link">Schedule</a></li>
                            <li style={{ marginBottom: '0.8rem' }}><a href="#team" className="nav-link">Team</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3>Contact</h3>
                        <p style={{ marginBottom: '0.5rem' }}>📧 mescia26@example.com</p>
                        <p style={{ marginBottom: '0.5rem' }}>📞 +91 98765 43210</p>
                        <p style={{ marginBottom: '0.5rem' }}>📍 Dept. of Computer Technology – PG</p>

                        <div style={{ marginTop: '1.5rem', borderTop: '1px dashed #333', paddingTop: '1.5rem' }}>
                            <h4 style={{ color: '#f5c518', fontFamily: 'Bebas Neue', letterSpacing: '2px' }}>Legal Counsel</h4>
                            <p style={{ color: '#fff', fontStyle: 'italic' }}>"Better Call Saul!"</p>
                            <a href="https://www.google.com/search?q=better+call+saul" target="_blank" rel="noreferrer" style={{ color: '#f5c518', textDecoration: 'none', fontSize: '0.9rem', marginTop: '0.5rem', display: 'inline-block' }}>
                                SG & Associates ⚖️
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3>Connect</h3>
                        <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" className="social-icon" style={{ fontSize: '1.5rem', filter: 'grayscale(100%)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.filter = 'none'} onMouseOut={e => e.target.style.filter = 'grayscale(100%)'}>📘</a>
                            <a href="#" className="social-icon" style={{ fontSize: '1.5rem', filter: 'grayscale(100%)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.filter = 'none'} onMouseOut={e => e.target.style.filter = 'grayscale(100%)'}>📷</a>
                            <a href="#" className="social-icon" style={{ fontSize: '1.5rem', filter: 'grayscale(100%)', transition: 'all 0.3s' }} onMouseOver={e => e.target.style.filter = 'none'} onMouseOut={e => e.target.style.filter = 'grayscale(100%)'}>💼</a>
                        </div>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
                            No Meth was cooked in the making of this site.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom" style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© {currentYear} MeScia – 26. Designed with 🧪 by DCT-PG</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
