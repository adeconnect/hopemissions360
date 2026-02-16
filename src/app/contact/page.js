import Link from 'next/link';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Contact Us | Hope Missions 360',
    description: 'Get in touch with Hope Missions 360. Contact us for volunteer opportunities, donations, or to learn more about our mission.',
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/hero.png')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#f4a261] text-sm font-semibold mb-6">
                            GET IN TOUCH
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            We'd love to hear from you. Whether you want to volunteer, donate, or learn more
                            about our mission, we're here to help.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-2xl font-bold text-[#1d1d2c] mb-6">Send Us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                                                placeholder="Your first name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                                                placeholder="Your last name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Specialty (if applicable)</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                                            placeholder="e.g., Nurse, Dentist, Teacher..."
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all resize-none"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-2xl font-bold text-[#1d1d2c] mb-6">Contact Information</h2>

                                {/* Email */}
                                <div className="bg-[#fafafa] rounded-2xl p-6 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                                            📧
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1d1d2c] mb-1">Email</h3>
                                            <a href="mailto:hopemissions360@gmail.com" className="text-[#e63946] hover:underline">
                                                hopemissions360@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Physical Address */}
                                <div className="bg-[#fafafa] rounded-2xl p-6 mb-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                                            📍
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1d1d2c] mb-1">Physical Address</h3>
                                            <p className="text-gray-600">
                                                3276 Buford Drive, Ste 104 #408<br />
                                                Buford, GA 30519<br />
                                                United States
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mailing Address */}
                                <div className="bg-[#fafafa] rounded-2xl p-6 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                                            ✉️
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#1d1d2c] mb-1">Mailing Address</h3>
                                            <p className="text-gray-600">
                                                Hope Missions 360, Inc.<br />
                                                1003 Gather Drive<br />
                                                Lawrenceville, GA 30043
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Volunteer Note */}
                                <div className="bg-[#1e3a5f] rounded-2xl p-6 text-white">
                                    <h3 className="font-bold mb-3">Want to Volunteer?</h3>
                                    <p className="text-white/80 text-sm mb-4">
                                        If you would like to participate in our short-term volunteer opportunities,
                                        please send us an email. Include your name, address, phone number, and specialty
                                        in your inquiry.
                                    </p>
                                    <a
                                        href="mailto:hopemissions360@gmail.com"
                                        className="inline-flex items-center gap-2 text-[#f4a261] hover:text-white transition-colors font-medium"
                                    >
                                        Email Us <span>→</span>
                                    </a>
                                </div>

                                {/* Newsletter Signup */}
                                <div className="mt-6 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] rounded-2xl p-6 text-white">
                                    <h3 className="font-bold mb-2">Stay Updated</h3>
                                    <p className="text-white/90 text-sm mb-4">
                                        Sign up to receive email updates on the work of Hope Missions 360, Inc.
                                        and volunteer opportunities.
                                    </p>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="flex-1 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:bg-white/30 outline-none"
                                        />
                                        <button className="px-4 py-2 bg-white text-[#e63946] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-12 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.9789098076186!2d-84.00493712354386!3d34.10847981398289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59e0ec3abf207%3A0xa5bb90b2e7fe6768!2s3276%20Buford%20Dr%2C%20Buford%2C%20GA%2030519!5e0!3m2!1sen!2sus!4v1706000000000!5m2!1sen!2sus"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hope Missions 360 Location"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
