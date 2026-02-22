import Link from 'next/link';
import { Header, Footer, PaypalDonateCard } from '@/components';

export const metadata = {
    title: 'Donate | Hope Missions 360',
    description: 'Support Hope Missions 360 with your generous donation. We are a 501(c)(3) tax-exempt charity providing medical care to underserved populations.',
};

export default function DonatePage() {

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#800020] to-[#a52a2a]">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_white_1px,_transparent_1px)] bg-[size:20px_20px]"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
                            SUPPORT OUR MISSION
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Make a Donation
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                            Your generous donation helps us provide medical care, nutritious meals, and hope
                            to communities in need. Every contribution makes a lasting impact.
                        </p>
                    </div>
                </section>

                {/* Donation Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        {/* Online Donation Card via PayPal */}
                        <PaypalDonateCard />

                        {/* Mail a Check */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-[#4169e1] rounded-2xl p-8 text-white">
                                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                                    ✉️
                                </div>
                                <h3 className="text-xl font-bold mb-4">Mail Your Check</h3>
                                <p className="text-white/80 mb-4">
                                    Make checks payable to:
                                </p>
                                <div className="bg-white/10 rounded-xl p-4">
                                    <p className="font-semibold">Hope Missions 360, Inc.</p>
                                    <p className="text-white/80">1003 Gather Drive</p>
                                    <p className="text-white/80">Lawrenceville, GA 30043</p>
                                </div>
                            </div>

                            <div className="bg-[#fafafa] rounded-2xl p-8">
                                <div className="w-12 h-12 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                                    🎁
                                </div>
                                <h3 className="text-xl font-bold text-[#1d1d2c] mb-4">Where Most Needed</h3>
                                <p className="text-gray-600">
                                    Your gift to "Where Most Needed" equips Hope Missions 360, Inc. with the resources
                                    including personnel, medical supplies, supporting services, buildings, and equipment
                                    to fulfill our mission of relief worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Tax Info */}
                        <div className="bg-gradient-to-r from-[#ffd700]/20 to-[#e9c46a]/20 rounded-2xl p-8 text-center">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-md">
                                📋
                            </div>
                            <h3 className="text-xl font-bold text-[#1d1d2c] mb-3">Tax-Deductible</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Hope Missions 360, Inc. is a <strong>501(c)(3) tax-exempt charity</strong>. All contributions
                                designated for a specific project shall be applied to those projects, and we may assess
                                up to five percent to be used for administration costs.
                            </p>
                        </div>

                        {/* Gratitude Message */}
                        <div className="text-center mt-12">
                            <p className="text-lg text-gray-600 italic">
                                "Hope Missions 360, Inc. is grateful for the generous support of all of our donors.
                                We take your investment in our work seriously, and are committed to using your donation
                                to reach people in need in the most effective and cost-efficient manner."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Registration Form */}
                <section className="py-20 bg-[#fafafa]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <span className="inline-block px-4 py-2 bg-[#4169e1]/10 rounded-full text-[#4169e1] text-sm font-semibold mb-4">
                                    GET INVOLVED
                                </span>
                                <h2 className="text-3xl font-bold text-[#1d1d2c] mb-2">Program Registration</h2>
                                <p className="text-gray-600">Register for our upcoming programs, events, or volunteer training sessions.</p>
                            </div>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="Enter first name" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="Enter last name" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="Enter your email" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all" placeholder="(555) 000-0000" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Program/Event to Register For</label>
                                    <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all bg-white">
                                        <option value="">Select an option...</option>
                                        <option value="gala">Heritage in Harmony Gala</option>
                                        <option value="medical_mission">Annual Medical Mission Trip</option>
                                        <option value="feeding">Monthly Feeding Program</option>
                                        <option value="robotics">Computer Robotic Programming</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Comments</label>
                                    <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#4169e1] focus:ring-2 focus:ring-[#4169e1]/20 outline-none transition-all resize-none" placeholder="Any questions or additional information..."></textarea>
                                </div>

                                <button type="submit" className="w-full py-4 bg-[#4169e1] text-white font-bold rounded-xl hover:bg-[#2a4bba] hover:shadow-lg transition-all text-lg">
                                    Complete Registration
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Partner CTA */}
                <section className="py-16 bg-[#4169e1]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            How Can You Help?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Partner with Hope Missions 360, Inc. to save the lives of people around the world.
                            Every dollar goes a long way to sustaining positive changes in the community and
                            providing medical care to those in need.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4169e1] font-semibold rounded-full hover:bg-gray-100 transition-colors"
                            >
                                🙋 Become a Volunteer
                            </Link>
                            <Link
                                href="/programs"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-colors"
                            >
                                Learn About Our Programs
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
