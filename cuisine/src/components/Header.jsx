import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4' data-aos="zoom-in">
      {/* Logo */}
      <div>
        {/*
          The default width/height (80x80) applies to smaller screens.
          On large screens (lg:), the width/height will be 120x120.
        */}
        <Image
          src="/logo.svg"
          width={80} // Default width for small screens
          height={80} // Default height for small screens
          alt='logo'
          className="lg:w-[120px] lg:h-[120px]" // Tailwind classes for large screens
        />
      </div>

      {/* Mail Icon and PreshCuisine.com Link */}
      <div className='flex items-center space-x-2'>
        <Image src="/mail.svg" width={40} height={40} alt='mail' />
        <a href='https://PreshCuisne.com' className='hidden md:block text-lg text-gray-800 hover:text-orange-600 transition-colors duration-200'>
          PreshCuisine.com
        </a>
      </div>
    </div>
  );
};

export default Header;