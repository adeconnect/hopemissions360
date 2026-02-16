'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you'd send this to an API
        console.log('Form submitted:', formData);
        setStatus('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    const contactInfo = [
        { icon: '📧', label: 'Email', value: 'hopemissions360@gmail.com', href: 'mailto:hopemissions360@gmail.com' },
        { icon: '📞', label: 'Phone', value: '954-557-2351', href: 'tel:954-557-2351' },
        { icon: '📍', label: 'Address', value: '2411 Lance Ridge, Buford, GA 30519' },
        { icon: '📬', label: 'Mailing Address (Donations)', value: '1003 Gather Drive, Lawrenceville, GA 30043' },
    ];

    return (
        <section id="contact" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block text-sm font-semibold text-[#e63946] uppercase tracking-widest mb-3">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
                        Contact Us
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {contactInfo.map((item) => (
                            <div key={item.label} className="flex gap-4 items-start">
                                <span className="text-3xl">{item.icon}</span>
                                <div>
                                    <h4 className="font-semibold text-lg text-[#1e3a5f] mb-1">{item.label}</h4>
                                    {item.href ? (
                                        <a href={item.href} className="text-gray-500 hover:text-[#e63946] transition-colors">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-500">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="mb-5">
                            <label htmlFor="name" className="block font-medium mb-2 text-[#1d1d2c]">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a5f] transition-colors"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email" className="block font-medium mb-2 text-[#1d1d2c]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a5f] transition-colors"
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="subject" className="block font-medium mb-2 text-[#1d1d2c]">
                                Subject
                            </label>
                            <select
                                id="subject"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a5f] transition-colors"
                            >
                                <option value="">Select a topic</option>
                                <option value="volunteer">Volunteer Opportunities</option>
                                <option value="donation">Donation Inquiry</option>
                                <option value="mission">Mission Trip Info</option>
                                <option value="partnership">Partnership</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="message" className="block font-medium mb-2 text-[#1d1d2c]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                placeholder="How can we help you?"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#1e3a5f] transition-colors resize-y"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            Send Message
                        </button>

                        {status && (
                            <p className="mt-4 p-4 bg-green-500 text-white rounded-xl text-center">
                                {status}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}
