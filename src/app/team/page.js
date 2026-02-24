import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Our Team | Hope Missions 360',
    description: 'Meet the dedicated leadership team of Hope Missions 360, Inc. Medical professionals and community leaders serving underserved populations.',
};

export default function TeamPage() {
    const teamMembers = [
        {
            name: 'Alma Grace Bryan, BS',
            role: 'President',
            initials: 'AB'
        },
        {
            name: 'Dr. Oteni Hamilton, MD',
            role: 'V. President/Medical Director',
            initials: 'OH'
        },
        {
            name: 'Ashley Francis',
            role: 'Treasurer',
            initials: 'AF'
        },
        {
            name: 'Sonia James, RN',
            role: 'Admin. Assistant',
            initials: 'SJ'
        },
        {
            name: 'Ashley Owens, RN',
            role: 'Nurse Manager',
            initials: 'AO'
        },
        {
            name: 'Dr. Brandice Allen, DDS',
            role: 'Director',
            initials: 'BA'
        },
        {
            name: 'Lorna Stanbury, RN',
            role: 'Director',
            initials: 'LS'
        },
        {
            name: 'Marvin McCain, BA',
            role: 'Operations Manager',
            initials: 'MM'
        },
        {
            name: 'LaTanya Butler, BA',
            role: 'Children & Youth Program Coordinator',
            initials: 'LB'
        },
        {
            name: 'Dr. Robert Thomas, DDS',
            role: 'Dental Director',
            initials: 'RT'
        },
        {
            name: 'Charmers Malcolm, MBA',
            role: 'Director',
            initials: 'CM'
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4169e1] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#ffd700] text-sm font-semibold mb-6">
                            LEADERSHIP
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our Team
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Meet the dedicated professionals who lead Hope Missions 360, Inc. in serving
                            underserved communities around the world.
                        </p>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                                >
                                    {/* Profile Image Placeholder */}
                                    <div className="aspect-square bg-gradient-to-br from-[#4169e1] to-[#2a4a6f] flex items-center justify-center">
                                        <span className="text-5xl font-bold text-white/80">
                                            {member.initials}
                                        </span>
                                    </div>

                                    {/* Info */}
                                    <div className="p-5 text-center">
                                        <h3 className="text-lg font-bold text-[#1d1d2c] mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-[#800020] font-medium text-sm">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Join CTA */}
                <section className="py-16 bg-[#fafafa]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d2c] mb-4">
                            Interested in Volunteering?
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Join our team of dedicated volunteers making a difference in communities worldwide.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4169e1] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
                        >
                            Contact Us to Volunteer
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
