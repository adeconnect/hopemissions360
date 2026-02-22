import Link from 'next/link';
import Image from 'next/image';
import {
  Header,
  Footer,
  Hero,
  EventsSlider,
  VideoSection,
  VolunteerSection,
  QRCodeSection,
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

        {/* Events Slider */}
        <EventsSlider />

        {/* Video Clip */}
        <VideoSection />

        {/* Mission Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-[#4169e1]/10 rounded-full text-[#4169e1] text-sm font-semibold mb-4">
                WHO WE ARE
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">Our Mission & Vision</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hope Missions 360, Inc. seeks to provide medical, dental, and vision care as well as meeting
                the basic needs of underserved populations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-[#4169e1] to-[#2a4a6f] rounded-3xl p-8 text-white">
                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  🎯
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-white/90">
                  Hope Missions 360, Inc. seeks to provide medical, dental, and vision care
                  as well as meeting the basic needs of underserved populations.
                </p>
              </div>
              <div className="bg-gradient-to-br from-[#800020] to-[#a52a2a] rounded-3xl p-8 text-white">
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
                className="inline-flex items-center gap-2 text-[#4169e1] font-semibold hover:text-[#800020] transition-colors"
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
              <span className="inline-block px-4 py-2 bg-[#800020]/10 rounded-full text-[#800020] text-sm font-semibold mb-4">
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
                    <h3 className="text-lg font-bold text-[#1d1d2c] group-hover:text-[#800020] transition-colors">
                      {program.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4169e1] text-white font-semibold rounded-full hover:bg-[#2a4a6f] transition-colors"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-16 bg-gradient-to-r from-[#4169e1] to-[#2a4a6f]">
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

        {/* Volunteer Form Section */}
        <VolunteerSection />

        {/* QR Code Section */}
        <QRCodeSection />
      </main>
      <Footer />
    </>
  );
}
