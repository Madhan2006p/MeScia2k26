import HTMLFlipBook from 'react-pageflip';

// Custom Page Component for the flipbook
// Custom Page Component for the flipbook
import React, { forwardRef, useState, memo, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
                        <h4>SUMMARY</h4>
                        <p>{props.event.shortDesc}</p>
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
                    <button className="view-details-btn" onClick={(e) => {
                        e.stopPropagation();
                        props.onViewDetails(props.event);
                    }}>VIEW DETAILS</button>
                    <div className="footer-meta">
                        <span className="auth-sig">AUTH: OPPENHEIMER</span>
                        <span className="page-num">PG {props.number}</span>
                    </div>
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






// Sticky Stacking Cards - No interaction needed, scroll to reveal
const MobileFileStack = ({ events, onViewDetails }) => {
    return (
        <div className="mobile-stack-container">
            {events.map((event, index) => (
                <div 
                    key={event.id} 
                    id={`event-${event.id}`}
                    className="stack-card"
                    style={{ '--card-index': index }}
                >
                    {/* Header */}
                    <div className="stack-card-header">
                        <div className="stack-meta">
                            <span className="stack-id">FILE #{event.id.toString().padStart(3, '0')}</span>
                            <span className="stack-status">CLASSIFIED</span>
                        </div>
                        <h3 className="stack-title">{event.title}</h3>
                    </div>

                    {/* Content - Always visible */}
                    <div className="stack-card-body">
                        <p className="stack-desc">{event.shortDesc}</p>
                        
                        <div className="stack-info">
                            <div className="info-item">
                                <span className="info-label">TIME</span>
                                <span className="info-value">{event.time}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">TEAM</span>
                                <span className="info-value">{event.teamSize}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">TYPE</span>
                                <span className="info-value accent">{event.type.toUpperCase()}</span>
                            </div>
                        </div>

                        <button className="stack-view-btn" onClick={() => onViewDetails(event)}>VIEW GUIDELINES</button>
                    </div>
                </div>
            ))}
        </div>
    );
};


function Events() {
    const events = [
        {
            id: 1,
            title: 'Paper Presentation',
            type: 'technical',
            time: '09:45 AM – 11:30 AM',
            teamSize: '3-5 members',
            shortDesc: 'Participants present original technical papers showcasing innovative research.',
            guidelines: 'Paper must be original and plagiarism-free. Presentation time: 5 minutes + 2 minutes Q&A. PPT format only.'
        },
        {
            id: 2,
            title: 'Project Presentation',
            type: 'technical',
            time: '09:45 AM – 11:30 AM',
            teamSize: '3-5 members',
            shortDesc: 'Demonstrate innovative projects, prototypes, or working models.',
            guidelines: 'Hardware / Software / Hybrid projects allowed. Working demo must be shown. Presentation time: 5 minutes + 2 minutes Q&A.'
        },
        {
            id: 3,
            title: 'Technical Quiz',
            type: 'technical',
            time: '11:30 AM – 12:00 PM',
            teamSize: '2 members',
            shortDesc: 'A quiz event designed to test participants technical knowledge.',
            guidelines: 'Team size: 2 members. Single round only. No mobile phones or external help allowed.'
        },
        {
            id: 4,
            title: 'Coding Challenge',
            type: 'technical',
            time: '12:00 PM – 12:30 PM',
            teamSize: '2 members',
            shortDesc: 'A competitive programming event focused on logic and problem-solving.',
            guidelines: 'Team size: 2 members. Language must be known: C, C++, Java, Python. Internet access is prohibited.'
        },
        {
            id: 5,
            title: 'Marketing Insights',
            type: 'technical',
            time: '11:30 AM – 12:30 PM',
            teamSize: '2 members',
            shortDesc: 'Showcase your communication, presentation, and persuasive skills.',
            guidelines: 'Topics will be given on the spot. Time limit will be announced during the event. Focus on clarity, confidence, and content relevance.'
        },
        {
            id: 6,
            title: 'Chaos Carnival',
            type: 'non-technical',
            time: '01:50 PM – 02:30 PM',
            teamSize: '2 members',
            shortDesc: 'A fun-packed event with exciting games and engagement challenges.',
            guidelines: 'Rules will be explained on the spot. Fair play is mandatory. Team size: 2 members.'
        },
        {
            id: 7,
            title: 'IPL Auction',
            type: 'non-technical',
            time: '01:50 PM – 03:20 PM',
            teamSize: '2 members',
            shortDesc: 'Experience strategic bidding and team management in an IPL-style auction.',
            guidelines: 'Fixed virtual budget will be provided. Smart bidding and balanced team selection required. Team size: 2 members.'
        },
        {
            id: 8,
            title: 'Esports(Battle royal)',
            type: 'non-technical',
            time: '02:30 PM – 03:15 PM',
            teamSize: 'Duo or Squad',
            shortDesc: 'A high-intensity battle royale gaming event for competitive players.',
            guidelines: 'Mode: Duo or Squad. Players must use their own mobile devices. Use of hacks, mods, or emulators is strictly prohibited.'
        }
    ];

    // State for the custom JS/CSS book
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const totalPages = events.length; 
    const [showRegisterGuide, setShowRegisterGuide] = useState(false);
    
    const handleViewDetails = (event) => {
        setSelectedEvent(event);
        setShowRegisterGuide(false);
    };

    const closeDetails = () => {
        setSelectedEvent(null);
        setShowRegisterGuide(false);
    };
    const flipPage = (index) => {
        if (index === currentPage) {
             setCurrentPage(currentPage + 1);
        } else if (index === currentPage - 1) {
             setCurrentPage(currentPage - 1);
        }
    };

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleOpenPage = (e) => {
            const pageIndex = e.detail.pageIndex;
            if (pageIndex !== undefined) {
                // Update page state for the book
                setCurrentPage(pageIndex);
            }
        };

        window.addEventListener('open-event-page', handleOpenPage);
        return () => window.removeEventListener('open-event-page', handleOpenPage);
    }, []);

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
                    <MobileFileStack events={events} onViewDetails={handleViewDetails} />
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
                                            <Page number={pageIndex} event={event} onViewDetails={handleViewDetails} />
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

            {/* Event Detail Modal */}
            {selectedEvent && (
                isMobile ? createPortal(
                    <div className="mobile-popup-overlay" style={{
                        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 10000,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        padding: '1.5rem'
                    }} onClick={closeDetails}>
                        <div className="mobile-popup-box" style={{
                            backgroundColor: '#f7f3e8',
                            width: '100%',
                            maxWidth: '380px',
                            maxHeight: '85vh',
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                            overflow: 'hidden',
                            position: 'relative',
                            animation: 'popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }} onClick={(e) => e.stopPropagation()}>
                            
                            {/* Mobile Header */}
                            <div style={{
                                padding: '1.2rem',
                                background: '#1a1a1a',
                                color: '#f7f3e8',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '2px solid #c00'
                            }}>
                                <span style={{ fontFamily: 'Courier New', fontWeight: 'bold', letterSpacing: '1px' }}>
                                    {selectedEvent.id.toString().padStart(3, '0')} // GUIDELINES
                                </span>
                                <button onClick={closeDetails} style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#f7f3e8',
                                    fontSize: '1.5rem',
                                    cursor: 'pointer',
                                    width: '30px',
                                    height: '30px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>&times;</button>
                            </div>

                            {/* Mobile Body */}
                            <div style={{
                                padding: '1.5rem',
                                overflowY: 'auto',
                                flex: 1
                            }}>
                                {!showRegisterGuide ? (
                                    <>
                                        <h3 style={{
                                            fontSize: '1.8rem',
                                            margin: '0 0 1rem 0',
                                            lineHeight: '1.1',
                                            color: '#1a1a1a',
                                            textTransform: 'uppercase'
                                        }}>{selectedEvent.title}</h3>
                                        
                                        <div style={{
                                            fontSize: '1rem',
                                            lineHeight: '1.6',
                                            color: '#444',
                                            marginBottom: '1.5rem',
                                            borderLeft: '3px solid #c00',
                                            paddingLeft: '1rem'
                                        }}>
                                            {selectedEvent.guidelines}
                                        </div>

                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '1rem',
                                            background: '#e6e0d0',
                                            padding: '1rem',
                                            borderRadius: '8px'
                                        }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.7rem', color: '#666', fontWeight: 'bold' }}>TIME</span>
                                                <span style={{ fontWeight: 'bold', color: '#000' }}>{selectedEvent.time.split('–')[0]}</span>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.7rem', color: '#666', fontWeight: 'bold' }}>TYPE</span>
                                                <span style={{ fontWeight: 'bold', color: '#000' }}>{selectedEvent.type.toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', marginTop: 0, color: '#000' }}>REGISTRATION PROTOCOLS</h3>
                                        <ul style={{ 
                                            listStyle: 'none', 
                                            padding: 0, 
                                            margin: 0,
                                            display: 'flex', 
                                            flexDirection: 'column', 
                                            gap: '1rem',
                                            color: '#000'
                                        }}>
                                            <li style={{ background: '#fff', color: '#000', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c00' }}>
                                                <strong>01.</strong> Payment is <span style={{color: '#c00'}}>Mandatory</span> for participation. Avoid team payments if possible.
                                            </li>
                                            <li style={{ background: '#fff', color: '#000', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c00' }}>
                                                <strong>02.</strong> Join the WhatsApp group immediately after payment.
                                            </li>
                                            <li style={{ background: '#fff', color: '#000', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c00' }}>
                                                <strong>03.</strong> Event forms will be shared ONLY in the WhatsApp group.
                                            </li>
                                        </ul>
                                    </>
                                )}
                            </div>

                            {/* Mobile Footer */}
                            <div style={{
                                padding: '1rem 1.5rem',
                                background: '#e6e0d0',
                                borderTop: '1px solid #d4cbb8'
                            }}>
                                {!showRegisterGuide ? (
                                    <button 
                                        onClick={() => setShowRegisterGuide(true)}
                                        style={{
                                            width: '100%',
                                            padding: '1rem',
                                            background: '#1a1a1a',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        How to Register
                                    </button>
                                ) : (
                                    <a 
                                        href="https://forms.gle/JfgkzXoAZqTEXuGz8" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '1rem',
                                            background: '#c00',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            cursor: 'pointer',
                                            textAlign: 'center',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        Register Now
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>,
                    document.body
                ) : (
                    <div className="event-modal-overlay" onClick={closeDetails}>
                        <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header" style={{ padding: '1.5rem 2rem 1rem', flexShrink: 0, justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                                <span className="modal-stamp" style={{ fontSize: '1rem', padding: '0.3rem 0.8rem', borderWidth: '2px' }}>TOP SECRET</span>
                                <button className="modal-close" onClick={closeDetails} style={{ fontSize: '2rem', lineHeight: '1' }}>&times;</button>
                            </div>
                            
                            <div className="modal-body" style={{ flex: 1, overflowY: 'auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {!showRegisterGuide ? (
                                    <>
                                        <div className="modal-file-info" style={{ marginBottom: '0.5rem' }}>
                                            <span className="file-label" style={{ fontSize: '0.9rem' }}>SUBJECT: </span>
                                            <h3 className="modal-title" style={{ fontSize: '2rem', marginTop: '0', lineHeight: 1 }}>{selectedEvent.title}</h3>
                                        </div>
                                        
                                        <div className="modal-divider" style={{ margin: '0.5rem 0', height: '4px' }}></div>
                                        
                                        <div className="modal-section" style={{ marginBottom: '1rem' }}>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>MISSION GUIDELINES</h4>
                                            <p style={{ fontSize: '1rem', lineHeight: '1.5', marginBottom: 0 }}>{selectedEvent.guidelines}</p>
                                        </div>

                                        <div className="modal-details-grid" style={{ marginBottom: '0.5rem', gap: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                                            <div className="modal-item">
                                                <span className="label" style={{ fontSize: '0.7rem' }}>MISSION TIME</span>
                                                <span className="value" style={{ fontSize: '1rem' }}>{selectedEvent.time}</span>
                                            </div>
                                            <div className="modal-item">
                                                <span className="label" style={{ fontSize: '0.7rem' }}>SECURITY CLEARANCE</span>
                                                <span className="value" style={{ fontSize: '1rem' }}>{selectedEvent.type.toUpperCase()}</span>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="modal-file-info" style={{ marginBottom: '0.5rem' }}>
                                            <span className="file-label" style={{ fontSize: '0.9rem' }}>PROTOCOL: </span>
                                            <h3 className="modal-title" style={{ fontSize: '2rem', marginTop: '0', lineHeight: 1 }}>REGISTRATION</h3>
                                        </div>
                                        
                                        <div className="modal-divider" style={{ margin: '0.5rem 0', height: '4px' }}></div>
                                        
                                        <div className="modal-section" style={{ flex: 1 }}>
                                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>INSTRUCTIONS</h4>
                                            <ul style={{ listStyle: 'none', padding: 0, color: '#333', fontFamily: 'Courier New', lineHeight: '1.5', fontSize: '1rem' }}>
                                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                                                    <span style={{ color: '#c00', fontWeight: 'bold' }}>01</span>
                                                    <span>Individual participation payment is <strong>MANDATORY</strong>. Team payment is not recommended.</span>
                                                </li>
                                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                                                    <span style={{ color: '#c00', fontWeight: 'bold' }}>02</span>
                                                    <span>After payment, join the official WhatsApp group.</span>
                                                </li>
                                                <li style={{ marginBottom: '0.8rem', display: 'flex', gap: '10px' }}>
                                                    <span style={{ color: '#c00', fontWeight: 'bold' }}>03</span>
                                                    <span>Specific event forms will be circulated <strong>ONLY</strong> in the WhatsApp group.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="modal-fixed-footer" style={{ padding: '1.5rem 2rem', flexShrink: 0, borderTop: '1px dashed #d4cbb8', marginTop: '0', background: '#f7f3e8', zIndex: 10 }}>
                                 <div className="modal-actions" style={{ marginBottom: '1rem' }}>
                                    {!showRegisterGuide ? (
                                        <button 
                                            onClick={() => setShowRegisterGuide(true)}
                                            className="modal-reg-btn"
                                            style={{ width: '100%', padding: '0.8rem', fontSize: '1.1rem' }}
                                        >
                                            HOW TO REGISTER
                                        </button>
                                    ) : (
                                        <a 
                                            href="https://forms.gle/JfgkzXoAZqTEXuGz8" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="modal-reg-btn"
                                            style={{ width: '100%', display: 'inline-block', textAlign: 'center', padding: '0.8rem', fontSize: '1.1rem' }}
                                        >
                                            REGISTER NOW
                                        </a>
                                    )}
                                </div>
                                <div className="modal-footer" style={{ padding: 0 }}>
                                    <span className="footer-warning" style={{ fontSize: '0.6rem', lineHeight: '1.2', display: 'block' }}>THIS DOCUMENT IS FOR DEPARTMENT EYES ONLY. UNAUTHORIZED SHARING IS PROHIBITED.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </section>
    );
}

export default Events;
