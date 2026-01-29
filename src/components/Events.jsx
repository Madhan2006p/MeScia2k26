import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Events() {
    const [filter, setFilter] = useState('all');

    const events = [
        {
            id: 1,
            title: 'Paper Presentation',
            type: 'technical',
            time: '11:00 AM',
            teamSize: '1-2 members',
            description: 'Present your research and innovative ideas on cutting-edge technologies'
        },
        {
            id: 2,
            title: 'Project Presentation',
            type: 'technical',
            time: '01:30 PM',
            teamSize: '2-4 members',
            description: 'Showcase your technical projects and implementations'
        },
        {
            id: 3,
            title: 'Coding Challenge',
            type: 'technical',
            time: '10:00 AM',
            teamSize: 'Individual',
            description: 'Test your programming skills in C / C++ / Java / Python'
        },
        {
            id: 4,
            title: 'Marketing Talks',
            type: 'technical',
            time: '11:30 AM',
            teamSize: '1-2 members',
            description: 'Present innovative marketing strategies and business ideas'
        },
        {
            id: 5,
            title: 'Tech Quiz',
            type: 'technical',
            time: '02:00 PM',
            teamSize: '2 members',
            description: 'Challenge your technical knowledge across various domains'
        },
        {
            id: 6,
            title: 'FreeFire Tournament',
            type: 'non-technical',
            time: '10:30 AM',
            teamSize: '4 members',
            description: 'Battle royale gaming competition'
        },
        {
            id: 7,
            title: 'IPL Auction',
            type: 'non-technical',
            time: '01:00 PM',
            teamSize: '3-5 members',
            description: 'Strategic team building and auction simulation'
        },
        {
            id: 8,
            title: 'Carnival Chaos',
            type: 'non-technical',
            time: '02:00 PM',
            teamSize: '2-4 members',
            description: 'Fun-filled carnival games and challenges'
        }
    ];

    const filteredEvents = filter === 'all'
        ? events
        : events.filter(event => event.type === filter);

    return (
        <section id="events" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="Symposium Events">Symposium Events</h2>
                <p className="section-subtitle">
                    Choose your battleground – Technical prowess or Strategic gaming
                </p>

                <div className="event-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        All Events
                    </button>
                    <button
                        className={`filter-btn ${filter === 'technical' ? 'active' : ''}`}
                        onClick={() => setFilter('technical')}
                    >
                        Technical
                    </button>
                    <button
                        className={`filter-btn ${filter === 'non-technical' ? 'active' : ''}`}
                        onClick={() => setFilter('non-technical')}
                    >
                        Non-Technical
                    </button>
                </div>

                <motion.div layout className="cards-grid event-grid">
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                key={event.id}
                                className="event-card bubbling-container"
                                transition={{ duration: 0.3 }}
                            >
                                <span className="event-badge">🔴 LIVE</span>
                                <h3 className="event-title">{event.title}</h3>
                                <p className="card-text">{event.description}</p>
                                <div className="event-meta">
                                    <div className="event-meta-item">
                                        <strong>⏰</strong> {event.time}
                                    </div>
                                    <div className="event-meta-item">
                                        <strong>👥</strong> {event.teamSize}
                                    </div>
                                    <div className="event-meta-item">
                                        <strong>📌</strong> {event.type === 'technical' ? 'Technical' : 'Non-Technical'}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

export default Events;
