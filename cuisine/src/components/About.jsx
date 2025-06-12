import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='p-8'> {/* Add some padding around the entire section */}
      <div className='flex flex-col md:flex-row justify-around items-center gap-8'>

        {/* Card 1 */}
        <div className='flex flex-col items-center text-center p-4 rounded-lg w-full md:w-1/3'> {/* Removed bg-white and shadow-md */}
          {/* Rounded Orange Background for Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 mb-4"> {/* Added bg-orange-600 and mb-4 for spacing */}
            <Image
              src="/location.svg"
              alt='location'
              width={40}
              height={40}
              // If your SVG is colored, you might need to make it white or apply filter: invert(1) for visibility on orange
              // For a black SVG on orange, it should be visible without filters.
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">Find Us</h4>
          <p className="text-gray-700 text-sm mt-1">1234 Innovation Drive Suite 567 Cityville, State 89012 Country</p>
        </div>

        {/* Card 2 */}
        <div className='flex flex-col items-center text-center p-4 rounded-lg w-full md:w-1/3'> {/* Removed bg-white and shadow-md */}
          {/* Rounded Orange Background for Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 mb-4">
            <Image
              src="/location.svg"
              alt='location'
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">Call Us</h4>
          <p className="text-gray-700 text-sm mt-1">+1 (555) 123-4567</p>
        </div>

        {/* Card 3 */}
        <div className='flex flex-col items-center text-center p-4 rounded-lg w-full md:w-1/3'> {/* Removed bg-white and shadow-md */}
          {/* Rounded Orange Background for Icon */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-600 mb-4">
            <Image
              src="/location.svg"
              alt='location'
              width={40}
              height={40}
            />
          </div>
          <h4 className="text-xl font-semibold text-gray-900">Email Us</h4>
          <p className="text-gray-700 text-sm mt-1">info@zealtaste.com</p>
        </div>

      </div>
    </div>
  );
};

export default About;