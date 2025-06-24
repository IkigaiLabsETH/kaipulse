"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const sotograndeData = {
    title: "Luxury Residences",
    location: "Sotogrande, San Roque, Cádiz, Spain",
    overview: "Sotogrande is a 20-square-kilometer private residential and leisure estate on the Costa del Sol, known for its understated luxury and world-class amenities. It's a haven for those seeking privacy and a Mediterranean lifestyle.",
    heroVideo: "https://www.youtube.com/embed/twG2vuGxTNE",
    sections: [
        {
            title: "The Sotogrande Lifestyle",
            points: [
                {
                    title: "Exclusive Residences",
                    content: "A diverse range of luxury villas, apartments, and penthouses, including exclusive developments like La Reserva de Sotogrande, The Fifteen, and waterfront apartments in the Marina."
                },
                {
                    title: "World-Class Amenities",
                    content: "Home to five world-class golf courses (including Valderrama), the Santa Maria Polo Club, a vibrant marina, tennis academies, and exclusive beach clubs."
                },
                {
                    title: "Unrivaled Location",
                    content: "Perfectly situated between Gibraltar and Marbella, offering stunning sea views, mountain vistas, and easy access to international airports."
                },
                {
                    title: "Investment Potential",
                    content: "A thriving luxury market with stable property values and high rental demand, enhanced by branded residences and sustainable, high-tech designs."
                }
            ]
        },
    ],
    villageVerde: {
        title: "Village Verde, La Reserva de Sotogrande",
        overview: "An exclusive residential development within La Reserva de Sotogrande. Set in 6 hectares of lush, car-free parkland, it offers a tranquil, secure environment with sea and golf course views, emphasizing a connection with nature.",
        keyFeatures: [
            {
                title: "Residences & Design",
                content: "124 luxury apartments, penthouses, and 17 villas (181-524 m²) designed by L35 Architects. The design blends contemporary style with Andalusian influences and was awarded 'Design of the Year' at the 2024 PORCELANOSA Awards."
            },
            {
                title: "Pricing & Availability",
                content: "Prices start at €830,000. Phase I is sold out. Phase II is under construction for mid-2025 completion, with limited units remaining available for purchase."
            },
            {
                title: "World-Class Amenities",
                content: "Includes communal pools, a gym, spa, and croquet lawn. Residents get exclusive access to La Reserva Club's 18-hole golf course, inland beach lagoon, and tennis center."
            },
            {
                title: "Investment & Sustainability",
                content: "Located in a stable luxury market with high rental demand. The project's value is enhanced by its BREEAM 'GOOD' sustainability certification and recent design awards."
            }
        ],
        timeline: {
            title: "Development Timeline & Key Updates",
            points: [
                "Phase I: Completed and delivered in July 2023 (49 units sold out).",
                "Phase II: Under construction, with completion expected by mid-2025.",
                "Awards: Honored with 'Design of the Year' at the 2024 PORCELANOSA Awards.",
                "Sustainability: Achieved BREEAM 'GOOD' certification for its eco-friendly design."
            ]
        },
        comparison: {
            title: "How It Compares to Six Senses",
            content: "Village Verde mirrors the ethos of luxury and nature-integrated living found in ",
            linkText: "Six Senses properties",
            linkUrl: "https://www.livethelife.tv/sixsenses",
            contentAfterLink: ". While it lacks specific wellness branding, it compensates with the extensive sports facilities of Sotogrande, including championship golf and polo, and a more developed, year-round community."
        }
    },
    contact: {
        email: "stephanie@noll-sotogrande.com",
        phone: "+34 607 465 383"
    }
};

export default function SotograndePage() {
    return (
        <div className="min-h-screen bg-black text-white font-satoshi">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
                <div className="space-y-16">
                    {/* Hero Section */}
                    <div className="text-center space-y-8">
                        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
                            {sotograndeData.location}
                        </p>
                        <h1 className="text-center">
                            <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-epilogue">
                                {sotograndeData.title}
                            </span>
                        </h1>
                        <div className="flex items-center justify-center mt-6">
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                            <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">{sotograndeData.overview}</p>
                            <div className="h-px w-24 bg-yellow-500/30"></div>
                        </div>

                        {/* Featured Visual */}
                        <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                            <iframe
                                src={sotograndeData.heroVideo}
                                title="Village Verde Sotogrande"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Sotogrande Highlights Section */}
                    {sotograndeData.sections.map((section, index) => (
                        <div key={index} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 text-center font-epilogue">
                                {section.title}
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {section.points.map((point, pIndex) => (
                                    <Card key={pIndex} className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                                        <CardHeader>
                                            <CardTitle className="font-epilogue text-xl text-yellow-400">{point.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-white/80">{point.content}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Village Verde Section */}
                    <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2 text-center font-epilogue">
                            {sotograndeData.villageVerde.title}
                        </h2>
                         <p className="mx-auto max-w-3xl text-center text-lg text-white/70 font-light italic font-satoshi mb-8">{sotograndeData.villageVerde.overview}</p>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {sotograndeData.villageVerde.keyFeatures.map((feature, index) => (
                                <Card key={index} className="bg-black p-6 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                                    <CardHeader>
                                        <CardTitle className="font-epilogue text-xl text-yellow-400">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-white/80">{feature.content}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">{sotograndeData.villageVerde.timeline.title}</h3>
                                <ul className="list-disc list-inside text-white/80 space-y-1">
                                    {sotograndeData.villageVerde.timeline.points.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-yellow-400 mb-2">{sotograndeData.villageVerde.comparison.title}</h3>
                                <p className="text-white/80">
                                    {sotograndeData.villageVerde.comparison.content}
                                    <Link href={sotograndeData.villageVerde.comparison.linkUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline">
                                        {sotograndeData.villageVerde.comparison.linkText}
                                    </Link>
                                    {sotograndeData.villageVerde.comparison.contentAfterLink}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center pt-8">
                        <p className="text-white/70 font-satoshi mb-4">
                            For inquiries, contact Noll Sotogrande at {sotograndeData.contact.email} or {sotograndeData.contact.phone}.
                        </p>
                        <Link href={`mailto:${sotograndeData.contact.email}`}>
                            <Button className="bg-yellow-500 text-black font-bold px-8 py-3 rounded-none hover:bg-yellow-400 transition-all duration-300">
                                Contact Agent
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
