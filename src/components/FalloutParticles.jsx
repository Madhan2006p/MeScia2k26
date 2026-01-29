import React from 'react';

const FalloutParticles = () => {
    // Generate random positions for purely decorative particles
    // Memoize or static if possible, but for simple array it's fine. 
    // We use a fixed seed concept or just random is fine for visual noise.
    const particles = Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 25}s`,
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.1 + Math.random() * 0.4,
        size: 2 + Math.random() * 5
    }));

    return (
        <div className="fallout-global-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0 // Render behind main content but providing atmosphere
        }}>
            {particles.map(p => (
                <div key={p.id} style={{
                    position: 'absolute',
                    left: p.left,
                    top: '-10%',
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    background: 'var(--accent-primary)',
                    borderRadius: '50%',
                    opacity: p.opacity,
                    boxShadow: `0 0 ${p.size * 2}px var(--accent-primary)`,
                    animation: `fallout-drop ${p.animationDuration} linear infinite`,
                    animationDelay: p.animationDelay
                }} />
            ))}
        </div>
    );
};

export default FalloutParticles;
