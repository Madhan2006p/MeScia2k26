import React from 'react';

const FalloutParticles = () => {
    // Generate random positions for purely decorative particles
    // Memoize or static if possible, but for simple array it's fine. 
    // We use a fixed seed concept or just random is fine for visual noise.
    // Higher density for mobile visibility
    const particles = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDuration: `${10 + Math.random() * 20}s`, // Faster
        animationDelay: `-${Math.random() * 20}s`,
        opacity: 0.3 + Math.random() * 0.5, // Brighter (0.3 - 0.8)
        size: 3 + Math.random() * 6 // Larger
    }));

    return (
        <div className="fallout-global-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%', // Better for mobile browsers
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
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
