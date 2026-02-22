'use client';

import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const missionCards = [
        {
            icon: '🎯',
            title: 'Our Mission',
            text: 'To provide medical, dental, and vision care as well as meeting the basic needs of underserved populations around the world.',
        },
        {
            icon: '👁️',
            title: 'Our Vision',
            text: "To put God's love in action through the provision of care that promises to improve the lifestyle of underserved populations.",
        },
        {
            icon: '💎',
            title: 'Our Values',
            text: 'Commitment to service, collaboration with volunteers and organizations, integrity and excellence in all we do.',
        },
    ];

    const values = [
        {
            icon: '🤝',
            title: 'Commitment to Service',
            text: 'Addressing the needs of the poor, marginalized, and overlooked communities.',
        },
        {
            icon: '🌐',
            title: 'Collaboration',
            text: 'Partnering with volunteers and organizations worldwide.',
        },
        {
            icon: '⭐',
            title: 'Integrity & Excellence',
            text: 'Conducting business with accountability and commitment to quality.',
        },
        {
            icon: '💪',
            title: 'Empowerment',
            text: 'Producing healthy families and communities through individual empowerment.',
        },
    ];

    return (
        <section id="about" className="py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#800020] uppercase tracking-widest mb-3">
                        Who We Are
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4169e1] mb-4">
                        Our Mission & Vision
                    </h2>
                </div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {missionCards.map((card, i) => (
                        <div
                            key={card.title}
                            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 glass-card p-8 rounded-2xl text-center hover:-translate-y-2 hover:shadow-xl"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="text-5xl mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold text-[#4169e1] mb-3">{card.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-10 bg-gradient-to-br from-[#4169e1] to-[#2a4bba] rounded-3xl text-white">
                    {values.map((value, i) => (
                        <div
                            key={value.title}
                            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-center"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <span className="text-4xl block mb-3">{value.icon}</span>
                            <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                            <p className="text-sm opacity-85 leading-relaxed">{value.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
        </section>
    );
}
