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
                        <h3>Contact</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
                            <p className="contact-item">📞 Rithanya : +91 93457 48455</p>
                            <p className="contact-item">📞 Naveen Kumar : +91 824 878 8729</p>
                            <p className="contact-item">📞 Arumugam : +91 98427 78152</p>
                        </div>
                        <p className="contact-item" style={{ marginTop: '1rem' }}>📍 Dept. of Computer Technology – PG</p>
                    </div>

                    <div className="footer-section">
                        <h3>Connect</h3>
                        <div className="social-links" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <a 
                                href="https://www.linkedin.com/in/kec-msc-ctpg/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bl67%2BYKoDRwqhJDn%2FFrV7QQ%3D%3D" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="nav-link social-glitch-link" 
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}
                            >
                                <span>💼</span> LinkedIn
                            </a>
                            <a 
                                href="https://www.instagram.com/msc_ss_kec?igsh=MWd2a3V2Z3E1b2RrNQ==" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="nav-link social-glitch-link" 
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}
                            >
                                <span>📷</span> Instagram
                            </a>
                             <a 
                                href="https://kongu.ac.in/" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="nav-link social-glitch-link" 
                                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: 'fit-content' }}
                            >
                                <span>🏫</span> KEC
                            </a>
                        </div>
                        <p style={{ marginTop: '2rem', fontSize: '0.8rem', opacity: 0.5 }}>
                            No Meth was cooked in the making of this site.
                        </p>
                    </div>
                </div>

                <div className="footer-bottom" style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© {currentYear} MeScia – 26. Designed with 🧪 by <span className="designer-name">Madhan P</span>&<span className="designer-name">Prathiksha D K</span></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
