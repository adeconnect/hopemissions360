'use client';
import { useState } from 'react';

export default function VolunteerSection() {
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder submission logic
        setStatus('success');
        setTimeout(() => setStatus(null), 3000);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-[#4169e1] to-[#2a4a6f] text-white">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div>
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                        JOIN THE MOVEMENT
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Become a Volunteer
                    </h2>
                    <p className="text-lg text-white/80 mb-8 leading-relaxed">
                        It takes a dedicated team to make a global impact. Whether you are a licensed medical professional,
                        educator, or someone passionate about logistics and administration, we need your help.
                    </p>

                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#ffd700]">✓</span>
                            <span>Medical & Dental Professionals</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#ffd700]">✓</span>
                            <span>Logistics & Coordinators</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[#ffd700]">✓</span>
                            <span>Administrative Support</span>
                        </li>
                    </ul>
                </div>

                {/* Form */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl text-[#1d1d2c]">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Volunteer Registration</h3>
                        <p className="text-gray-600 text-sm">Fill out the quick form to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                            <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="john@example.com" />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Role of Interest</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all bg-white">
                                <option>Medical Professional</option>
                                <option>Dental Professional</option>
                                <option>Logistics / Operations</option>
                                <option>Administrative / General</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-bold rounded-xl hover:shadow-lg transition-all"
                        >
                            {status === 'success' ? 'Application Sent!' : 'Submit Application'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
