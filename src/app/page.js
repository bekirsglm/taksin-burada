"use client";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Hero from "@/components/Hero/Hero";
import Contact from "@/components/Contact/Contact";
import BestCabs from "@/components/BestCabs/BestCabs";
import About from "@/components/About/About";
import AppStore from "@/components/AppStore/AppStore";
import Testimonial from "@/components/Testimonial/Testimonial";

const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white">
      <Hero />
      <Contact />
      <BestCabs />
      <About />
      <AppStore />
      <Testimonial />
    </div>
  );
};

export default Page;