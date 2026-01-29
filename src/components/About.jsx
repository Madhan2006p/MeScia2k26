import { motion } from 'framer-motion';

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { x: -100, opacity: 0, skewX: 20 },
        visible: {
            x: 0,
            opacity: 1,
            skewX: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 20,
                mass: 0.8
            }
        }
    };

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="About MeScia – 26">About MeScia – 26</h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    A one-day technical symposium that brings together innovation, creativity, and competition
                </motion.p>

                <motion.div
                    className="cards-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="card about-card-pulse" variants={itemVariants}>
                        <h3 className="card-title">🎯 Purpose & Goals</h3>
                        <p className="card-text">
                            MeScia 26 is designed to foster innovation, encourage technical excellence,
                            and provide a platform for students to showcase their skills in various
                            technical and non-technical domains.
                        </p>
                    </motion.div>

                    <motion.div className="card about-card-pulse" variants={itemVariants}>
                        <h3 className="card-title">👥 Who Can Participate</h3>
                        <p className="card-text">
                            Open to all college students passionate about technology, innovation,
                            and competition. Whether you're a coder, presenter, gamer, or creative
                            thinker – there's something for everyone!
                        </p>
                    </motion.div>

                    <motion.div className="card about-card-pulse" variants={itemVariants}>
                        <h3 className="card-title">✨ What to Expect</h3>
                        <p className="card-text">
                            Exciting technical challenges, engaging presentations, competitive gaming,
                            networking opportunities, prizes for winners, certificates for all participants,
                            and an unforgettable experience!
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="cards-grid"
                    style={{ marginTop: '2rem' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className="card" variants={itemVariants}>
                        <h3 className="card-title">🏛️ Organized By</h3>
                        <p className="card-text">
                            Department of Computer Technology – PG
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={itemVariants}>
                        <h3 className="card-title">📅 Event Date</h3>
                        <p className="card-text">
                            February 27, 2026
                        </p>
                    </motion.div>

                    <motion.div className="card" variants={itemVariants}>
                        <h3 className="card-title">⏰ Duration</h3>
                        <p className="card-text">
                            Full Day Event (08:45 AM - 05:00 PM)
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
