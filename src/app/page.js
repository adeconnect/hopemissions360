import Link from 'next/link';
import Image from 'next/image';
import {
  Header,
  Footer,
  Hero,
} from '@/components';

export const metadata = {
  title: 'Hope Missions 360 | Transforming Lives Through Care',
  description: 'Hope Missions 360 provides medical, dental, and vision care to underserved populations worldwide. Putting God\'s love in action through humanitarian service.',
  keywords: 'nonprofit, medical missions, humanitarian aid, dental care, vision care, disaster relief, community service',
};

export default function Home() {
  const programs = [
    { title: 'Medical Services', icon: '🏥', href: '/programs', image: 'http://nebula.wsimg.com/6f4bf186c885ece24f758b41f30eacea?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1' },
    { title: 'Feeding Program', icon: '🍽️', href: '/programs', image: 'http://nebula.wsimg.com/724c1990c0a0d9a830c9f2aa45ecd386?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1' },
    { title: 'Mission Trips', icon: '✈️', href: '/mission-trips', image: 'http://nebula.wsimg.com/6e79eefb39c3c18f8f6793d880e77916?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1' },
  ];

  const stats = [
    { number: '15,000+', label: 'Lives Touched' },
    { number: '25+', label: 'Countries Served' },
    { number: '500+', label: 'Volunteers' },
    { number: '10+', label: 'Years of Service' },
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* Featured Event: Heritage Gala */}
        <section className="relative py-16 bg-gradient-to-r from-gray-900 via-[#1a1a1a] to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('/pattern.png')] bg-fixed"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-bold tracking-wide mb-4 border border-yellow-500/30">
                  UPCOMING EVENT
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
                  <span className="text-white">Heritage in</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Harmony Gala</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-xl">
                  Join us for <span className="italic text-white">"Still We Rise"</span> — an evening of celebration, culture, and artistry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    href="/heritage-gala"
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/heritage-gala#tickets"
                    className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                  >
                    Get Tickets
                  </Link>
                </div>
              </div>

              <div className="flex-1 w-full max-w-md md:max-w-none">
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 text-xl font-bold">
                      18
                    </div>
                    <div>
                      <p className="text-lg font-bold">April 18, 2026</p>
                      <p className="text-gray-400">Saturday @ 7:30 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500 text-xl">
                      📍
                    </div>
                    <div>
                      <p className="text-lg font-bold">New Black Wallstreet</p>
                      <p className="text-gray-400">Stonecrest, GA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#1e3a5f]/10 rounded-full text-[#1e3a5f] text-sm font-semibold mb-4">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hope Missions 360, Inc. seeks to provide medical, dental, and vision care as well as meeting
                the basic needs of underserved populations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/90">
                  Hope Missions 360, Inc. seeks to provide medical, dental, and vision care
                  as well as meeting the basic needs of underserved populations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#e63946] to-[#ff4d5a] rounded-3xl p-8 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  👁️
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-white/90">
                  Hope Missions 360, Inc. endeavors to put God's love in action through the
                  provision of care that promises to improve the lifestyle of underserved population.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold hover:text-[#e63946] transition-colors"
              >
                Learn more about us <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-20 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#e63946]/10 rounded-full text-[#e63946] text-sm font-semibold mb-4">
                WHAT WE DO
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">Our Programs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From medical services to disaster relief, we're committed to making a lasting
                impact in communities worldwide.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {programs.map((program, index) => (
                <Link
                  key={index}
                  href={program.href}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl shadow-lg">
                      {program.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#1d1d2c] group-hover:text-[#e63946] transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1e3a5f] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</p>
                  <p className="text-white/80 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-6">
              Make a Difference Today
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              A monumental "Thank You" to all our volunteers who made this possible.
              Hope Missions 360, Inc. is committed to service and helping those in need
              in the Caribbean, Central America, and the United States of America.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#e63946] to-[#ff4d5a] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                ❤️ Make a Donation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] font-semibold rounded-full hover:bg-[#1e3a5f] hover:text-white transition-all"
              >
                I Would Like to Volunteer
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
