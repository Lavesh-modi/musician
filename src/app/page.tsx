import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses></FeaturedCourses>
    <MusicSchoolTestimonials/>
    </>
  );
}
