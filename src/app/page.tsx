import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import { Boxes } from "@/components/ui/background-boxes";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Boxes/> */}
    <HeroSection/>
    <FeaturedCourses></FeaturedCourses>
    <MusicSchoolTestimonials/>
    </>
  //   <div className="h-[100vh] flex justify-center">
  //  <div className="flex items-center text-2xl">Start</div>
   
  //  </div>
  );
}
