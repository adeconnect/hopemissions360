import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Back to School | Hope Missions 360',
    description: 'Annual Back-to-School & Feeding Program bringing smiles and cheer to kids in the community.',
};

export default function BackToSchoolPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#e63946] to-[#ff4d5a]">
                    <div className="absolute inset-0 bg-[url('/feeding.png')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                            TEENS EMPOWERMENT
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Annual Back-to-School<br />& Feeding Program
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                            BRINGING SMILES AND CHEER TO KIDS IN THE COMMUNITY
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Event Highlights */}
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            <div className="bg-[#fafafa] rounded-3xl p-8">
                                <div className="w-16 h-16 bg-[#e63946]/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                    🎒
                                </div>
                                <h2 className="text-2xl font-bold text-[#1d1d2c] mb-4">
                                    Back to School Bashment
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    A fun event to help children of all ages prepare to go back to school!
                                    Every child in our community deserves access to quality education and
                                    school supplies to ensure academic success.
                                </p>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#e63946]">✓</span> Free Backpacks
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#e63946]">✓</span> Free Haircuts
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#e63946]">✓</span> Sports Physicals
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#e63946]">✓</span> Health & Dental Screenings
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-[#e63946]">✓</span> Entertainment for the Family
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-[#1e3a5f] rounded-3xl p-8 text-white">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6">
                                    🍽️
                                </div>
                                <h2 className="text-2xl font-bold mb-4">
                                    Feeding Program
                                </h2>
                                <p className="text-white/90 leading-relaxed mb-4">
                                    Join us at our annual Easter, Summer, Thanksgiving, and Christmas dinner
                                    outreach program dedicated to serving local children in Metro Atlanta.
                                </p>
                                <p className="text-white/80 text-sm">
                                    Without adequate food and proper nutrition, children are unable to perform
                                    at their full potential both physically and mentally.
                                </p>
                            </div>
                        </div>

                        {/* Impact Stats */}
                        <div className="bg-gradient-to-r from-[#f4a261] to-[#e9c46a] rounded-3xl p-8 md:p-12 text-center mb-16">
                            <h3 className="text-2xl font-bold text-[#1d1d2c] mb-8">Our Annual Impact</h3>
                            <div className="grid grid-cols-3 gap-6">
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-[#1d1d2c]">2,000+</p>
                                    <p className="text-[#1d1d2c]/80 font-medium">Items Donated</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-[#1d1d2c]">100s</p>
                                    <p className="text-[#1d1d2c]/80 font-medium">Backpacks Given</p>
                                </div>
                                <div>
                                    <p className="text-4xl md:text-5xl font-bold text-[#1d1d2c]">1000s</p>
                                    <p className="text-[#1d1d2c]/80 font-medium">Kids Served</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#1d1d2c] mb-4">
                                Get Involved
                            </h3>
                            <p className="text-gray-600 mb-8">
                                Support our mission to help children succeed. Volunteer, donate supplies, or contribute financially.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/donate"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#e63946] text-white font-semibold rounded-full hover:bg-[#d62839] transition-colors"
                                >
                                    ❤️ Donate Now
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
                                >
                                    🙋 Volunteer
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
