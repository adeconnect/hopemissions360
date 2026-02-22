'use client';
import { useState } from 'react';

export default function VideoSection() {
    const [activeVideo, setActiveVideo] = useState(0);

    const videos = [
        "https://www.youtube.com/embed/OOfysPudirQ",
        "https://www.youtube.com/embed/ITarjJeUlHQ",
        "https://www.youtube.com/embed/2TLy9gZUwNg"
    ];
    return (
        <section className="py-20 bg-[#1d1d2c] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-block px-4 py-2 bg-[#ffd700]/20 rounded-full text-[#ffd700] text-sm font-semibold mb-4">
                            OUR IMPACT
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">See Hope in Action</h2>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            Watch how your contributions and our dedicated volunteers bring medical care,
                            relief, and hope to underserved communities around the world. Every mission trip
                            reaffirms our commitment to putting God's love into action.
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-[#2d2d3c] p-6 rounded-2xl flex-1 text-center border border-white/5">
                                <span className="block text-3xl mb-2 font-bold text-[#4169e1]">15k+</span>
                                <span className="text-sm text-gray-400">Patients Treated</span>
                            </div>
                            <div className="bg-[#2d2d3c] p-6 rounded-2xl flex-1 text-center border border-white/5">
                                <span className="block text-3xl mb-2 font-bold text-[#800020]">25+</span>
                                <span className="text-sm text-gray-400">Nations Reached</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group bg-[#0f0f1a]">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src={videos[activeVideo]}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* Video Controls / CTA */}
                        <div className="flex justify-center gap-3">
                            <button
                                onClick={() => setActiveVideo(0)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${activeVideo === 0
                                    ? 'bg-[#4169e1] text-white shadow-[0_0_15px_rgba(65,105,225,0.5)]'
                                    : 'bg-[#2d2d3c] text-gray-400 hover:bg-[#4169e1]/50 hover:text-white'
                                    }`}
                                aria-label="Play video 1"
                            >
                                1
                            </button>
                            <button
                                onClick={() => setActiveVideo(1)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${activeVideo === 1
                                    ? 'bg-[#800020] text-white shadow-[0_0_15px_rgba(128,0,32,0.5)]'
                                    : 'bg-[#2d2d3c] text-gray-400 hover:bg-[#800020]/50 hover:text-white'
                                    }`}
                                aria-label="Play video 2"
                            >
                                2
                            </button>
                            <button
                                onClick={() => setActiveVideo(2)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${activeVideo === 2
                                    ? 'bg-[#ffd700] text-[#1d1d2c] shadow-[0_0_15px_rgba(255,215,0,0.5)]'
                                    : 'bg-[#2d2d3c] text-gray-400 hover:bg-[#ffd700]/50 hover:text-white'
                                    }`}
                                aria-label="Play video 3"
                            >
                                3
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
