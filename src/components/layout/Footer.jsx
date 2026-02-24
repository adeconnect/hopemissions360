import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const quickLinks = [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Programs', href: '/programs' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Donate', href: '/donate' },
    ];

    const programLinks = [
        { label: 'Medical Services', href: '/programs' },
        { label: 'Mission Trips', href: '/mission-trips' },
        { label: 'Back to School', href: '/back-to-school' },
        { label: 'Marriage Retreat', href: '/marriage-retreat' },
        { label: 'Disaster Relief', href: '/disaster-relief' },
    ];

    return (
        <footer className="bg-[#1d1d2c] text-white py-16">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="relative block w-48 h-12 mb-4">
                            <Image
                                src="http://nebula.wsimg.com/62479ba15aa9637fd397fb49cf45bb75?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1"
                                alt="Hope Missions 360"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Transforming lives through humanitarian care for underserved communities worldwide.
                        </p>
                        <div className="text-gray-400 text-sm">
                            <p>📧 hopemissions360@gmail.com</p>
                            <p className="mt-1">📍 2411 Lance Ridge Way, Buford, GA 30519</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-[#800020] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Programs</h4>
                        <ul className="space-y-2">
                            {programLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 text-sm hover:text-[#800020] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Stay Connected</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Join our newsletter for updates on our missions and volunteer opportunities.
                        </p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 bg-[#2d2d3c] border-2 border-[#2d2d3c] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-[#800020]"
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[#2d2d3c] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                    <p>Hope Missions 360, Inc. © All Rights Reserved.</p>
                    <p>501(c)(3) Tax-Exempt Organization</p>
                </div>
            </div>
        </footer>
    );
}
