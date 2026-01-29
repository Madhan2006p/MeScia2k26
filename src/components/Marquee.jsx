import React from 'react';

function Marquee() {
    // Cleaner text with chemical element style bullets
    const content = (
        <>
            <span className="marquee-item">MeScia <span className="element-box">26</span></span>
            <span className="separator">•</span>
            <span className="marquee-item">INNOVATE</span>
            <span className="separator">•</span>
            <span className="marquee-item">CREATE</span>
            <span className="separator">•</span>
            <span className="marquee-item">COMPETE</span>
            <span className="separator">•</span>
            <span className="marquee-item">LEARN</span>
            <span className="separator">•</span>
        </>
    );

    return (
        <div className="marquee-wrapper">
            <div className="marquee-track">
                {/* Repeat enough times to fill screen + buffer */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <React.Fragment key={i}>
                        {content}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Marquee;
