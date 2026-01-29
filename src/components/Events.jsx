import HTMLFlipBook from 'react-pageflip';

// Custom Page Component for the flipbook
import React, { forwardRef, useState, memo, useEffect } from 'react';

const Page = memo(forwardRef((props, ref) => {
    // ... (rest of Page component)
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
}));
// SVG Atom Icon for Oppenheimer Theme
const AtomIcon = () => (
    <svg viewBox="0 0 100 100" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.8 }}>
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="30" ry="8" transform="rotate(0 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="8" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="30" ry="8" transform="rotate(120 50 50)" />
    </svg>
);

const WeaponRack = ({ events }) => {
    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <div className="weapon-rack-container">
            {selectedEvent ? (
                <div className="weapon-details-panel">
                    <button className="back-btn" onClick={() => setSelectedEvent(null)}>
                        ← BACK TO ARCHIVES
                    </button>
                    <div className="weapon-card-detail">
                        <div className="weapon-header">
                            <h3 className="weapon-title-detail">{selectedEvent.title}</h3>
                            <div className="weapon-id">PROJ-{selectedEvent.id.toString().padStart(3, '0')}</div>
                        </div>
                        <div className="weapon-body-detail">
                             <div className="weapon-info-grid">
                                <div className="info-cell">
                                    <label>TYPE</label>
                                    <span>{selectedEvent.type.toUpperCase()}</span>
                                </div>
                                <div className="info-cell">
                                    <label>TIME</label>
                                    <span>{selectedEvent.time}</span>
                                </div>
                                <div className="info-cell">
                                    <label>SQUAD</label>
                                    <span>{selectedEvent.teamSize}</span>
                                </div>
                            </div>
                            
                            <div className="weapon-desc-box">
                                <h4>TACTICAL BRIEF</h4>
                                <p>{selectedEvent.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="rack-grid">
                    {events.map((event) => (
                        <div 
                            key={event.id} 
                            className="weapon-slot"
                            onClick={() => setSelectedEvent(event)}
                        >
                            <div className="gun-silhoutte">
                                <AtomIcon />
                            </div>
                            <div className="weapon-label">
                                <span className="wpn-code">PRJ-{event.id}</span>
                                <span className="wpn-name">{event.title}</span>
                            </div>
                            <div className="wpn-status">READY</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

function Events() {
    const [bookDimensions, setBookDimensions] = useState({ width: 400, height: 550 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                // Mobile View
                setIsMobile(true);
            } else {
                // Desktop View
                setBookDimensions({ width: 400, height: 550 });
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

    return (
        <section id="events" className="section">
            <div className="container" style={{ overflow: 'visible' }}>
                <h2 className="section-title glitch" data-text="Classified Files">Classified Files</h2>
                <p className="section-subtitle">
                    Access Granted. {isMobile ? 'Select a Project from the Archives.' : 'Flip through the technical dossiers.'}
                </p>

                {isMobile ? (
                    <WeaponRack events={events} />
                ) : (
                    <div className="dossier-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px', perspective: '1500px', margin: '0 auto', maxWidth: '1000px' }}>
                        <HTMLFlipBook
                            width={bookDimensions.width}
                            height={bookDimensions.height}
                            size="fixed"
                            minWidth={300}
                            maxWidth={500}
                            minHeight={400}
                            maxHeight={700}
                            maxShadowOpacity={0.5}
                            showCover={true}
                            mobileScrollSupport={false}
                            flippingTime={800}
                            usePortrait={false}
                            startZIndex={0}
                            autoSize={true}
                            clickEventForward={true}
                            useMouseEvents={false}
                            swipeDistance={0}
                            showPageCorners={true}
                            disableFlipByClick={false}
                            drawShadow={false}
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

                            {events.map((event, index) => (
                                <Page key={event.id} number={index + 1} event={event} />
                            ))}

                            <div className="dossier-cover back">
                                <div className="cover-content">
                                    <h2>END OF FILE</h2>
                                </div>
                            </div>
                        </HTMLFlipBook>
                        <p style={{ textAlign: 'center', color: '#666', marginTop: '1rem', fontFamily: 'Courier New' }}>
                            [ CLICK CORNERS TO FLIP ]
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Events;
