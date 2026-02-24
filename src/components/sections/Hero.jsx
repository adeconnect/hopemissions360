'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    '/slides/1.jpeg',
    '/slides/2.jpeg',
    '/slides/3.jpeg',
    '/slides/4.jpeg',
    '/slides/5.jpeg',
    '/slides/6.jpeg',
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image Carousel */}
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <Image
                        key={slide}
                        src={slide}
                        alt={`Hope Missions slide ${index + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        priority={index === 0}
                    />
                ))}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4169e1]/90 via-[#4169e1]/75 to-[#2a4bba]/85" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-24">
                <span className="animate-fade-up inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                    501(c)(3) Non-Profit Organization
                </span>

                <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                    Transforming <br />
                    <span className="text-gradient">lives</span>
                </h1>

                <p className="animate-fade-up-delay-2 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Providing medical, dental, and vision care while meeting the basic needs of underserved populations across the globe.
                </p>

                <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/donate"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all btn-glow"
                    >
                        <span>❤</span> Make a Donation
                    </Link>
                    <Link
                        href="/programs"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/50 text-white font-semibold text-lg rounded-full hover:bg-white/10 hover:border-white transition-all"
                    >
                        Our Programs
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white opacity-70">
                <span className="text-sm">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white/50 rounded-full relative">
                    <div className="scroll-dot absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}
