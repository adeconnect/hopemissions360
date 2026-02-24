import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'About Us | Hope Missions 360',
    description: 'Learn about Hope Missions 360\'s mission, vision, and core values. We provide medical, dental, and vision care to underserved populations worldwide.',
};

export default function AboutPage() {
    const coreValues = [
        {
            title: 'Meeting Needs',
            description: 'Hope Missions 360, Inc. seeks to address the needs of the poor, the marginalized, and the overlooked.',
            icon: '🤝'
        },
        {
            title: 'Collaboration',
            description: 'Hope Missions 360, Inc. collaborates with volunteers, organizations, and other key individuals in the promotion of effective partnerships throughout the Organization.',
            icon: '🌐'
        },
        {
            title: 'Integrity and Excellence',
            description: 'Hope Missions 360, Inc. conducts its business with integrity, accountability, with a commitment to quality service, and appropriate communication.',
            icon: '⭐'
        },
        {
            title: 'Empowerment',
            description: 'Hope Missions 360, Inc. strives to produce healthy families and healthy communities through empowering individuals, families, and communities to improve and maintain healthy lifestyle.',
            icon: '💪'
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4169e1] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/slides/4.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#ffd700] text-sm font-semibold mb-6">
                            ABOUT US
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Who We Are
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            The organization provides nutritional meals, free medical, dental, and vision care services
                            to underserved communities both locally and internationally. We also provide personal care
                            items and educational supplies to children in need.
                        </p>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Mission */}
                            <div className="bg-gradient-to-br from-[#4169e1] to-[#2a4a6f] rounded-3xl p-8 md:p-12 text-white">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6">
                                    🎯
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Mission Statement</h2>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Hope Missions 360, Inc. seeks to provide medical, dental, and vision care
                                    as well as meeting the basic needs of underserved populations.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="bg-gradient-to-br from-[#800020] to-[#a52a2a] rounded-3xl p-8 md:p-12 text-white">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl mb-6">
                                    👁️
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Vision</h2>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    Hope Missions 360, Inc. endeavors to put God's love in action through the
                                    provision of care that promises to improve the lifestyle of underserved population.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-[#4169e1]/10 rounded-full text-[#4169e1] text-sm font-semibold mb-4">
                                OUR FOUNDATION
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c]">Core Values</h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {coreValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1d1d2c] mb-2">{value.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Board of Directors Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-2 bg-[#800020]/10 rounded-full text-[#800020] text-sm font-semibold mb-4">
                                LEADERSHIP
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">Board of Directors</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Meet the dedicated professionals who lead Hope Missions 360, Inc.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { name: 'Alma Grace Bryan, BS', role: 'President' },
                                { name: 'Dr. Oteni Hamilton, MD', role: 'V. President/Medical Director' },
                                { name: 'Ashley Francis', role: 'Treasurer' },
                                { name: 'Charmers Malcolm, MBA', role: 'Director' },
                                { name: 'Sonia James, RN', role: 'Admin. Assistant' }
                            ].map((member, index) => (
                                <div key={index} className="bg-[#fafafa] rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                    <div className="mx-auto w-20 h-20 bg-[#4169e1]/10 text-[#4169e1] rounded-full flex items-center justify-center text-xl font-bold mb-4">
                                        {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                                    <p className="text-[#800020] text-sm font-medium">{member.role}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-12">
                            <Link href="/team" className="inline-flex items-center gap-2 text-[#4169e1] font-semibold hover:text-[#800020] transition-colors">
                                View Full Team <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Sponsors Section */}
                <section className="py-20 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-[#ffd700]/20 rounded-full text-[#ffd700] text-sm font-semibold mb-4">
                            OUR PARTNERS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-12">Proud Sponsors</h2>

                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="text-2xl font-bold text-gray-400">Arby's Foundation</div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#4169e1]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Join Our Mission
                        </h2>
                        <p className="text-lg text-white/80 mb-8">
                            Partner with Hope Missions 360, Inc. to save the lives of people around the world.
                            Every dollar goes a long way to sustaining positive changes in the community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/donate"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#d62839] transition-colors"
                            >
                                ❤️ Make a Donation
                            </Link>
                            <Link
                                href="/team"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
                            >
                                Meet Our Team
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
