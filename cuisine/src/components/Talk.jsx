import React from 'react';

const TalkPage = () => {
  // Function to handle image loading errors and replace with a placeholder
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop if placeholder also fails
    // Using a generic placeholder if the actual image fails to load
    e.target.src = 'https://placehold.co/600x400/CCCCCC/333333?text=Image+Unavailable';
    e.target.alt = 'Image unavailable';
  };

  return (
    // Main container for the About Us page, with responsive padding and background gradient
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">

      {/* Top Heading Section */}
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        {/* 'About Us' in orange, 'Voices of Flavor' below it */}
        <span className="block text-orange-600">About Us</span>
        Voices of Flavor
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-16 text-center max-w-3xl">
        {/* Subtitle for the About Us page */}
        Discover our journey, our passion for food, and what our valued customers have to say.
      </p>

      {/* Image and Testimonial Section - This section uses flexbox for responsive layout */}
      {/* On small screens, it stacks vertically (flex-col), on medium screens it aligns horizontally (md:flex-row) */}
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center p-8 md:p-12 mb-16 gap-10">

        {/* Image Container */}
        <div className="relative w-full md:w-1/2 h-80 md:h-96 rounded-3xl overflow-hidden shadow-lg border-4 border-orange-100 flex-shrink-0 md:mb-0 md:mr-12">
          {/* Using standard <img> tag for broader compatibility. Ensure 'image_b5d799.jpg' is in your public folder. */}
          <img
            src="/sit.avif" // Path to the uploaded image in the 'public' folder
            alt="Person working on a laptop at an outdoor cafe with a cup of coffee and food."
            className="w-full h-full object-cover rounded-3xl" // Equivalent to layout="fill" and objectFit="cover" for standard img
            onError={handleImageError} // Add error handling for image loading
          />
        </div>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
          <blockquote className="text-3xl md:text-4xl italic font-serif text-gray-800 mb-8 leading-snug">
            {/* The testimonial text */}
            &ldquo;Zeal Taste is a revelation in street food! The gourmet dishes are not only delicious but also beautifully presented. The food truck experience is both convenient and indulgent. I can't get enough of their truffle mac & cheese!&rdquo;
          </blockquote>
          <p className="text-xl font-bold text-gray-900">Sophia Martinez</p> {/* Testimonial author */}
          <p className="text-lg text-gray-600">San Francisco, CA</p> {/* Author's location */}
        </div>
      </div>


    </div>
  );
};

export default TalkPage;
