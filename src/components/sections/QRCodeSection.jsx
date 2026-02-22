import Image from 'next/image';

export default function QRCodeSection() {
    return (
        <section className="py-20 bg-[#fafafa]">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">

                    {/* QR Code Graphic. Placeholder until real qr is provided*/}
                    <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 bg-[#f8f9fa] rounded-2xl p-4 shadow-inner border-2 border-dashed border-gray-200">
                        {/* We use an image placeholder or an SVG wrapper for the QR */}
                        <div className="w-full h-full relative">
                            {/* Replace src with actual QR code if provided. Using a dummy placeholder for now */}
                            <svg viewBox="0 0 100 100" className="w-full h-full text-[#4169e1]">
                                <rect width="100" height="100" fill="white" />
                                <path fill="currentColor" d="M10,10 h30 v30 h-30 z M15,15 h20 v20 h-20 z M20,20 h10 v10 h-10 z" />
                                <path fill="currentColor" d="M60,10 h30 v30 h-30 z M65,15 h20 v20 h-20 z M70,20 h10 v10 h-10 z" />
                                <path fill="currentColor" d="M10,60 h30 v30 h-30 z M15,65 h20 v20 h-20 z M20,70 h10 v10 h-10 z" />
                                <rect x="60" y="60" width="10" height="10" fill="currentColor" />
                                <rect x="80" y="60" width="10" height="10" fill="currentColor" />
                                <rect x="60" y="80" width="10" height="10" fill="currentColor" />
                                <rect x="80" y="80" width="10" height="10" fill="currentColor" />
                                <rect x="70" y="70" width="10" height="10" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="text-left">
                        <span className="inline-block px-4 py-2 bg-[#800020]/10 rounded-full text-[#800020] text-sm font-semibold mb-4">
                            QUICK CONNECT
                        </span>
                        <h2 className="text-3xl font-bold text-[#1d1d2c] mb-4">
                            Scan to Connect
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Use your smartphone camera to quickly access our donation page, sign up to volunteer,
                            or share our website with friends and family. A simple scan can make a lifetime of difference.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Donate Instantly</span>
                            <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Share with Friends</span>
                            <span className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">Link to Bio</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
