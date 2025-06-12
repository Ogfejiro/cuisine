import React from 'react';

const Story = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-xl font-inter">
      {/* Our Story Text Section - Centered with controlled width */}
      <div className="text-center p-4 mb-8 max-w-4xl mx-auto" data-aos="zoom-up"> {/* Added max-w-4xl and mx-auto */}
        <h4 className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">Our Story</h4>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">The Zeal Taste Adventure</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Journey with us from our inception to today as we revolutionize the way food is enjoyed on the go. Our passion for culinary excellence and commitment to quality have driven us to create a unique dining experience, bringing gourmet flavors right to your doorstep.
        </p>
      </div>

      {/* Images and YouTube Subscribe Buttons Section */}
      {/* The justify-center and items-center on this container will center the entire group of images/buttons */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">

        {/* First Image and YouTube Subscribe Button */}
        <div className="flex flex-col items-center space-y-4" > {/* items-center ensures content within this column is centered */}
          {/* Image */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl" data-aos="fade-up">
            <img
              src="smile.avif"
              alt="Delicious food"
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found"; }}
            />
          </div>

          {/* YouTube Subscribe Button */}
          <a
            href="YOUR_YOUTUBE_SUBSCRIBE_LINK" // IMPORTANT: Replace with your actual YouTube subscribe link!
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-48 h-48 bg-green-500 rounded-full text-white shadow-lg
                       transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 cursor-pointer
                       transform-gpu hover:shadow-xl"
                       data-aos="fade-up"
          >
            <img src='youtube.svg' alt='you'></img>
            <span className="text-2xl font-bold mb-1">14K+</span>
            <span className="text-lg font-medium">Subscribe</span>
            
          </a>
        </div>

        {/* Second Image and YouTube Subscribe Button */}
        <div className="flex flex-col items-center space-y-4">
          {/* Image */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl" data-aos="fade-in">
            <img
              src="hug.avif"
              alt="Another delicious food image"
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found"; }}
            />
          </div>

          
        </div>

        {/* Third Image and YouTube Subscribe Button */}
        <div className="flex flex-col items-center space-y-4">

          {/* YouTube Subscribe Button */}
          <a
            href="YOUR_YOUTUBE_SUBSCRIBE_LINK" // IMPORTANT: Replace with your actual YouTube subscribe link!
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-48 h-48 bg-green-500 rounded-full text-white shadow-lg
                       transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-105 cursor-pointer
                       transform-gpu hover:shadow-xl"
                       data-aos="fade-up"
          >
            <img src='insta.svg' alt='insta'></img>
            <span className="text-2xl font-bold mb-1">14K+</span>
            <span className="text-lg font-medium">Subscribe</span>
          </a>
          {/* Image */}
          <div className="relative w-full max-w-sm rounded-lg overflow-hidden shadow-2xl" data-aos="fade-down">
            <img
              src="eat.avif"
              alt="Yet another delicious food image"
              className="w-full h-auto object-cover rounded-lg"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found"; }}
            />
          </div>

          
        </div>

      </div>
    </div>
  );
};

export default Story;