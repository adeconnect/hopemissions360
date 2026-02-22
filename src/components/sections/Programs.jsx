'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Programs() {
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

    const mainPrograms = [
        {
            image: 'http://nebula.wsimg.com/6f4bf186c885ece24f758b41f30eacea?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🩺',
            title: 'Medical Services',
            text: 'Free medical, dental, and vision care provided by licensed physicians, nurses, dentists, physical therapists, and audiologists.',
        },
        {
            image: 'http://nebula.wsimg.com/724c1990c0a0d9a830c9f2aa45ecd386?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🍽️',
            title: 'Feeding Program',
            text: 'Providing nutritional meals and training in Georgia and beyond, with major outreaches during Easter, Summer, Thanksgiving, and Christmas.',
        },
        {
            image: 'http://nebula.wsimg.com/6e79eefb39c3c18f8f6793d880e77916?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '✈️',
            title: 'Mission Trips',
            text: 'International and local humanitarian expeditions to the Caribbean, Central America, and communities across the USA.',
        },
    ];

    const smallPrograms = [
        {
            icon: '👶',
            title: 'Hope Kidz Mission',
            text: 'Child-centered workshops on personal hygiene, dental health, and safety through interactive learning.',
        },
        {
            icon: '🎓',
            title: 'Teens Empowerment',
            text: 'Back-to-school support and youth development programs for teenagers.',
        },
        {
            icon: '🚨',
            title: 'Disaster Relief',
            text: 'Rapid response to emergencies in Puerto Rico, The Bahamas, Grenadines, and Ukraine.',
        },
        {
            icon: '💒',
            title: 'Marriage Retreats',
            text: '"Unquenchable Love" retreats for engaged and married couples.',
        },
    ];

    return (
        <section id="programs" className="py-24 bg-gray-50" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#800020] uppercase tracking-widest mb-3">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#4169e1] mb-4">
                        Our Programs
                    </h2>
                    <p className="text-lg text-gray-500">
                        From medical services to disaster relief, we're committed to making a lasting impact in communities worldwide.
                    </p>
                </div>

                {/* Main Program Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {mainPrograms.map((program, i) => (
                        <div
                            key={program.title}
                            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-2xl overflow-hidden shadow-md hover:-translate-y-2 hover:shadow-xl group"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#4169e1]/60 to-transparent" />
                            </div>
                            <div className="p-6">
                                <span className="text-3xl mb-3 block">{program.icon}</span>
                                <h3 className="text-xl font-semibold text-[#4169e1] mb-2">{program.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">{program.text}</p>
                                <a href="#contact" className="text-[#800020] font-semibold text-sm hover:gap-2 inline-flex items-center gap-1 transition-all">
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Small Program Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {smallPrograms.map((program, i) => (
                        <div
                            key={program.title}
                            className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-2xl p-6 shadow-md hover:-translate-y-2 hover:shadow-xl"
                            style={{ transitionDelay: `${(i + 3) * 100}ms` }}
                        >
                            <span className="text-3xl mb-3 block">{program.icon}</span>
                            <h3 className="text-lg font-semibold text-[#4169e1] mb-2">{program.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{program.text}</p>
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
