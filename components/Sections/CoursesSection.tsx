import React from 'react';
import {
    BookOpen,
    Code,
    Database,
    ShieldCheck,
    Monitor,
    Cpu,
    Globe,
    ShoppingBag
} from 'lucide-react';

const CoursesSection: React.FC = () => {
    const courseCategories = [
        {
            title: "Language & Exams",
            icon: <Globe className="text-[#b5121b]" size={32} />,
            items: ["IELTS Preparation (AEO & BC)", "Linguistics", "Exams Preparation", "CITEL"]
        },
        {
            title: "Programming & Web",
            icon: <Code className="text-[#b5121b]" size={32} />,
            items: ["Programming", "Web, Graphics & Multimedia", "E-commerce", "Database"]
        },
        {
            title: "IT Foundations",
            icon: <Monitor className="text-[#b5121b]" size={32} />,
            items: ["Basic IT Power Pack (ITPP)", "IT Essentials (ITE) MCSE", "Advance Excel", "Short Courses"]
        },
        {
            title: "Hardware & Networking",
            icon: <Cpu className="text-[#b5121b]" size={32} />,
            items: ["A+ Hardware", "Computer Hardware Engineer", "Networking & Operating System"]
        },
        {
            title: "Cyber Security & Diplomas",
            icon: <ShieldCheck className="text-[#b5121b]" size={32} />,
            items: ["Ethical Hacking / Cyber Security", "DIT (Diploma in IT)", "PCIT (Professional Cert in IT)"]
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter italic">
                        Our <span className="text-[#b5121b]">Professional</span> Courses
                    </h2>
                    <div className="w-24 h-1.5 bg-[#b5121b] mx-auto mt-4"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto font-medium">
                        Empowering students with industry-leading skills in Information Technology,
                        Languages, and Professional Certifications.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseCategories.map((cat, index) => (
                        <div
                            key={index}
                            className="bg-white border-t-4 border-[#b5121b] p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-red-50 rounded-lg group-hover:bg-[#b5121b] group-hover:text-white transition-colors duration-300">
                                    {cat.icon}
                                </div>
                                <h3 className="text-xl font-extrabold text-gray-800 uppercase tracking-tight">
                                    {cat.title}
                                </h3>
                            </div>

                            <ul className="space-y-3">
                                {cat.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600 group/item">
                                        <span className="w-1.5 h-1.5 bg-[#b5121b] rounded-full mr-3 group-hover/item:scale-150 transition-transform"></span>
                                        <span className="font-semibold text-sm hover:text-[#b5121b] cursor-default transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Special "Apply Now" Call to Action Card */}
                    <div className="bg-[#b5121b] p-8 flex flex-col justify-center items-center text-center text-white shadow-lg">
                        <h3 className="text-2xl font-black mb-4 uppercase">Ready to Start?</h3>
                        <p className="mb-8 opacity-90 font-light">Join Nicon Group of Institutions today and secure your future.</p>
                        <button className="bg-white text-[#b5121b] px-8 py-3 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-md active:scale-95">
                            Enroll Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;