"use client";

import React, { useState, useEffect } from 'react';
import {
    ChevronRight,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Mail,
    MessageCircle,
    LucideIcon,
    Globe,
    Monitor,
    Server
} from 'lucide-react';

interface SlideContent {
    label: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    icon: LucideIcon;
}

const slides: SlideContent[] = [
    {
        label: "IELTS",
        title: "IELTS - AEO &",
        subtitle: "British Council",
        description: "IELTS is accepted by more government agencies, educational institutions, and professional bodies than any other test.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920",
        icon: Globe
    },
    {
        label: "HND",
        title: "Higher National",
        subtitle: "Diploma (UK)",
        description: "Get a world-class British qualification in Business or IT. Level 5 Diploma recognized globally for top-up degrees.",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920",
        icon: Monitor
    },
    {
        label: "NETWORKING",
        title: "Cisco & Cloud",
        subtitle: "Infrastructure",
        description: "Master networking skills with hands-on labs in CCNP, CCNA, and Server Management. The most in-demand tech skill today.",
        // Professional Networking/Server Image
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=1920",
        icon: Server
    }
];

interface SocialBarIconProps {
    color: string;
    Icon: LucideIcon;
}

const SocialBarIcon: React.FC<SocialBarIconProps> = ({ color, Icon }) => (
    <a href="#" className={`${color} p-4 text-white hover:pl-10 transition-all duration-300 flex items-center justify-center shadow-md`}>
        <Icon size={20} />
    </a>
);

const Hero: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[650px] md:h-[750px] flex items-center overflow-hidden bg-black">

            {/* 1. Dynamic Backgrounds with Black Fade Transition */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Dark Overlay for professional feel */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>

                    <img
                        src={slide.image}
                        alt={slide.label}
                        className={`w-full h-full object-cover object-center scale-105 ${index === current ? 'animate-subtle-zoom' : ''}`}
                    />

                    {/* Left-side Gradient for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10"></div>
                </div>
            ))}

            {/* 2. Main Content Card */}
            <div className="container mx-auto px-4 md:px-12 relative z-20">
                <div className="relative max-w-[600px]">
                    <div
                        key={current}
                        className="bg-[#b5121b]/95 p-8 md:p-14 text-white shadow-2xl animate-in fade-in slide-in-from-bottom-10 duration-700"
                    >
                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="bg-white text-[#b5121b] px-6 py-2 font-black text-2xl tracking-tighter uppercase shadow-lg">
                                {slides[current].label}
                            </span>
                            <div className="p-2 bg-black/20 rounded-full">
                                {React.createElement(slides[current].icon, { size: 24, className: "text-white" })}
                            </div>
                        </div>

                        {/* Title Section */}
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight border-l-4 border-white pl-5 uppercase">
                            {slides[current].title} <br />
                            <span className="text-white/80 font-bold text-3xl md:text-4xl">{slides[current].subtitle}</span>
                        </h1>

                        {/* Text Body */}
                        <p className="text-lg md:text-xl leading-relaxed mb-10 font-medium text-gray-200 max-w-md italic">
                            {slides[current].description}
                        </p>

                        {/* CTA Button */}
                        <button className="bg-black text-white px-10 py-4 rounded-full flex items-center gap-4 font-black text-lg transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 group">
                            MORE INFO
                            <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} />
                        </button>
                    </div>

                    {/* Indicators / Progress Bar Style Dots */}
                    <div className="flex gap-3 mt-8 ml-2">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? 'w-12 bg-[#b5121b]' : 'w-4 bg-white/30 hover:bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. Social Sidebar (Vertical) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col z-30 shadow-2xl border-l border-white/10">
                <SocialBarIcon color="bg-[#3b5998]" Icon={Facebook} />
                <SocialBarIcon color="bg-[#e4405f]" Icon={Instagram} />
                <SocialBarIcon color="bg-[#cd201f]" Icon={Youtube} />
                <SocialBarIcon color="bg-[#0077b5]" Icon={Linkedin} />
                <SocialBarIcon color="bg-[#f39c12]" Icon={Mail} />
                <SocialBarIcon color="bg-[#25d366]" Icon={MessageCircle} />
            </div>

        </section>
    );
};

export default Hero;