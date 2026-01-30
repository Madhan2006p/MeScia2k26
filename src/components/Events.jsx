import HTMLFlipBook from 'react-pageflip';

// Custom Page Component for the flipbook
// Custom Page Component for the flipbook
import React, { forwardRef, useState, memo, useEffect } from 'react';

const Page = memo(forwardRef((props, ref) => {
    return (
        <div className="dossier-page" ref={ref} data-density="soft" {...props}>
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

const Cover = forwardRef((props, ref) => {
    return (
        <div className="dossier-cover" ref={ref} data-density="hard" {...props}>
            <div className="cover-content">
                {props.children}
            </div>
        </div>
    );
});


// SVG Radiation Icon (Oppenheimer Theme)







import { motion, AnimatePresence } from 'framer-motion';

const MobileFileStack = ({ events }) => {
    const [expandedId, setExpandedId] = useState(null);

    const toggleFile = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="mobile-file-stack">
            {events.map((event) => {
                const isExpanded = expandedId === event.id;
                return (
                    <div 
                        key={event.id} 
                        className={`file-dossier-card ${isExpanded ? 'expanded' : ''}`}
                        onClick={() => toggleFile(event.id)}
                    >
                        {/* Dossier Header / Spine */}
                        <div className="file-header">
                            <div className="file-meta-row">
                                <span className="file-id-badge">FILE #{event.id.toString().padStart(3, '0')}</span>
                                <span className="file-status">STATUS: CLASSIFIED</span>
                            </div>
                            <h3 className="file-title">{event.title}</h3>
                            {!isExpanded && <p className="file-hint">Click to see details</p>}
                            <div className="file-indicator">
                                {isExpanded ? '[-]' : '[+]'}
                            </div>
                        </div>

                        {/* Expandable Content */}
                        <AnimatePresence initial={false}>
                            {isExpanded && (
                                <motion.div
                                    initial={{ maxHeight: 0, opacity: 0 }}
                                    animate={{ maxHeight: 500, opacity: 1 }}
                                    exit={{ maxHeight: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.4, 0.0, 0.2, 1] }}
                                    className="file-body-wrapper"
                                    style={{ overflow: 'hidden' }}
                                >
                                    <div className="file-content-inner">
                                        
                                        <div className="file-section">
                                            <h4 className="file-label">MISSION BRIEF</h4>
                                            <p className="file-text">{event.description}</p>
                                        </div>

                                        <div className="file-data-grid">
                                            <div className="data-cell">
                                                <span className="data-label">TIMING</span>
                                                <span className="data-value">{event.time}</span>
                                            </div>
                                            <div className="data-cell">
                                                <span className="data-label">PERSONNEL</span>
                                                <span className="data-value">{event.teamSize}</span>
                                            </div>
                                            <div className="data-cell">
                                                <span className="data-label">CLASS</span>
                                                <span className="data-value highlight">{event.type.toUpperCase()}</span>
                                            </div>
                                        </div>

                                        <div className="file-footer">
                                            <span className="auth-signature">Auth: Oppenheimer</span>
                                            <span className="clearance-level">LEVEL 5 CLEARANCE</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

function Events() {
    const events = [
        {
            id: 1,
            title: 'Project Pitch',
            type: 'technical',
            time: '09:45 AM – 11:30 AM',
            teamSize: '1-3 members',
            description: 'Showcase your innovative projects and technical implementations.'
        },
        {
            id: 2,
            title: 'Paper Parade',
            type: 'technical',
            time: '09:45 AM – 11:30 AM',
            teamSize: '1-2 members',
            description: 'Present your research papers on cutting-edge technologies.'
        },
        {
            id: 3,
            title: 'Tech Clash',
            type: 'technical',
            time: '11:30 AM – 12:00 PM',
            teamSize: '2 members',
            description: 'A debate on trending technical topics while facing opposing views.'
        },
        {
            id: 4,
            title: 'Marketing Insights',
            type: 'technical',
            time: '11:30 AM – 12:30 PM',
            teamSize: '1-2 members',
            description: 'Pitch your product and marketing strategies to the judges.'
        },
        {
            id: 5,
            title: 'Code Combat',
            type: 'technical',
            time: '12:00 PM – 12:30 PM',
            teamSize: 'Individual',
            description: 'Solve algorithmic challenges in a high-pressure coding battle.'
        },
        {
            id: 6,
            title: 'IPL Auction',
            type: 'non-technical',
            time: '01:50 PM – 03:20 PM',
            teamSize: '3-5 members',
            description: 'Bid for players and build the strongest cricket team.'
        },
        {
            id: 7,
            title: 'Chaos Carnival',
            type: 'non-technical',
            time: '01:50 PM – 02:30 PM',
            teamSize: '2-4 members',
            description: 'Fun-filled carnival games and chaotic challenges.'
        },
        {
            id: 8,
            title: 'Esport(Battle royal)',
            type: 'non-technical',
            time: '02:30 PM – 03:15 PM',
            teamSize: '4 members',
            description: 'Classic Battle Royale tournament for mobile gamers.'
        }
    ];

    // State for the custom JS/CSS book
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = events.length; 
    
    const flipPage = (index) => {
        if (index === currentPage) {
             setCurrentPage(currentPage + 1);
        } else if (index === currentPage - 1) {
             setCurrentPage(currentPage - 1);
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check 1: User Agent
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
            const isMobileUA = mobileRegex.test(userAgent.toLowerCase());
            
            // Check 2: Touch capability
            const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            
            // Check 3: Screen width
            const isSmallScreen = window.innerWidth < 768;
            
            // Consider it mobile if ANY of these conditions are true
            const mobile = isMobileUA || (isTouchDevice && isSmallScreen);
            
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="events" className="section">
            <div className="container" style={{ overflow: 'visible' }}>
                <h2 className="section-title glitch" data-text="Classified Files">Classified Files</h2>

                <p className="section-subtitle">
                    {isMobile ? 'Swipe vertically to view the files.' : 'Click to flip through the classified dossiers.'}
                </p>

                {isMobile ? (
                    <MobileFileStack events={events} />
                ) : (
                    <div className="custom-book-scene">
                        <div className="custom-book">
                            {/* Front Cover - Index 0 */}
                            <div 
                                className={`custom-page-wrapper ${currentPage > 0 ? 'flipped' : ''}`}
                                style={{ zIndex: currentPage > 0 ? 0 : 100 }}
                                onClick={() => flipPage(0)}
                            >
                                <div className="custom-page-front">
                                    <Cover>
                                        <h1>TOP SECRET</h1>
                                        <h2>PROJECT: MESCIA</h2>
                                        <div className="logo-stamp">CLASSIFIED</div>
                                        <p>EYES ONLY</p>
                                    </Cover>
                                </div>
                                <div className="custom-page-back">
                                    <div className="dossier-back-texture"></div>
                                </div>
                            </div>

                            {/* Event Pages - Indices 1 to N */}
                            {events.map((event, index) => {
                                const pageIndex = index + 1;
                                const zIndex = currentPage > pageIndex ? pageIndex : (100 - pageIndex);
                                return (
                                    <div 
                                        key={event.id}
                                        className={`custom-page-wrapper ${currentPage > pageIndex ? 'flipped' : ''}`}
                                        style={{ zIndex: zIndex }}
                                        onClick={() => flipPage(pageIndex)}
                                    >
                                        <div className="custom-page-front">
                                            <Page number={pageIndex} event={event} />
                                        </div>
                                        <div className="custom-page-back">
                                            <div className="dossier-back-texture">
                                                <span className="file-id">FILE #{event.id}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                            {/* Back Cover - Index N + 1 */}
                             <div 
                                className={`custom-page-wrapper ${currentPage > totalPages + 1 ? 'flipped' : ''}`}
                                style={{ zIndex: 0 }}
                            >
                                <div className="custom-page-front">
                                     <Cover className="dossier-cover back">
                                        <h2>END OF FILE</h2>
                                    </Cover>
                                </div>
                            </div>
                        </div>
                         <p style={{ textAlign: 'center', color: '#666', marginTop: '3rem', fontFamily: 'Courier New', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                            // SYSTEM READY // CLICK TO ACKNOWLEDGE
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Events;
