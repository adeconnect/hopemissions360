import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Marriage Retreat | Hope Missions 360',
    description: 'Family Empowerment programs and Marriage Retreat by Hope Missions 360. Building healthy families and communities.',
};

export default function MarriageRetreatPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-600/20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#f4a261] text-sm font-semibold mb-6">
                            FAMILY EMPOWERMENT
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Marriage Retreat
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Building healthy families and healthy communities
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Family Matters Card */}
                        <div className="bg-gradient-to-br from-[#e63946] to-[#ff4d5a] rounded-3xl p-8 md:p-12 text-center text-white mb-16">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                                💑
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Family Matters
                            </h2>
                            <p className="text-lg text-white/90 mb-4">
                                Family Empowerment Zoom Meetings
                            </p>
                            <p className="text-white/80 max-w-2xl mx-auto">
                                Hope Missions 360, Inc. strives to produce healthy families and healthy communities
                                through empowering individuals, families, and communities to improve and maintain
                                healthy lifestyles.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                    💒
                                </div>
                                <h3 className="font-bold text-[#1d1d2c] mb-2">Marriage Enrichment</h3>
                                <p className="text-gray-600 text-sm">Strengthen your marriage through faith-based principles and practical tools.</p>
                            </div>
                            <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                    👨‍👩‍👧‍👦
                                </div>
                                <h3 className="font-bold text-[#1d1d2c] mb-2">Family Workshops</h3>
                                <p className="text-gray-600 text-sm">Interactive sessions designed to help families grow together.</p>
                            </div>
                            <div className="bg-[#fafafa] rounded-2xl p-6 text-center">
                                <div className="w-14 h-14 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                                    💬
                                </div>
                                <h3 className="font-bold text-[#1d1d2c] mb-2">Zoom Meetings</h3>
                                <p className="text-gray-600 text-sm">Join our virtual meetings from the comfort of your home.</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center bg-[#1e3a5f] rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Interested in Our Family Programs?
                            </h3>
                            <p className="text-white/80 mb-8">
                                Contact us to learn more about upcoming retreats and meetings.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-colors"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
