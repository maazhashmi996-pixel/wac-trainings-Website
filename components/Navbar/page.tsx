import React from 'react';
import { Clock, Mail, Phone, MessageCircle } from 'lucide-react';

const Navbar: React.FC = () => {
    const navItems = [
        'ABOUT', 'DLP 360', 'PEARSON ASSURED UK', 'TEST BOOKING',
        'SHORT COURSES', 'ACADEMICS', 'DOWNLOADS', 'SUCCESS STORIES', 'CONTACT'
    ];

    return (
        <header className="w-full bg-white font-sans">
            {/* 1. Top Header & Logo Area */}
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left Side: Timing & Email */}
                <div className="flex items-start gap-3 order-2 md:order-1">
                    <div className="bg-[#7a1212] p-2 rounded-full mt-1">
                        <Clock size={24} className="text-white" />
                    </div>
                    <div className="flex flex-col text-sm text-gray-500 font-medium">
                        <span>Mon - Sat: 09:00 - 20:00</span>
                        <span className="hover:text-red-700 cursor-pointer">info@wac.edu.pk</span>
                    </div>
                </div>

                {/* Center: Main Logo */}
                <div className="order-1 md:order-2">
                    <img
                        src="/Wac.png"
                        alt="Wac Logo"
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                </div>

                {/* Right Side: Phone & WhatsApp */}
                <div className="flex items-center gap-4 order-3">
                    <div className="text-right hidden md:block">
                        <p className="text-gray-500 font-bold text-sm">+92 309 4158560</p>
                        <p className="text-gray-500 font-bold text-sm"></p>
                    </div>
                    <div className="text-[#7a1212] border-2 border-[#7a1212] p-2 rounded-full hover:bg-[#7a1212] hover:text-white transition-colors cursor-pointer">
                        <Phone size={24} className="rotate-90" />
                    </div>
                </div>
            </div>

            {/* 2. Main Navigation Bar */}
            <nav className="border-y border-gray-100 shadow-sm overflow-x-auto no-scrollbar bg-white sticky top-0 z-50">
                <div className="container mx-auto flex justify-center">
                    <ul className="flex items-center">
                        {navItems.map((item, index) => (
                            <li
                                key={item}
                                className={`
                  px-5 py-4 text-[12px] font-bold text-gray-700 
                  hover:text-[#7a1212] hover:bg-gray-50 
                  transition-all cursor-pointer whitespace-nowrap
                  ${index !== navItems.length - 1 ? 'border-r border-gray-100' : ''}
                `}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;