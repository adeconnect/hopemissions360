'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        {
            href: '/about',
            label: 'About Us'
        },
        {
            href: '/programs',
            label: 'Programs',
            children: [
                { href: '/mission-trips', label: 'Mission Trips' },
                { href: '/back-to-school', label: 'Teens Empowerment' },
                { href: '/marriage-retreat', label: 'Marriage Retreat' },
                { href: '/disaster-relief', label: 'Disaster Relief' }
            ]
        },
        { href: '/gallery', label: 'Gallery' },
        {
            href: '/contact',
            label: 'Contact Us'
        },
    ];

    const shouldShowSolidBg = isScrolled || !isHomePage;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowSolidBg
                ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="relative w-48 h-12">
                    <Image
                        src="http://nebula.wsimg.com/62479ba15aa9637fd397fb49cf45bb75?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1"
                        alt="Hope Missions 360"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li
                            key={link.href}
                            className="relative"
                            onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`text-sm font-medium relative py-2 transition-colors hover:text-[#800020] flex items-center gap-1 ${shouldShowSolidBg ? 'text-[#1d1d2c]' : 'text-white'
                                    } ${pathname === link.href ? 'text-[#800020]' : ''}`}
                            >
                                {link.label}
                                {link.children && (
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.children && openDropdown === link.href && (
                                <ul className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100">
                                    {link.children.map((child) => (
                                        <li key={child.href}>
                                            {child.external ? (
                                                <a
                                                    href={child.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#4169e1] hover:text-white transition-colors"
                                                >
                                                    {child.label}
                                                </a>
                                            ) : (
                                                <Link
                                                    href={child.href}
                                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-[#4169e1] hover:text-white transition-colors ${pathname === child.href ? 'bg-[#4169e1]/10 text-[#800020]' : ''
                                                        }`}
                                                >
                                                    {child.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/donate"
                        className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                    >
                        Donate Now
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`lg:hidden text-2xl ${shouldShowSolidBg ? 'text-[#1d1d2c]' : 'text-white'}`}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 w-4/5 max-w-md h-screen bg-[#1d1d2c] flex flex-col pt-20 px-8 gap-2 transition-transform duration-300 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="absolute top-6 right-6 text-white text-2xl"
                    >
                        ✕
                    </button>
                    {navLinks.map((link) => (
                        <div key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block text-lg text-white font-medium hover:text-[#800020] transition-colors py-2 ${pathname === link.href ? 'text-[#800020]' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                            {link.children && (
                                <div className="pl-4 border-l-2 border-white/20 ml-2">
                                    {link.children.map((child) => (
                                        child.external ? (
                                            <a
                                                key={child.href}
                                                href={child.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-sm text-white/80 hover:text-[#800020] transition-colors py-2"
                                            >
                                                {child.label}
                                            </a>
                                        ) : (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`block text-sm text-white/80 hover:text-[#800020] transition-colors py-2 ${pathname === child.href ? 'text-[#800020]' : ''
                                                    }`}
                                            >
                                                {child.label}
                                            </Link>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/donate"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-6 text-center px-8 py-4 bg-gradient-to-r from-[#800020] to-[#a52a2a] text-white font-semibold rounded-full"
                    >
                        Donate Now
                    </Link>
                </div>
            </nav>
        </header>
    );
}
