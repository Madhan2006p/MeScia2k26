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







function Events() {
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
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="events" className="section">
            <div className="container" style={{ overflow: 'visible' }}>
                <h2 className="section-title glitch" data-text="Classified Files">Classified Files</h2>

                <p className="section-subtitle">
                    {isMobile ? 'Swipe vertically to view the files.' : 'Click to flip through the classified dossiers.'}
                </p>

                {isMobile ? (
                    <div className="mobile-dossier-container" style={{ position: 'relative' }}>
                        {events.map((event, index) => (
                            <div key={event.id} className="mobile-dossier-wrapper">
                                <Page number={index + 1} event={event} />
                            </div>
                        ))}
                    </div>
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
