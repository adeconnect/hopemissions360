import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="http://nebula.wsimg.com/b2c98379fa5932fdcde531c2fab71080?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1"
                    alt="Hope Missions volunteers providing care"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/90 via-[#1e3a5f]/75 to-[#152a45]/85" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-24">
                <span className="animate-fade-up inline-block px-6 py-2 mb-6 text-sm font-medium bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
                    501(c)(3) Non-Profit Organization
                </span>

                <h1 className="animate-fade-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
                    Putting God's Love <br />
                    <span className="text-gradient">Into Action</span>
                </h1>

                <p className="animate-fade-up-delay-2 text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Providing medical, dental, and vision care while meeting the basic needs of underserved populations across the globe.
                </p>

                <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/donate"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all btn-glow"
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
