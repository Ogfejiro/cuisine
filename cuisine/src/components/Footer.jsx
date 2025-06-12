import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-800 text-white py-12 px-4 md:px-8 mt-16 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16 text-center md:text-left">
        {/* Reservation Section */}
        <div className="flex-1 min-w-0 md:min-w-[300px]">
          <h3 className="text-4xl font-extrabold text-orange-200 mb-4 leading-tight">Book Your Table</h3>
          <p className="text-xl font-semibold mb-2">Make a Reservation</p>
          <p className="text-lg mb-4">
            Call <a href="tel:+18005551234" className="text-orange-300 hover:underline font-bold">+1 (800) 555-1234</a> from 5a – 11p daily, or book online.
          </p>
          <p className="text-sm italic text-gray-300">
            Reservations required for parties of 4 or more.
          </p>
        </div>

        {/* Separator for larger screens */}
        <div className="hidden md:block w-px h-32 bg-emerald-700"></div>

        {/* Information Links Section */}
        <div className="flex-1 flex flex-col items-center md:items-end space-y-3">
          <p className="text-base font-semibold">Developed by <span className="text-orange-200 font-bold">ZealousWeb</span></p>
          <p className="text-base font-semibold">Powered by <span className="text-orange-200 font-bold">Webflow</span></p>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Licenses</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors text-base">Instructions</a>
        </div>
      </div>

      {/* Copyright/Brand at the very bottom */}
      <div className="mt-10 pt-6 border-t border-emerald-700 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Zeal Taste. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
