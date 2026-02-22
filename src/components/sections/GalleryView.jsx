'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function GalleryView({ galleries }) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentGallery, setCurrentGallery] = useState(null);

    const openModal = (gallery, index) => {
        setCurrentGallery(gallery);
        setCurrentIndex(index);
        setSelectedImage(gallery.images[index]);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentGallery(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (currentGallery) {
            const newIndex = (currentIndex + 1) % currentGallery.images.length;
            setCurrentIndex(newIndex);
            setSelectedImage(currentGallery.images[newIndex]);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (currentGallery) {
            const newIndex = (currentIndex - 1 + currentGallery.images.length) % currentGallery.images.length;
            setCurrentIndex(newIndex);
            setSelectedImage(currentGallery.images[newIndex]);
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {galleries.map((gallery, index) => (
                    <div key={index} className="mb-16 last:mb-0">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-[#800020]/10 rounded-xl flex items-center justify-center text-xl">
                                📸
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold text-[#1d1d2c]">
                                    {gallery.title}
                                </h2>
                                <p className="text-gray-600 text-sm">{gallery.location}</p>
                            </div>
                        </div>

                        {/* Scrollable Gallery Row */}
                        <div className="flex overflow-x-auto gap-4 pb-6 snap-x hide-scrollbar">
                            {gallery.images.map((image, imgIndex) => (
                                <div
                                    key={imgIndex}
                                    onClick={() => openModal(gallery, imgIndex)}
                                    className="relative flex-none w-[85%] sm:w-[45%] md:w-[31%] aspect-[4/3] rounded-xl overflow-hidden snap-start cursor-pointer group shadow-sm hover:shadow-md transition-all"
                                >
                                    <Image
                                        src={image}
                                        alt={`${gallery.title} - Photo ${imgIndex + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                        <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                                            🔍
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 text-2xl"
                    >
                        ✕
                    </button>

                    <button
                        onClick={prevImage}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 text-2xl"
                    >
                        ‹
                    </button>

                    <div className="relative w-full max-w-5xl aspect-video md:aspect-[4/3] max-h-[85vh] mx-4" onClick={e => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Gallery preview full screen"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50 text-2xl"
                    >
                        ›
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium">
                        {currentIndex + 1} / {currentGallery.images.length}
                    </div>
                </div>
            )}
        </section>
    );
}
