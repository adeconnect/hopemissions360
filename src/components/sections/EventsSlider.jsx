import Image from 'next/image';
import Link from 'next/link';

export default function EventsSlider() {
    const events = [
        {
            title: "Heritage in Harmony Gala",
            date: "April 18, 2026",
            description: 'Join us for "Still We Rise" — an evening of celebration, culture, and artistry.',
            image: "http://nebula.wsimg.com/62479ba15aa9637fd397fb49cf45bb75?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1",
            isGala: true,
            link: "/heritage-gala"
        },
        {
            title: "Annual Back to School Giveaway",
            date: "August 15, 2026",
            description: "Equipping kids for success with backpacks, school supplies, and completely free health screenings.",
            image: "http://nebula.wsimg.com/6f4bf186c885ece24f758b41f30eacea?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1",
            link: "/back-to-school"
        },
        {
            title: "Jamaica Medical Mission Trip",
            date: "June 3-9, 2026",
            description: "Providing essential medical and dental care to underserved communities in Jamaica.",
            image: "http://nebula.wsimg.com/6e79eefb39c3c18f8f6793d880e77916?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1",
            link: "/mission-trips"
        },
        {
            title: "Caribbean Medical Mission Trip",
            date: "September 2026",
            description: "Providing essential medical and dental care to underserved communities in the Caribbean.",
            image: "http://nebula.wsimg.com/b2c98379fa5932fdcde531c2fab71080?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1",
            link: "/mission-trips"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-[#ffd700]/20 rounded-full text-[#ffd700] text-sm font-semibold mb-4">
                        GET INVOLVED
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">Upcoming Events</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        Join us at our upcoming events as we work together to impact communities and change lives.
                    </p>
                    {/* Visual cue for scrolling */}
                    <div className="flex items-center justify-center gap-2 text-[#4169e1] font-medium bg-[#4169e1]/10 py-2 px-4 rounded-full w-fit mx-auto mt-2">
                        <span>←</span>
                        <span className="text-sm">Swipe to explore events</span>
                        <span>→</span>
                    </div>
                </div>

                {/* Snap Slider */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="snap-center min-w-[85vw] md:min-w-[400px] max-w-md bg-[#fafafa] rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0"
                        >
                            <div className="relative aspect-video bg-black">
                                {event.isGala ? (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#050505] to-[#151515] flex flex-col items-center justify-center p-4">
                                        <span className="text-yellow-500 font-serif italic text-xs border border-yellow-500/50 rounded-full px-3 py-1 mb-2">
                                            An Evening of Celebration
                                        </span>
                                        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-center tracking-tight">
                                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">HERITAGE</span> <span className="text-white">IN</span><br />
                                            <span className="text-white">HARMONY</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-400 to-green-400">GALA</span>
                                        </h2>
                                        <p className="text-yellow-500 italic font-serif text-sm mt-2">"Still We Rise"</p>
                                    </div>
                                ) : (
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                                {!event.isGala && (
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-bold text-[#4169e1] shadow-md">
                                        {event.date}
                                    </div>
                                )}
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-[#1d1d2c] mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">{event.description}</p>
                                <Link
                                    href={event.link}
                                    className="inline-flex items-center gap-2 text-[#4169e1] font-semibold hover:text-[#800020] transition-colors"
                                >
                                    Learn More <span>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom CSS to hide scrollbar while keeping functionality */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .hide-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}} />
            </div>
        </section>
    );
}
