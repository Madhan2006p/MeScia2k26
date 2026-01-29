import { useEffect } from 'react';

function SmokeEffect() {
    // Renamed conceptually to 'DigitalGrid' but kept component name to avoid breaking imports
    useEffect(() => {
        const container = document.querySelector('.smoke');
        if (!container) return;

        // Create a precise grid of particles
        const cols = 8;
        const rows = 8;

        for (let i = 0; i < cols * rows; i++) {
            const particle = document.createElement('div');
            particle.className = 'smoke-particle'; // styling handled in new CSS

            // Random precise positions
            const x = (i % cols) * (100 / cols);
            const y = Math.floor(i / cols) * (100 / rows);

            particle.style.left = `${x + Math.random() * 5}%`;
            particle.style.top = `${y + Math.random() * 5}%`;

            // Variable Pulse
            particle.style.animationDelay = `${Math.random() * 5}s`;

            container.appendChild(particle);
        }

        return () => {
            if (container) container.innerHTML = '';
        };
    }, []);

    return <div className="smoke"></div>;
}

export default SmokeEffect;
