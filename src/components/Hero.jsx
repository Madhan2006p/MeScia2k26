import { useState, useEffect } from 'react';
import ThreeScene from './ThreeScene';

function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-02-25T00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                setCountdown({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const scrollToEvents = () => {
        const element = document.getElementById('events');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero" style={{ overflow: 'hidden', position: 'relative', minHeight: '100vh' }}>
            <ThreeScene />
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="hero-content">
                    <div className="hero-title glitch" data-text="MeScia '26">
                        MeScia '26
                    </div>

                    <div
                        className="say-my-name-container"
                        style={{ margin: '1rem 0 2rem', height: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span
                            className={`say-my-name ${isHovered ? 'glitch' : ''}`}
                            data-text="OPPENHEIMER"
                            style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: '2rem',
                                letterSpacing: '8px',
                                color: isHovered ? "var(--accent-primary)" : "var(--text-muted)",
                                textTransform: 'uppercase',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                textShadow: isHovered ? "0 0 20px var(--accent-primary)" : "none",
                                display: 'inline-block',
                                minWidth: '400px' // Prevent layout shift jitter
                            }}
                        >
                            {isHovered ? "OPPENHEIMER" : '"Theory Will Only Take You So Far"'}
                        </span>
                    </div>

                    <h2 className="hero-subtitle">One-Day Inter College Technical Symposium</h2>
                    <p className="hero-tagline">Ignite Your Skills. Inspire Your Future.</p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        margin: '2.5rem 0',
                        flexWrap: 'wrap'
                    }}>
                        <div style={{
                            border: '1px solid var(--accent-primary)',
                            padding: '0.8rem 2rem',
                            background: 'rgba(5, 5, 5, 0.6)',
                            backdropFilter: 'blur(4px)',
                            minWidth: '200px',
                            boxShadow: '0 0 15px rgba(255, 103, 0, 0.1)'
                        }}>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.2rem' }}>Prize Pool Worth</span>
                            <span style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1', color: '#fff', textShadow: '0 0 10px var(--accent-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>₹25,000+</span>
                        </div>
                        <div style={{
                            border: '1px solid var(--accent-primary)',
                            padding: '0.8rem 2rem',
                            background: 'rgba(5, 5, 5, 0.6)',
                            backdropFilter: 'blur(4px)',
                            minWidth: '200px',
                            boxShadow: '0 0 15px rgba(255, 103, 0, 0.1)'
                        }}>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.2rem' }}>Registration Fee</span>
                            <span style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1', color: '#fff', textShadow: '0 0 10px var(--accent-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>₹295</span>
                        </div>
                        <div style={{
                            border: '1px solid var(--accent-primary)',
                            padding: '0.8rem 2rem',
                            background: 'rgba(5, 5, 5, 0.6)',
                            backdropFilter: 'blur(4px)',
                            minWidth: '200px',
                            boxShadow: '0 0 15px rgba(255, 103, 0, 0.1)'
                        }}>
                            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.2rem' }}>Last Date</span>
                            <span style={{ display: 'block', fontSize: '2.5rem', lineHeight: '1', color: '#fff', textShadow: '0 0 10px var(--accent-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>25.02.2026</span>
                        </div>
                    </div>

                    <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '0.5rem' }}>Countdown to Last Date</p>
                    <div className="countdown">
                        <div className="countdown-item">
                            <span className="countdown-value orbitron">{String(countdown.days).padStart(2, '0')}</span>
                            <span className="countdown-label">Days</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value orbitron">{String(countdown.hours).padStart(2, '0')}</span>
                            <span className="countdown-label">Hours</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value orbitron">{String(countdown.minutes).padStart(2, '0')}</span>
                            <span className="countdown-label">Minutes</span>
                        </div>
                        <div className="countdown-item">
                            <span className="countdown-value orbitron">{String(countdown.seconds).padStart(2, '0')}</span>
                            <span className="countdown-label">Seconds</span>
                        </div>
                    </div>

                    <button className="cta-button pulse-effect" onClick={scrollToEvents}>
                        <span>Explore Events</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
