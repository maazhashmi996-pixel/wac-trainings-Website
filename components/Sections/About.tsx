import React from 'react';
import { Award, BookOpen, Users, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left Side: Visual Stats Cards */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 relative">
                        <div className="bg-gray-50 h-64 rounded-2xl flex flex-col items-center justify-center p-6 text-center hover:bg-red-50 transition-all duration-300 border border-gray-100">
                            <Award size={48} className="text-[#b5121b] mb-4" />
                            <h4 className="text-xl font-black text-gray-800 uppercase tracking-tight">Accredited Training</h4>
                            <p className="text-sm text-gray-500 mt-2 font-semibold">Global certifications to accelerate your career growth.</p>
                        </div>

                        <div className="bg-[#b5121b] h-64 rounded-2xl flex flex-col items-center justify-center p-6 text-center text-white mt-8 shadow-xl shadow-red-200">
                            <Users size={48} className="mb-4" />
                            <h4 className="text-xl font-black uppercase tracking-tight">Expert Instructors</h4>
                            <p className="text-sm opacity-90 mt-2 font-medium">Learn from certified professionals and industry experts.</p>
                        </div>

                        {/* Background Decoration */}
                        <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-40"></div>
                    </div>

                    {/* Right Side: Professional Content Area */}
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[#b5121b] font-black tracking-[0.2em] text-sm uppercase mb-3">About Our Institute</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight uppercase mb-6 italic">
                            Master the Future with <br />
                            <span className="text-[#b5121b]">Skill-Based Excellence</span>
                        </h3>

                        <div className="space-y-6">
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                Our institute is founded on a single mission: to equip every student with professional skills tailored to today’s fast-paced industry. We don’t just provide education; we deliver career-building expertise that is highly demanded in the global market.
                            </p>

                            <p className="text-gray-600 text-md leading-relaxed">
                                Our **Short Courses** portfolio offers a perfect blend of linguistic and technical domains. We provide specialized coaching for **IELTS Test Preparation (AEO & British Council)**, ensuring our students achieve international success. Simultaneously, our technical expertise spans across **Programming, Database Management, and Web & Graphics Multimedia**.
                            </p>

                            <p className="text-gray-600 text-md leading-relaxed">
                                For those aspiring to master IT infrastructure, we offer advanced certifications in **Networking & Operating Systems, A+ Hardware, and Ethical Hacking**. Our goal is to transform you into a complete professional through our **DIT (Diploma in IT)** and **PCIT** programs, ready to tackle the challenges of E-commerce and Cyber Security.
                            </p>
                        </div>

                        {/* Feature Highlights Grid */}
                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 border-t border-gray-100 pt-8">
                            <div className="flex items-center gap-3 text-gray-800 font-bold uppercase text-[10px] tracking-widest">
                                <CheckCircle className="text-[#b5121b]" size={18} /> 100% Practical Training
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-bold uppercase text-[10px] tracking-widest">
                                <CheckCircle className="text-[#b5121b]" size={18} /> High-Tech Computing Labs
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-bold uppercase text-[10px] tracking-widest">
                                <CheckCircle className="text-[#b5121b]" size={18} /> Industry Recognized Certs
                            </div>
                            <div className="flex items-center gap-3 text-gray-800 font-bold uppercase text-[10px] tracking-widest">
                                <CheckCircle className="text-[#b5121b]" size={18} /> Job Placement Support
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;