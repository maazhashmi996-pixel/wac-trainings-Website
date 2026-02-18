"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, GraduationCap, Calendar, Trophy } from 'lucide-react';

interface CounterProps {
    end: number;
    label: string;
    icon: React.ReactNode;
    suffix?: string;
}

const CounterItem: React.FC<CounterProps> = ({ end, label, icon, suffix = "+" }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds animation
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
        <div ref={containerRef} className="flex flex-col items-center text-white p-6">
            <div className="mb-4 opacity-80">{icon}</div>
            <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                {count.toLocaleString()}{suffix}
            </h3>
            <p className="text-sm md:text-base font-bold uppercase tracking-widest opacity-80">
                {label}
            </p>
        </div>
    );
};

const StatsCounter: React.FC = () => {
    return (
        <section className="bg-[#b5121b] py-16 shadow-inner">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

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
                        label="Years in Business"
                        icon={<Calendar size={32} />}
                        suffix=""
                    />

                    <CounterItem
                        end={25000}
                        label="Professional Certifications"
                        icon={<Trophy size={32} />}
                    />

                </div>
            </div>
        </section>
    );
};

export default StatsCounter;