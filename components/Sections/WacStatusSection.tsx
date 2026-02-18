"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Calendar, Trophy, CheckCircle } from 'lucide-react';

// --- Animated Counter Component ---
interface CounterProps {
    end: number;
    label: string;
    icon: React.ReactNode;
}

const CounterItem: React.FC<CounterProps> = ({ end, label, icon }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
            { threshold: 0.5 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
        <div ref={containerRef} className="flex flex-col items-center text-white p-6 border-r border-white/10 last:border-0">
            <div className="mb-4 text-white/70">{icon}</div>
            <h3 className="text-4xl md:text-5xl font-black mb-1 tracking-tighter">
                {count.toLocaleString()}+
            </h3>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80 text-center">
                {label}
            </p>
        </div>
    );
};

// --- Main Section Component ---
const WACStatusSection: React.FC = () => {
    return (
        <div className="w-full">
            {/* 1. Dark Red Stats Bar */}
            <section className="bg-[#b5121b] py-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <CounterItem
                            end={100000}
                            label="Happy Learners"
                            icon={<Users size={32} />}
                        />
                        <CounterItem
                            end={45000}
                            label="Short Courses Trainees"
                            icon={<GraduationCap size={32} />}
                        />
                        <CounterItem
                            end={23}
                            label="Years of Excellence"
                            icon={<Calendar size={32} />}
                        />
                        <CounterItem
                            end={25000}
                            label="Professional Certs"
                            icon={<Trophy size={32} />}
                        />
                    </div>
                </div>
            </section>

            {/* 2. Professional Description Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase leading-tight mb-8 tracking-tight">
                        WAC offers great opportunities for talented candidates – <br className="hidden md:block" />
                        <span className="text-[#b5121b]">seeking to learn and deliver in a highly competitive environment.</span>
                    </h2>

                    <div className="space-y-6 text-gray-600 font-medium leading-relaxed text-lg italic">
                        <p>
                            Today, **WAC** is a trusted name for its practical oriented and project-driven hands-on trainings.
                            Our group is determined to continue striving hard for arranging and ensuring comprehensive
                            opportunities for the students related to their educational and personal development.
                        </p>
                        <p>
                            By providing an appropriate supportive working environment, we empower our trainees to master
                            modern technologies and linguistic skills. Whether it is IT Essentials, Advanced Programming,
                            or Professional Certifications, **WAC** stands as a beacon of quality and success.
                        </p>
                    </div>

                    {/* Trust Badge Indicators */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8">
                        {['Project Driven', 'Hands-on Training', 'Global Standards', 'Career Growth'].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs font-black uppercase text-gray-400">
                                <CheckCircle size={16} className="text-[#b5121b]" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WACStatusSection;