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
                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">001</span>
                            <div className="module-status">ACTIVE</div>
                        </div>
                        <h3 className="card-title">PURPOSE & GOALS</h3>
                        <p className="card-text">
                            Designed to foster innovation and technical excellence. A platform for showcasing
                            skills in high-stakes environments.
                        </p>
                    </motion.div>

                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">002</span>
                            <div className="module-status">OPEN</div>
                        </div>
                        <h3 className="card-title">PERSONNEL</h3>
                        <p className="card-text">
                            Clearance granted to all college students. Coders, presenters, and strategists
                            required for immediate deployment.
                        </p>
                    </motion.div>

                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">003</span>
                            <div className="module-status">CLASSIFIED</div>
                        </div>
                        <h3 className="card-title">OPERATIONS</h3>
                        <p className="card-text">
                            Technical challenges, high-level presentations, and competitive simulations.
                            Awards allocated for superior performance.
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
                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">ORG</span>
                            <div className="module-status">CMD</div>
                        </div>
                        <h3 className="card-title">DEPARTMENT</h3>
                        <p className="card-text">
                            Computer Technology – PG
                        </p>
                    </motion.div>

                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">T-MINUS</span>
                            <div className="module-status">SYNC</div>
                        </div>
                        <h3 className="card-title">DATE</h3>
                        <p className="card-text">
                            February 27, 2026
                        </p>
                    </motion.div>

                    <motion.div className="atomic-module" variants={itemVariants}>
                        <div className="module-header">
                            <span className="module-id">DUR</span>
                            <div className="module-status">FULL</div>
                        </div>
                        <h3 className="card-title">TIMEFRAME</h3>
                        <p className="card-text">
                            08:45 AM - 05:00 PM
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
