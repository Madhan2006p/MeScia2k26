import { motion } from 'framer-motion';

function Schedule() {
    const scheduleItems = [
        { time: '09:00 AM – 09:45 AM', title: 'Inaugural', description: 'Opening Ceremony' },
        { time: '09:45 AM – 11:30 AM', title: 'Project Pitch', description: 'Project Presentation' },
        { time: '09:45 AM – 11:30 AM', title: 'Paper Parade', description: 'Paper Presentation' },
        { time: '11:30 AM – 12:00 PM', title: 'Tech Clash', description: 'Technical Debate' },
        { time: '11:30 AM – 12:30 PM', title: 'Marketing Insights', description: 'Marketing Event' },
        { time: '12:00 PM – 12:30 PM', title: 'Code Combat', description: 'Coding Competition' },
        { time: '12:30 PM – 01:30 PM', title: 'Lunch', description: 'Refreshments' },
        { time: '01:50 PM – 03:20 PM', title: 'IPL Auction', description: 'Bidding War' },
        { time: '01:50 PM – 02:30 PM', title: 'Chaos Carnival', description: 'Fun Event' },
        { time: '02:30 PM – 03:15 PM', title: 'Free Fire', description: 'Gaming Tournament' },
        { time: '03:30 PM – 04:30 PM', title: 'Valedictory', description: 'Closing Ceremony & Prize Distribution' }
    ];

    return (
        <section id="schedule" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="Event Schedule">Event Schedule</h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    The Reaction Pathway
                </motion.p>

                <div className="timeline" style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* The Chemical Flow Line */}
                    <motion.div
                        className="timeline-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            left: '0',
                            top: 0,
                            width: '4px',
                            background: 'var(--accent-primary)',
                            boxShadow: '0 0 15px var(--accent-primary)',
                            borderRadius: '2px',
                            zIndex: 1,
                            overflow: 'hidden' // Clip the bullet inside
                        }}
                    >
                        {/* The Bullet / Energy Pulse */}
                        <motion.div
                            animate={{ top: ['0%', '100%'] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 0.5
                            }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                width: '100%',
                                height: '20%', // Length of the "bullet" tail
                                background: 'linear-gradient(to bottom, transparent, #fff, transparent)',
                                opacity: 0.8,
                                filter: 'blur(2px)'
                            }}
                        />
                    </motion.div>

                    {/* Background Line (dim) */}
                    <div style={{
                        position: 'absolute',
                        left: '0',
                        top: 0,
                        bottom: 0,
                        width: '4px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        zIndex: 0
                    }} />

                    {scheduleItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered based on index
                            style={{
                                marginBottom: '3rem',
                                position: 'relative',
                                paddingLeft: '2rem'
                            }}
                        >
                            {/* The Node/Atom */}
                            <motion.div
                                className="timeline-node"
                                initial={{ scale: 0, backgroundColor: '#000' }}
                                whileInView={{ scale: 1, backgroundColor: 'var(--accent-primary)' }}
                                transition={{ duration: 0.3, delay: index * 0.3 + 0.1 }} // Sync with item appearance
                                style={{
                                    position: 'absolute',
                                    left: '-2.4rem' /* Align with line */,
                                    top: '0.1rem',
                                    width: '1.2rem',
                                    height: '1.2rem',
                                    borderRadius: '50%',
                                    border: '2px solid var(--accent-primary)',
                                    zIndex: 2,
                                    boxShadow: '0 0 10px var(--accent-primary)'
                                }}
                            >
                                {/* Inner Pulse */}
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        background: 'var(--accent-primary)'
                                    }}
                                />
                            </motion.div>

                            <div className="timeline-content glass-panel" style={{ padding: '1.5rem', borderRadius: '4px', borderLeft: '4px solid var(--accent-secondary)' }}>
                                <div className="timeline-time" style={{ fontFamily: 'Orbitron', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.time}</div>
                                <div className="timeline-title" style={{ fontSize: '1.5rem', fontFamily: 'Bebas Neue', letterSpacing: '1px' }}>{item.title}</div>
                                <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Schedule;
