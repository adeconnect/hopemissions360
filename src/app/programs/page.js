import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer } from '@/components';

export const metadata = {
    title: 'Programs | Hope Missions 360',
    description: 'Explore Hope Missions 360 programs including Medical Services, Feeding Program, Hope Kidz Mission, and Health Fairs.',
};

export default function ProgramsPage() {
    const programs = [
        {
            title: 'Annual Medical Mission Trip',
            description: 'Medical services are offered by various licensed medical professionals including: Physicians, Nurses, Dentists, Physical Therapists, Audiologists, Ophthalmologists, and much more. Delivery of quality healthcare worldwide is our priority with disadvantaged communities at the center of our care.',
            quote: '"Do things for people not because of who they are or what they do in return, but because of who you are" – Mother Teresa',
            image: 'http://nebula.wsimg.com/6f4bf186c885ece24f758b41f30eacea?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🏥'
        },
        {
            title: 'Monthly Feeding Program',
            description: 'We provide food for children and families as well as training on the importance of having a healthy meal. Without adequate food and proper nutrition, children are unable to perform at their full potential both physically and mentally.',
            extra: 'Join us at our annual Easter, Summer, Thanksgiving, and Christmas dinner outreach program dedicated to serving local children in Metro Atlanta.',
            image: 'http://nebula.wsimg.com/724c1990c0a0d9a830c9f2aa45ecd386?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🍽️'
        },
        {
            title: 'Education – Computer Robotic Programming',
            description: 'Equipping the next generation with essential technological skills. Our computer robotic programming initiative introduces youth to STEM fields, fostering creativity, problem-solving, and future career opportunities.',
            image: 'http://nebula.wsimg.com/6e79eefb39c3c18f8f6793d880e77916?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '💻'
        },
        {
            title: 'Disaster Relief',
            description: 'Emergency response and relief projects for communities in crisis. We deploy resources, medical aid, and essential supplies to areas affected by natural disasters, providing immediate support and long-term recovery assistance.',
            image: 'http://nebula.wsimg.com/6f4bf186c885ece24f758b41f30eacea?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🆘'
        },
        {
            title: 'Social Welfare',
            description: 'Addressing the holistic needs of our communities. Our social welfare programs provide counseling, resource distribution, and empowerment workshops designed to uplift marginalized families and individuals.',
            image: 'http://nebula.wsimg.com/b2c98379fa5932fdcde531c2fab71080?AccessKeyId=ED10005F385AFE4A2117&disposition=0&alloworigin=1',
            icon: '🤝'
        }
    ];

    const subPrograms = [
        { title: 'Mission Trips', href: '/mission-trips', icon: '✈️', description: 'Annual medical and non-medical mission trips to the Caribbean and Central America.' },
        { title: 'Teens Empowerment', href: '/back-to-school', icon: '📚', description: 'Back to School project bringing smiles and cheer to kids in the community.' },
        { title: 'Marriage Retreat', href: '/marriage-retreat', icon: '💑', description: 'Family Empowerment programs and zoom meetings for healthy families.' },
        { title: 'Disaster Relief', href: '/disaster-relief', icon: '🆘', description: 'Emergency response and relief projects for communities in crisis.' },
    ];

    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#4169e1] to-[#0f1d2f]">
                    <div className="absolute inset-0 bg-[url('/slides/2.jpeg')] bg-cover bg-center opacity-20"></div>
                    <div className="relative max-w-7xl mx-auto px-6 text-center">
                        <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-[#ffd700] text-sm font-semibold mb-6">
                            WHAT WE DO
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Our Programs
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
                            From medical services to disaster relief, we're committed to making a lasting
                            impact in communities worldwide.
                        </p>
                    </div>
                </section>

                {/* Main Programs */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        {programs.map((program, index) => (
                            <div
                                key={index}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center mb-20 last:mb-0`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2">
                                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={program.image}
                                            alt={program.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg">
                                            {program.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2">
                                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d2c] mb-4">
                                        {program.title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {program.description}
                                    </p>
                                    {program.extra && (
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {program.extra}
                                        </p>
                                    )}
                                    {program.quote && (
                                        <blockquote className="border-l-4 border-[#800020] pl-4 italic text-gray-500">
                                            {program.quote}
                                        </blockquote>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sub-Programs Grid */}
                <section className="py-20 bg-[#fafafa]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1d1d2c] mb-4">
                                Explore Our Initiatives
                            </h2>
                            <p className="text-gray-600">
                                Learn more about our specialized programs and outreach efforts.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {subPrograms.map((program, index) => (
                                <Link
                                    key={index}
                                    href={program.href}
                                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="w-14 h-14 bg-[#4169e1]/10 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:bg-[#800020] group-hover:text-white transition-colors">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-[#1d1d2c] mb-2 group-hover:text-[#800020] transition-colors">
                                        {program.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        {program.description}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Volunteer CTA */}
                <section className="py-16 bg-[#800020]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Become a Volunteer!
                        </h2>
                        <p className="text-white/90 mb-8">
                            Not a healthcare professional? No problem! Non-medical personnel are welcomed to join
                            our team taking on administrative and registration roles.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#800020] font-semibold rounded-full hover:bg-gray-100 transition-colors"
                        >
                            I Would Like to Volunteer
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
