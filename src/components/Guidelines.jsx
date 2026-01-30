import { useEffect, useRef } from 'react';

function Guidelines() {
    const guidelines = [
        { code: '01', cmd: 'init_reporting', output: 'All participants must report by 08:45 AM.' },
        { code: '02', cmd: 'verify_identity', output: 'Valid college ID card includes mandatory access clearance.' },
        { code: '03', cmd: 'mount_devices', output: 'External coding units (laptops) required for technical operations.' },
        { code: '04', cmd: 'silence_comms', output: 'Communication devices must remain in silent mode.' },
        { code: '05', cmd: 'visual_check', output: 'Formal or semi-formal attire is recommended.' },
        { code: '06', cmd: 'replenish_energy', output: 'Complimentary lunch and refreshments provided.' },
        { code: '07', cmd: 'cert_distribution', output: 'Participation certificates awarded to all active nodes.' },
        { code: '08', cmd: 'tech_support', output: 'Technical assistance available on constant standby.' }
    ];

    return (
        <section id="guidelines" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="System Guidelines">System Guidelines</h2>

                <div className="terminal-window glass-panel">
                    <div className="terminal-controls">
                        <div className="control red"></div>
                        <div className="control yellow"></div>
                        <div className="control green"></div>
                    </div>

                    <div className="terminal-content">
                        {guidelines.map((item, index) => (
                            <div key={index} className="terminal-line">
                                <div className="cmd-line">
                                    <span className="prompt">root@mescia:~#</span> <span className="cmd">./run_rule_{item.code}</span>
                                </div>
                                <div className="typing-container">
                                    <div className="typing-text output">
                                        {`> ${item.output}`}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="terminal-line active-line">
                            <span className="prompt">root@mescia:~#</span> <span className="cursor-blink">_</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Guidelines;
