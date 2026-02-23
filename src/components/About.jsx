import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function About() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
            const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            const isSmallScreen = window.innerWidth < 768;
            setIsMobile(isMobileUA || (isTouchDevice && isSmallScreen));
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Simple card component for mobile (no animations)
    const SimpleCard = ({ id, status, title, text }) => (
        <div className="atomic-module">
            <div className="module-header">
                <span className="module-id">{id}</span>
                <div className="module-status">{status}</div>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
    );

    // Animated card for desktop
    const AnimatedCard = ({ id, status, title, text, variants }) => (
        <motion.div className="atomic-module" variants={variants}>
            <div className="module-header">
                <span className="module-id">{id}</span>
                <div className="module-status">{status}</div>
            </div>
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </motion.div>
    );

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    const cards = [
        { id: '001', status: 'ACTIVE', title: 'PURPOSE & GOALS', text: 'Designed to foster innovation and technical excellence. A platform for showcasing skills in high-stakes environments.' },
        { id: '002', status: 'OPEN', title: 'PERSONNEL', text: 'Clearance granted to all college students. Coders, presenters, and strategists required for immediate deployment.' },
        { id: '003', status: 'CLASSIFIED', title: 'OPERATIONS', text: 'Technical challenges, high-level presentations, and competitive simulations. Awards allocated for superior performance.' }
    ];

    const infoCards = [
        { id: 'ORG', status: 'CMD', title: 'DEPARTMENT', text: 'Computer Technology – PG' },
        { id: 'T-MINUS', status: 'SYNC', title: 'DATE', text: 'February 25, 2026' },
        { id: 'DUR', status: 'FULL', title: 'TIMEFRAME', text: '08:45 AM - 05:00 PM' }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title" data-text="About MeScia – 26">About MeScia – 26</h2>
                <p className="section-subtitle">
                    A one-day technical symposium that brings together innovation, creativity, and competition
                </p>

                {isMobile ? (
                    <>
                        <div className="cards-grid">
                            {cards.map(card => (
                                <SimpleCard key={card.id} {...card} />
                            ))}
                        </div>
                        <div className="cards-grid" style={{ marginTop: '2rem' }}>
                            {infoCards.map(card => (
                                <SimpleCard key={card.id} {...card} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <motion.div
                            className="cards-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {cards.map(card => (
                                <AnimatedCard key={card.id} {...card} variants={itemVariants} />
                            ))}
                        </motion.div>
                        <motion.div
                            className="cards-grid"
                            style={{ marginTop: '2rem' }}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {infoCards.map(card => (
                                <AnimatedCard key={card.id} {...card} variants={itemVariants} />
                            ))}
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
}

export default About;
