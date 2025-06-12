"use client"; // This directive is crucial for client-side components in Next.js 13+

import React, { useEffect } from 'react'; // Import React and useEffect from 'react'
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS

// Import your components
import Header from '@/components/Header';
import Section from '@/components/Section';
import About from '@/components/About';
import Story from '@/components/Story';
import DelicaciesPage from '@/components/DelicaciesPage'; // Keep if you intend to use it
import FoodOrderingApp from '@/components/FoodOrderingApp';
import TalkPage from '@/components/Talk';
import Footer from '@/components/Footer';

// Define your main page component
export default function Home() {
  // useEffect for AOS initialization runs only once after the component mounts
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with a duration
  }, []); // Empty dependency array ensures it runs only on mount

  return (
    <div className="overflow-hidden">
      <Header />
      <Section />
      <About />
      <Story />
      {/* If you uncomment DelicaciesPage, make sure its imageUrls are correct as discussed previously */}
      {/* <DelicaciesPage/> */}
      <FoodOrderingApp />
      <TalkPage />
      <Footer />
    </div>
  );
}