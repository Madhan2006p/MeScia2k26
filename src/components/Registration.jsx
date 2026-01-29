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
