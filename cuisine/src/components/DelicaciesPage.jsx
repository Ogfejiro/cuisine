// DelicaciesPage.jsx
import Image from 'next/image';
import delicacies from '/delicacies'; // Import your delicacies data

// DelicacyCard Component
// This component renders a single delicacy card.
const DelicacyCard = ({ delicacy }) => {
  return (
    <div className="bg-orange-100 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 m-4 transition-transform transform hover:scale-105 duration-300">
      {/* Delicacy Image */}
      <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
        <Image
          src={delicacy.imageUrl}
          alt={delicacy.name}
          layout="fill" // Makes the image fill the parent div
          objectFit="cover" // Covers the area without distortion
          className="rounded-md"
        />
      </div>

      {/* Delicacy Name */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
        {delicacy.name}
      </h3>

      {/* Delicacy Description */}
      <p className="text-gray-600 text-center mb-4 flex-grow">
        {delicacy.description}
      </p>

      {/* Price Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300">
        ${delicacy.price.toFixed(2)}
      </button>
    </div>
  );
};

// DelicaciesPage Component
// This is the main page component that displays all delicacy cards.
const DelicaciesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col items-center py-10 px-4">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-gray-900 mb-6 text-center">
        <span className="block text-orange-500">Featured</span> Delicacies
      </h1>

      {/* Subtitle/Signature Selection */}
      <p className="text-xl text-gray-700 mb-12 text-center max-w-2xl">
        Explore our Signature Selections – culinary masterpieces crafted to delight your senses.
      </p>

      {/* Delicacies Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {delicacies.map((delicacy) => (
          <DelicacyCard key={delicacy.id} delicacy={delicacy} />
        ))}
      </div>
    </div>
  );
};

export default DelicaciesPage;
