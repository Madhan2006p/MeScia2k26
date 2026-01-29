import { useEffect, useRef } from 'react';

function Guidelines() {
    const guidelines = [
        { code: '01', cmd: 'init_reporting', output: 'All participants must report by 08:45 AM.' },
        { code: '02', cmd: 'verify_identity', output: 'Valid college ID card includes mandatory access clearance.' },
        { code: '03', cmd: 'mount_devices', output: 'External coding units (laptops) required for technical operations.' },
        { code: '04', cmd: 'silence_comms', output: 'Communication devices must remain in silent mode.' },
        { code: '05', cmd: 'protocol_conduct', output: 'Maintain professional behavior. Harassment = immediate ejection.' },
        { code: '06', cmd: 'wear_clearance', output: 'Registration pass must be visible at all times.' },
        { code: '07', cmd: 'visual_check', output: 'Formal or semi-formal attire is recommended.' },
        { code: '08', cmd: 'replenish_energy', output: 'Complimentary lunch and refreshments provided.' },
        { code: '09', cmd: 'cert_distribution', output: 'Participation certificates awarded to all active nodes.' },
        { code: '10', cmd: 'tech_support', output: 'Technical assistance available on constant standby.' }
    ];

    return (
        <section id="guidelines" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="System Guidelines">System Guidelines</h2>

                <div className="terminal-window" style={{
                    background: 'rgba(10, 10, 10, 0.9)',
                    border: '1px solid var(--accent-primary)',
                    padding: '2rem',
                    fontFamily: "'Fira Code', monospace",
                    maxWidth: '900px',
                    margin: '0 auto',
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
                }}>
                    <div className="terminal-header" style={{ display: 'flex', gap: '8px', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                    </div>

                    <div className="terminal-content">
                        {guidelines.map((item, index) => (
                            <div key={index} className="terminal-line" style={{ marginBottom: '1.5rem' }}>
                                <div className="cmd-line" style={{ color: 'var(--accent-primary)', marginBottom: '0.2rem' }}>
                                    <span style={{ color: '#ffbd2e' }}>root@mescia:~#</span> ./run_rule_{item.code}
                                </div>
                                <div className="typing-container">
                                    <div className="typing-text" style={{ color: '#ccc', fontSize: '0.9rem' }}>
                                        {`> ${item.output}`}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="terminal-line">
                            <span style={{ color: '#ffbd2e' }}>root@mescia:~#</span> <span className="cursor-blink">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Guidelines;
