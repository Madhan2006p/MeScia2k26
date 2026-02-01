function Registration() {
    const handleRegister = () => {
        // Replace with actual Google Form URL
        window.open('https://forms.gle/JfgkzXoAZqTEXuGz8', '_blank');
    };

    return (
        <section id="register" className="section registration">
            <div className="container">
                <div className="registration-content">
                    <h2 className="section-title glitch" data-text="Ready to Join?">Ready to Join?</h2>
                    <p className="registration-text">
                        Click here to secure your spot at MeScia 26 and be part of an
                        unforgettable technical symposium experience!
                    </p>
                    <div style={{ margin: '2rem 0', fontFamily: "'Bebas Neue', sans-serif" }}>
                        <span style={{ fontSize: '1.5rem', color: '#ccc', letterSpacing: '1px' }}>REGISTRATION FEE : </span>
                        <span style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginLeft: '10px', textShadow: '0 0 10px rgba(255, 103, 0, 0.3)' }}>₹295</span>
                    </div>
                    <button className="cta-button pulse-effect" onClick={handleRegister}>
                        <span>Register Now</span>
                    </button>
                    <p style={{ marginTop: '2rem', color: 'var(--bb-text-dim)', fontSize: '0.95rem' }}>
                        Limited seats available • First come, first served
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Registration;
