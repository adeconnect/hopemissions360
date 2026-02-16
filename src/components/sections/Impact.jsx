'use client';

import { useEffect, useRef, useState } from 'react';

export default function Impact() {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const stats = [
        { target: 15000, label: 'Lives Touched' },
        { target: 25, label: 'Countries Served' },
        { target: 500, label: 'Volunteers' },
        { target: 20, label: 'Years of Service' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCounters = () => {
        const counters = document.querySelectorAll('.stat-counter');
        counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString();
                }
            };

            updateCounter();
        });
    };

    return (
        <section
            id="impact"
            ref={sectionRef}
            className="py-24 bg-gradient-to-br from-[#1e3a5f] to-[#152a45] text-white text-center"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#f4a261] uppercase tracking-widest mb-3">
                        Our Impact
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Making a Difference
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-6">
                            <span
                                className="stat-counter block text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-[#f4a261] bg-clip-text text-transparent mb-2"
                                data-target={stat.target}
                            >
                                0
                            </span>
                            <span className="text-sm uppercase tracking-wider opacity-85">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="max-w-3xl mx-auto p-8 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <blockquote className="text-xl md:text-2xl italic leading-relaxed mb-6">
                        "Hope Missions 360 changed my family's life. The medical care we received was not just physical healing, but a demonstration of true compassion and love."
                    </blockquote>
                    <cite className="text-sm opacity-80 not-italic">
                        — Mission Trip Recipient, Jamaica
                    </cite>
                </div>
            </div>
        </section>
    );
}
