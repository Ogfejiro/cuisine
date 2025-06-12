import React from 'react'; // This line is still needed for React components
import Button from './Button'; // Assuming Button component is in './Button.jsx' or './Button.tsx'
import Image from 'next/image';

const Section = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center py-16 px-8 bg-gray-50 text-center lg:text-left min-h-screen-1/2'>
      {/* Content Section */}
      <div className='flex flex-col items-center lg:items-start max-w-xl lg:mr-12 mb-10 lg:mb-0' data-aos="fade-left">
        <p className='text-lg font-semibold text-orange-600 mb-2'>Savory Wheels</p>
        <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6'>
          Zeal Taste: Culinary Delights on Wheels
        </h1>
        <p className='text-xl text-gray-700 leading-relaxed mb-8'>
          Bringing Gourmet Street Food to Your Neighborhood – Fresh, Flavorful, and Fast!
        </p>
        <Button />
      </div>

      {/* Image Section */}
      <div className='w-full max-w-md lg:max-w-xl' data-aos="fade-right">
        <Image
          src="/header.avif"
          alt='Delicious food truck meal'
          width={700} // Increased width for better quality and responsiveness
          height={450} // Adjusted height to maintain aspect ratio
          className='rounded-xl shadow-2xl object-cover w-full h-auto' // Added more styling
          priority // Prioritize loading for hero image
        />
      </div>
    </div>
  );
};

export default Section;