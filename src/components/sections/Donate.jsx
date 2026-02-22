'use client';

import { useState } from 'react';

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState(100);

    const amounts = [25, 50, 100, 250, 500, 'custom'];

    return (
        <section id="donate" className="py-24 bg-[#1d1d2c] text-white text-center">
            <div className="max-w-3xl mx-auto px-6">
                <span className="inline-block px-6 py-2 mb-6 text-sm font-semibold text-[#ffd700] bg-[#ffd700]/20 rounded-full uppercase tracking-wider">
                    Support Our Mission
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Make a Difference Today
                </h2>

                <p className="text-lg opacity-85 leading-relaxed mb-10">
                    Your generous donation helps us provide medical care, nutritious meals, and hope to communities in need. Every contribution, no matter the size, makes a lasting impact.
                </p>

                {/* Donation Amounts */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {amounts.map((amount) => (
                        <button
                            key={amount}
                            onClick={() => setSelectedAmount(amount)}
                            className={`px-6 py-3 rounded-xl font-semibold text-lg transition-all ${selectedAmount === amount
                                    ? 'bg-[#800020] border-2 border-[#800020] scale-105'
                                    : 'bg-white/10 border-2 border-white/20 hover:bg-white/20'
                                }`}
                        >
                            {amount === 'custom' ? 'Custom' : `$${amount}`}
                        </button>
                    ))}
                </div>

                {/* Donate Button */}
                <a
                    href="https://www.paypal.com/donate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all btn-glow"
                >
                    ❤ Donate Now
                </a>

                <p className="mt-8 text-sm opacity-70">
                    Hope Missions 360, Inc. is a 501(c)(3) tax-exempt organization. All donations are tax-deductible.
                </p>
            </div>
        </section>
    );
}
