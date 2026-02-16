import Image from 'next/image';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Gallery | Hope Missions 360',
    description: 'Photo gallery from Hope Missions 360 mission trips and community outreach events.',
};

export default function GalleryPage() {
    const galleries = [
        {
            title: 'Jamaica Mission Trip 2017',
            location: 'Jamaica',
            images: ['/missions.png', '/medical.png', '/feeding.png']
        },
        {
            title: 'Annual Thanksgiving Project',
            location: 'Atlanta, Georgia',
            images: ['/feeding.png', '/hero.png', '/medical.png']
        },
        {
            title: 'Feeding Program',
            location: 'Decatur, Georgia',
            images: ['/feeding.png', '/medical.png', '/missions.png']
        },
        {
            title: 'Belize Mission Trip 2018',
            location: 'Belize',
            images: ['/missions.png', '/hero.png', '/feeding.png']
        },
        {
            title: 'Kids Summer Splash Camp',
            location: 'Decatur, Georgia',
            images: ['/feeding.png', '/hero.png', '/medical.png']
        },
        {
            title: 'Construction Mission Trip',
            location: 'Jamaica - June 20-25, 2018',
            images: ['/hero.png', '/missions.png', '/medical.png']
        },
        {
            title: 'Dominican Republic Mission Trip 2018',
            location: 'Dominican Republic',
            images: ['/missions.png', '/medical.png', '/feeding.png']
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1e3a5f] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/missions.png')] bg-cover bg-center opacity-30"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#f4a261] text-sm font-semibold mb-6">
                            OUR MEMORIES
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Gallery
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            See the impact of our work through photos from mission trips and community events.
                        </p>
                    </div>
                </section>

                {/* Gallery Sections */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        {galleries.map((gallery, index) => (
                            <div key={index} className="mb-16 last:mb-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center text-xl">
                                        📸
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-[#1d1d2c]">
                                            {gallery.title}
                                        </h2>
                                        <p className="text-gray-600 text-sm">{gallery.location}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {gallery.images.map((image, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                                        >
                                            <Image
                                                src={image}
                                                alt={`${gallery.title} - Photo ${imgIndex + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="py-16 bg-[#fafafa]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d2c] mb-4">
                            Be Part of Our Next Story
                        </h2>
                        <p className="text-gray-600 mb-8">
                            Join us on our next mission trip and create lasting memories while making a difference.
                        </p>
                        <a
                            href="/mission-trips"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
                        >
                            ✈️ Join a Mission Trip
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
