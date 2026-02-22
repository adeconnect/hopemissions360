import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Mission Trips | Hope Missions 360',
    description: 'Join Hope Missions 360 on annual medical and non-medical mission trips to the Caribbean, Central America, and beyond.',
};

export default function MissionTripsPage() {
    const pastTrips = [
        { location: 'Jamaica', year: '2017', type: 'Medical Mission' },
        { location: 'Belize', year: '2018', type: 'Medical Mission' },
        { location: 'Jamaica', year: '2018', type: 'Construction Mission', date: 'June 20-25' },
        { location: 'Dominican Republic', year: '2018', type: 'Medical Mission' }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4169e1] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/slides/1.jpeg')] bg-cover bg-center opacity-30"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#ffd700] text-sm font-semibold mb-6">
                            JOIN US
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Mission Trips
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Our annual non-medical/Medical mission trip is a few months away. If your passion
                            is helping others, join us as we partner with other charitable organizations.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-[#4169e1] to-[#2a4a6f] rounded-3xl p-8 md:p-12 text-center text-white mb-12">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                                ✈️
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Join Our Next Mission Trip
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Please contact us for your application form and travel package.
                                We welcome both medical professionals and non-medical volunteers.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#d62839] transition-colors"
                            >
                                📋 Request Application Form
                            </Link>
                        </div>

                        {/* What to Expect */}
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-[#1d1d2c] mb-6 text-center">
                                What to Expect
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                    <div className="w-14 h-14 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                        🏥
                                    </div>
                                    <h4 className="font-bold text-[#1d1d2c] mb-2">Medical Care</h4>
                                    <p className="text-gray-600 text-sm">Provide medical, dental, and vision services to underserved communities.</p>
                                </div>
                                <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                    <div className="w-14 h-14 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                        🤝
                                    </div>
                                    <h4 className="font-bold text-[#1d1d2c] mb-2">Community Outreach</h4>
                                    <p className="text-gray-600 text-sm">Build relationships and make lasting impacts in local communities.</p>
                                </div>
                                <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                    <div className="w-14 h-14 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                        💒
                                    </div>
                                    <h4 className="font-bold text-[#1d1d2c] mb-2">Faith in Action</h4>
                                    <p className="text-gray-600 text-sm">Put God's love in action through service and care.</p>
                                </div>
                            </div>
                        </div>

                        {/* Past Trips */}
                        <div>
                            <h3 className="text-2xl font-bold text-[#1d1d2c] mb-6 text-center">
                                Past Mission Trips
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {pastTrips.map((trip, index) => (
                                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#800020]/10 rounded-lg flex items-center justify-center text-xl">
                                            🌍
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1d1d2c]">
                                                {trip.location} {trip.year}
                                            </h4>
                                            <p className="text-gray-600 text-sm">{trip.type}</p>
                                            {trip.date && <p className="text-[#800020] text-xs font-medium">{trip.date}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
