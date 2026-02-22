import Image from 'next/image';
import { Header, Footer, GalleryView } from '@/components';

export const metadata = {
    title: 'Gallery | Hope Missions 360',
    description: 'Photo gallery from Hope Missions 360 mission trips and community outreach events.',
};

export default function GalleryPage() {
    const galleries = [
        {
            title: 'Jamaica Mission Trip 2017',
            location: 'Jamaica',
            images: ["/gallery/img_4.jpg", "/gallery/img_8.jpg", "/gallery/img_29.jpg", "/gallery/img_3.jpg", "/gallery/img_32.jpg", "/gallery/img_23.jpg", "/gallery/img_31.jpg", "/gallery/img_2.jpg", "/gallery/img_19.jpg", "/gallery/img_28.jpg"]
        },
        {
            title: 'Annual Thanksgiving Project',
            location: 'Atlanta, Georgia',
            images: ["/gallery/img_42.jpg", "/gallery/img_11.jpg", "/gallery/img_17.jpg", "/gallery/img_21.jpg", "/gallery/img_53.jpg", "/gallery/img_47.jpg", "/gallery/img_30.jpg", "/gallery/img_22.jpg", "/gallery/img_45.jpg", "/gallery/img_70.jpg"]
        },
        {
            title: 'Feeding Program',
            location: 'Decatur, Georgia',
            images: ["/gallery/img_38.jpg", "/gallery/img_48.jpg", "/gallery/img_7.jpg", "/gallery/img_50.jpg", "/gallery/img_49.jpg", "/gallery/img_18.jpg", "/gallery/img_36.jpg", "/gallery/img_39.jpg", "/gallery/img_58.jpg", "/gallery/img_5.jpg"]
        },
        {
            title: 'Belize Mission Trip 2018',
            location: 'Belize',
            images: ["/gallery/img_66.jpg", "/gallery/img_25.jpg", "/gallery/img_6.jpg", "/gallery/img_41.jpg", "/gallery/img_34.jpg", "/gallery/img_14.jpg", "/gallery/img_10.jpg", "/gallery/img_65.jpg", "/gallery/img_61.jpg", "/gallery/img_51.jpg"]
        },
        {
            title: 'Kids Summer Splash Camp',
            location: 'Decatur, Georgia',
            images: ["/gallery/img_55.jpg", "/gallery/img_40.jpg", "/gallery/img_13.jpg", "/gallery/img_35.jpg", "/gallery/img_26.jpg", "/gallery/img_16.jpg", "/gallery/img_54.jpg", "/gallery/img_33.jpg", "/gallery/img_57.jpg", "/gallery/img_46.jpg"]
        },
        {
            title: 'Construction Mission Trip',
            location: 'Jamaica - June 20-25, 2018',
            images: ["/gallery/img_1.jpg", "/gallery/img_27.jpg", "/gallery/img_62.jpg", "/gallery/img_56.jpg", "/gallery/img_63.jpg", "/gallery/img_60.jpg", "/gallery/img_24.jpg", "/gallery/img_44.jpg", "/gallery/img_52.jpg", "/gallery/img_12.jpg"]
        },
        {
            title: 'Dominican Republic Mission Trip 2018',
            location: 'Dominican Republic',
            images: ["/gallery/img_9.jpg", "/gallery/img_43.jpg", "/gallery/img_15.jpg", "/gallery/img_69.jpg", "/gallery/img_64.jpg", "/gallery/img_67.jpg", "/gallery/img_68.jpg", "/gallery/img_59.jpg", "/gallery/img_20.jpg", "/gallery/img_37.jpg"]
        }
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4169e1] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/slides/5.jpeg')] bg-cover bg-center opacity-30"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#ffd700] text-sm font-semibold mb-6">
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
                <GalleryView galleries={galleries} />

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
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4169e1] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
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
