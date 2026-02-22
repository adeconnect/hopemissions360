import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Heritage in Harmony Gala | Hope Missions 360',
    description: 'Join us for the Heritage in Harmony Gala - An Evening of Celebration. April 18, 2026. Featuring Lasisi Elenu, fashion shows, and cultural performances.',
};

export default function GalaPage() {
    return (
        <>
            <Header />
            <main className="bg-[#fffdf7]">
                {/* Hero Section */}
                <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
                    {/* Background Elements */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black to-red-900/40 opacity-80"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern.png')] opacity-10"></div>

                        {/* Animated Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-600/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-green-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
                        <div className="animate-fade-in-up">
                            <span className="inline-block px-6 py-2 border border-yellow-500/50 rounded-full text-yellow-400 font-serif italic text-xl mb-6 tracking-wide">
                                An Evening of Celebration
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">
                                    HERITAGE
                                </span>{' '}
                                <span className="block md:inline text-white">IN HARMONY</span>{' '}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-400">
                                    GALA
                                </span>
                            </h1>
                            <p className="text-3xl md:text-4xl font-serif text-yellow-500 mb-8 italic">
                                "Still We Rise"
                            </p>

                            <div className="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 text-lg md:text-xl font-light tracking-widest uppercase mb-12 border-t border-b border-white/10 py-6">
                                <span className="flex items-center gap-2">
                                    <span className="text-yellow-500">🗓</span> April 18, 2026
                                </span>
                                <span className="hidden md:block text-white/20">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-yellow-500">⏰</span> 7:30 PM
                                </span>
                                <span className="hidden md:block text-white/20">|</span>
                                <span className="flex items-center gap-2">
                                    <span className="text-yellow-500">👔</span> Formal Attire
                                </span>
                            </div>

                            <a
                                href="#tickets"
                                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)]"
                            >
                                <span className="relative z-10">Purchase Tickets - $80.00</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Feature Section: The Experience */}
                <section className="py-24 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image/Visual Side */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-900 rounded-[2rem] transform rotate-3 opacity-20"></div>
                                <div className="relative bg-[#1a1a1a] rounded-[2rem] p-8 border border-white/10 shadow-2xl overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                                    <div className="text-center relative z-10">
                                        <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full p-1 mb-6 shadow-lg shadow-yellow-500/20">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 relative">
                                                {/* Placeholder for Lasisi Elenu Image if we had one, for now a generic avatar or just text */}
                                                <div className="w-full h-full flex items-center justify-center bg-gray-900 text-4xl">
                                                    🎤
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Hosted by</h3>
                                        <h2 className="text-4xl text-yellow-400 font-serif font-bold mb-4">Lasisi Elenu</h2>
                                        <p className="text-white/60 uppercase tracking-widest text-sm">MC / Comedian</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                    A Night of <span className="text-green-700">Culture</span> & <span className="text-red-700">Artistry</span>
                                </h2>

                                <div className="space-y-6">
                                    {[
                                        { title: "Nigerian Fashion Show", icon: "👗", color: "bg-green-100 text-green-700" },
                                        { title: "David Williams - Singer", icon: "🎵", color: "bg-red-100 text-red-700" },
                                        { title: "Jamaican Cultural Band", icon: "🥁", color: "bg-yellow-100 text-yellow-700" },
                                        { title: "Classical Odissi Sattiya", icon: "💃", color: "bg-purple-100 text-purple-700" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                                            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-sm`}>
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="py-20 bg-[#1a1a1a] text-white relative">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <span className="text-yellow-500 uppercase tracking-widest text-sm font-semibold mb-4 block">The Venue</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">New Black Wallstreet</h2>
                        <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-colors">
                            <p className="text-2xl mb-2 font-serif">8109 Mall Parkway</p>
                            <p className="text-xl text-gray-400">Stonecrest, GA 30038</p>
                        </div>
                    </div>
                </section>

                {/* Ticket / CTA Section */}
                <section id="tickets" className="py-24 relative overflow-hidden bg-white">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Reserve Your Seat</h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                                Join us in supporting our mission while enjoying an unforgettable night of heritage and harmony.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="paypal" className="w-full md:w-auto">
                                    <input type="hidden" name="cmd" value="_donations" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="business" value="hopemissions360@gmail.com" />
                                    <input type="hidden" name="item_name" value="Heritage in Harmony Gala Ticket" />
                                    <input type="hidden" name="amount" value="80" />
                                    <input type="hidden" name="bn" value="godaddy_hosting_WPS_US" />
                                    <button type="submit" className="group w-full md:w-auto min-w-[200px] px-8 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold text-xl rounded-full shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.6)] hover:scale-105 transition-all">
                                        Purchase Ticket ($80)
                                    </button>
                                </form>
                                <Link href="/contact" className="hidden md:block w-full md:w-auto min-w-[200px] px-8 py-5 border-2 border-white/20 text-white font-bold text-xl rounded-full hover:bg-white/10 transition-all">
                                    Contact for Tables
                                </Link>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 text-gray-400 text-sm">
                                <p className="mb-2">For inquiries, please contact us:</p>
                                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 font-mono">
                                    <a href="tel:954-557-2351" className="hover:text-white transition-colors">954-557-2351</a>
                                    <span className="hidden md:block text-white/20">|</span>
                                    <a href="tel:678-491-1673" className="hover:text-white transition-colors">678-491-1673</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
