import HTMLFlipBook from 'react-pageflip';

// Custom Page Component for the flipbook
import React, { forwardRef, useState } from 'react';

const Page = forwardRef((props, ref) => {
    return (
        <div className="dossier-page" ref={ref}>
            <div className="dossier-content">
                <div className="dossier-header">
                    <span className="confidential-stamp">CONFIDENTIAL</span>
                    <span className="file-id">FILE #{props.event.id.toString().padStart(3, '0')}</span>
                </div>
                
                <div className="dossier-body">
                    <h3 className="dossier-title">{props.event.title}</h3>
                    <div className="dossier-divider"></div>
                    
                    <div className="dossier-section">
                        <h4>DESCRIPTION</h4>
                        <p>{props.event.description}</p>
                    </div>

                    <div className="dossier-grid">
                        <div className="dossier-item">
                            <span className="label">TIMING</span>
                            <span className="value">{props.event.time}</span>
                        </div>
                        <div className="dossier-item">
                            <span className="label">PERSONNEL</span>
                            <span className="value">{props.event.teamSize}</span>
                        </div>
                        <div className="dossier-item">
                            <span className="label">CLASS</span>
                            <span className="value">{props.event.type.toUpperCase()}</span>
                        </div>
                    </div>
                </div>

                <div className="dossier-footer">
                    <span className="auth-sig">AUTHORIZED BY: OPPENHEIMER</span>
                    <span className="page-num">PG {props.number}</span>
                </div>
                
                {/* Paper texture and aging effects */}
                <div className="paper-texture"></div>
            </div>
        </div>
    );
});

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
            <div className="container" style={{ overflow: 'visible' }}>
                <h2 className="section-title glitch" data-text="Classified Files">Classified Files</h2>
                <p className="section-subtitle">
                    Access Granted. Flip through the technical dossiers.
                </p>

                <div className="event-filters">
                    <button
                        className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                        onClick={() => setFilter('all')}
                    >
                        Index
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

                <div className="dossier-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px', perspective: '1500px', margin: '0 auto', maxWidth: '1000px' }}>
                    <HTMLFlipBook
                        width={400}
                        height={550}
                        size="fixed"
                        minWidth={300}
                        maxWidth={500}
                        minHeight={400}
                        maxHeight={700}
                        maxShadowOpacity={0.5}
                        showCover={true}
                        mobileScrollSupport={true}
                        className="dossier-book"
                    >
                        <div className="dossier-cover">
                            <div className="cover-content">
                                <h1>TOP SECRET</h1>
                                <h2>PROJECT: MESCIA</h2>
                                <div className="logo-stamp">CLASSIFIED</div>
                                <p>EYES ONLY</p>
                            </div>
                        </div>

                        {filteredEvents.map((event, index) => (
                            <Page key={event.id} number={index + 1} event={event} />
                        ))}

                        <div className="dossier-cover back">
                            <div className="cover-content">
                                <h2>END OF FILE</h2>
                            </div>
                        </div>
                    </HTMLFlipBook>
                </div>
                
                <p style={{ textAlign: 'center', color: '#666', marginTop: '1rem', fontFamily: 'Courier New' }}>
                    [ MOUSE INTERACTION ENABLED: DRAG OR CLICK CORNERS TO FLIP ]
                </p>
            </div>
        </section>
    );
}

export default Events;
