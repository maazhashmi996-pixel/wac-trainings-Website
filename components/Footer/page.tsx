import React from 'react';
import {
    Phone,
    Mail,
    Clock,
    MapPin,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    ArrowRight,
    MessageSquare
} from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* 1. Brand & Logo Section */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            {/* Replace 'logo.png' with your actual WAC logo path */}
                            <div className="bg-white p-2 rounded-sm">
                                <h1 className="text-[#b5121b] font-black text-2xl tracking-tighter">WAC</h1>
                            </div>
                            <span className="text-xl font-bold tracking-widest uppercase">Academy</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            WAC is a premier training institute dedicated to empowering individuals with
                            cutting-edge technical and linguistic skills to excel in the global market.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#b5121b] transition-colors"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#b5121b] transition-colors"><Instagram size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#b5121b] transition-colors"><Youtube size={18} /></a>
                            <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center rounded-full hover:bg-[#b5121b] transition-colors"><Linkedin size={18} /></a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase border-l-4 border-[#b5121b] pl-4">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About WAC', 'Short Courses', 'IT Training', 'Linguistics', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 group text-sm transition-colors">
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Information (From Image Data) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase border-l-4 border-[#b5121b] pl-4">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-gray-400">
                                <Phone size={20} className="text-[#b5121b] shrink-0" />
                                <div className="text-sm">

                                    <p>+92 309 4158560</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail size={20} className="text-[#b5121b] shrink-0" />
                                <p className="text-sm">info@wac.edu.pk</p>
                            </li>
                            <li className="flex items-start gap-4 text-gray-400">
                                <Clock size={20} className="text-[#b5121b] shrink-0" />
                                <div className="text-sm">
                                    <p className="font-bold text-white uppercase text-[10px]">Office Hours</p>
                                    <p>Mon - Sat: 09:00 - 20:00</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter / Support */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 uppercase border-l-4 border-[#b5121b] pl-4">Inquiry</h4>
                        <p className="text-sm text-gray-400 mb-4">Have questions? Send us a quick message.</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 py-3 px-4 text-sm focus:outline-none focus:border-[#b5121b] transition-colors"
                            />
                            <button className="absolute right-2 top-2 bg-[#b5121b] p-1.5 hover:bg-red-700 transition-colors">
                                <MessageSquare size={16} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-widest">
                        © {currentYear} <span className="text-white">WAC Academy</span>. All Rights Reserved.
                    </p>
                    <div className="flex gap-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;