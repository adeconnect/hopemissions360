import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Disaster Relief | Hope Missions 360',
    description: 'Hope Missions 360 Disaster Relief Projects - providing emergency response and support to communities in crisis.',
};

export default function DisasterReliefPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-[#e63946]/20 backdrop-blur-sm rounded-full text-[#e63946] text-sm font-semibold mb-6">
                            EMERGENCY RESPONSE
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Disaster Relief Projects
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            Providing emergency response and support to communities affected by natural
                            disasters and humanitarian crises.
                        </p>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Mission Card */}
                        <div className="bg-gradient-to-br from-[#e63946] to-[#ff4d5a] rounded-3xl p-8 md:p-12 text-center text-white mb-16">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                                🆘
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                When Disaster Strikes, We Respond
                            </h2>
                            <p className="text-lg text-white/90 max-w-2xl mx-auto">
                                Hope Missions 360, Inc. mobilizes volunteers and resources to provide
                                immediate relief and long-term support to communities in crisis.
                            </p>
                        </div>

                        {/* How We Help */}
                        <div className="mb-16">
                            <h3 className="text-2xl font-bold text-[#1d1d2c] mb-8 text-center">
                                How We Help
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-[#fafafa] rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                                            🏥
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1d1d2c] mb-2">Medical Assistance</h4>
                                            <p className="text-gray-600 text-sm">Deploying medical teams to provide emergency healthcare services.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#fafafa] rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                                            📦
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1d1d2c] mb-2">Supply Distribution</h4>
                                            <p className="text-gray-600 text-sm">Delivering essential supplies including food, water, and hygiene products.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#fafafa] rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                                            🏠
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1d1d2c] mb-2">Rebuilding Efforts</h4>
                                            <p className="text-gray-600 text-sm">Assisting with construction and repair of homes and community buildings.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#fafafa] rounded-2xl p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#e63946]/10 rounded-lg flex items-center justify-center text-xl shrink-0">
                                            ❤️
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#1d1d2c] mb-2">Emotional Support</h4>
                                            <p className="text-gray-600 text-sm">Providing counseling and spiritual support to affected individuals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="text-center bg-[#1e3a5f] rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">
                                Support Our Relief Efforts
                            </h3>
                            <p className="text-white/80 mb-8">
                                Your donation helps us respond quickly when disasters strike.
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
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
                                >
                                    Volunteer
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
