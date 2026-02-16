import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Donate | Hope Missions 360',
    description: 'Support Hope Missions 360 with your generous donation. We are a 501(c)(3) tax-exempt charity providing medical care to underserved populations.',
};

export default function DonatePage() {
    const donationAmounts = [25, 50, 100, 250, 500];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#e63946] to-[#ff4d5a]">
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
                        {/* Online Donation Card */}
                        <div className="bg-[#fafafa] rounded-3xl p-8 md:p-12 mb-12">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-[#e63946]/10 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                                    💳
                                </div>
                                <h2 className="text-2xl font-bold text-[#1d1d2c] mb-2">Give Online</h2>
                                <p className="text-gray-600">
                                    Credit cards accepted for one-time or recurring donations include
                                    Amex, Visa, MasterCard or Discover.
                                </p>
                            </div>

                            {/* Donation Amounts */}
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
                                {donationAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        className="py-4 px-2 bg-white border-2 border-gray-200 rounded-xl text-[#1d1d2c] font-bold hover:border-[#e63946] hover:bg-[#e63946]/5 transition-all"
                                    >
                                        ${amount}
                                    </button>
                                ))}
                                <button className="py-4 px-2 bg-white border-2 border-gray-200 rounded-xl text-[#1d1d2c] font-bold hover:border-[#e63946] hover:bg-[#e63946]/5 transition-all">
                                    Custom
                                </button>
                            </div>

                            <button className="w-full py-4 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] text-white font-bold rounded-xl hover:shadow-lg transition-all text-lg">
                                ❤️ Donate Now
                            </button>

                            <p className="text-center text-gray-500 text-sm mt-4">
                                Secure payment powered by PayPal
                            </p>
                        </div>

                        {/* Mail a Check */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-[#1e3a5f] rounded-2xl p-8 text-white">
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
                                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-2xl mb-4">
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
                        <div className="bg-gradient-to-r from-[#f4a261]/20 to-[#e9c46a]/20 rounded-2xl p-8 text-center">
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

                {/* Partner CTA */}
                <section className="py-16 bg-[#1e3a5f]">
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
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] font-semibold rounded-full hover:bg-gray-100 transition-colors"
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
