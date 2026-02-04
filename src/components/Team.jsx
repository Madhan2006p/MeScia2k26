import { useRef } from 'react';

const TiltCard = ({ children }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div
            ref={cardRef}
            className="team-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'transform 0.1s ease-out' }}
        >
            {children}
        </div>
    );
};

function Team() {
    const teamMembers = [
        {
            name: 'M.Arumugam',
            role: 'Assistant Professor(SLG)',
            initial: 'A',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 98427 78152'
        },
        {
            name: 'Rithanya Paramashivam',
            role: 'Secretary',
            initial: 'R',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 93457 48455'
        },
        {
            name: 'Naveen Kumar',
            role: 'Additional Secretary',
            initial: 'N',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 824 878 8729'
        },
        {
            name: 'Dharanesh',
            role: 'Joint Secretary',
            initial: 'D',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 93429 92454'
        },
        {
            name: 'Dharshini',
            role: 'Treasurer',
            initial: 'D',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 82206 33723'
        },
        {
            name: 'Suriya',
            role: 'Treasurer',
            initial: 'S',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 88703 31488'
        },
        {
            name: 'B.R. Pranesh',
            role: 'Executive Head',
            initial: 'P',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 83004 53308'
        },
        {
            name: 'Tanisha',
            role: 'Executive Head',
            initial: 'T',
            email: 'mescia26@kongu.ac.in',
            phone: '+91 63824 64950'
        }
    ];

    return (
        <section id="team" className="section">
            <div className="container">
                <h2 className="section-title glitch" data-text="Our Team">Our Team</h2>
                <p className="section-subtitle">
                    Meet the minds behind MeScia 26
                </p>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TiltCard key={index}>

                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-contact">
                                <a href={`mailto:${member.email}`} className="contact-icon" title="Email" style={{ marginRight: '1rem' }}>
                                    ✉️
                                </a>
                                <a href={`tel:${member.phone}`} className="contact-date" title="Phone" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                                    📞 {member.phone}
                                </a>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team;
