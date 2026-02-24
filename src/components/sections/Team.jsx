'use client';

import { useEffect, useRef } from 'react';

export default function Team() {
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

    const team = [
        { initials: 'AG', name: 'Alma Grace Bryan, BS', role: 'President' },
        { initials: 'OH', name: 'Dr. Oteni Hamilton, MD', role: 'V. President / Medical Director' },
        { initials: 'LS', name: 'Lorna Stanbury, RN', role: 'Director' },
        { initials: 'MM', name: 'Marvin McCain, BA', role: 'Operations Manager' },
        { initials: 'AO', name: 'Ashley Owens, RN', role: 'Nurse Manager' },
        { initials: 'RT', name: 'Dr. Robert Thomas, DDS', role: 'Dental Director' },
        { initials: 'AF', name: 'Ashley Francis', role: 'Team Member' },
        { initials: 'CM', name: 'Charmers Malcolm, MBA', role: 'Director' },
    ];

    return (
        <section id="team" className="py-24 bg-white" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#800020] uppercase tracking-widest mb-3">
                        Our Leadership
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4169e1] mb-4">
                        Meet the Team
                    </h2>
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div
                            key={member.name}
                            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-2xl p-8 text-center shadow-md hover:-translate-y-2 hover:shadow-xl"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#4169e1] to-[#6a8dff] flex items-center justify-center">
                                <span className="text-3xl font-bold text-white">{member.initials}</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#4169e1] mb-1">{member.name}</h3>
                            <p className="text-gray-500 text-sm">{member.role}</p>
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
