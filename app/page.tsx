import CoursesSection from "@/components/Sections/CoursesSection";
import Hero from "@/components/Sections/Hero";
import InfoAndCourses from "@/components/Sections/About";
import { Info } from "lucide-react";
import Image from "next/image";
import AboutSection from "@/components/Sections/About";
import WACStatusSection from "@/components/Sections/WacStatusSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoursesSection />
      <AboutSection />
      <WACStatusSection />
    </div>
  );
}
