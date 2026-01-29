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
            name: 'Rithanya Paramashivam',
            role: 'Student Coordinator',
            initial: 'R',
            email: 'rithanya@example.com',
            phone: '+91 98765 43210'
        },
        {
            name: 'Naveen Kumar',
            role: 'Student Coordinator',
            initial: 'N',
            email: 'naveen@example.com',
            phone: '+91 98765 43211'
        },
        {
            name: 'Prof. Arumugam',
            role: 'Faculty Mentor & Event Convenor',
            initial: 'A',
            email: 'arumugam@example.com',
            phone: '+91 98765 43212'
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
                            <div className="team-avatar">{member.initial}</div>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <div className="team-contact">
                                <a href={`mailto:${member.email}`} className="contact-icon" title="Email">
                                    ✉️
                                </a>
                                <a href={`tel:${member.phone}`} className="contact-icon" title="Phone">
                                    📞
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
