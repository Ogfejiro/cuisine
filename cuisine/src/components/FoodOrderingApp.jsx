import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// --- Icons (Simulated from lucide-react for self-containment) ---
// In a real project, you'd install 'lucide-react' and import like:
// import { MapPin, Bike, Home, CreditCard, User, Phone, CheckCircle, XCircle, ShoppingBag, Package } from 'lucide-react';

const MapPin = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const Bike = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 11v4h4"/><path d="M12 2l4 3v6l-4 3l-4-3v-6l4-3z"/><path d="M7 15l-4 4h4l4-4z"/><path d="M12 15l-4 4h8l-4-4z"/><path d="M17 15l-4 4h4l4-4z"/><path d="M20 15l4 4h-4l-4-4z"/>
  </svg>
);
const Home = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const CreditCard = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>
  </svg> );
const User = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);
const Phone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2.01l-1.74-.29a2 2 0 0 0-1.65.65L10 21.6l-3.34-3.34a2 2 0 0 0-.65-1.65l-.29-1.74A2 2 0 0 1 4.11 2H7a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V9a2 2 0 0 1 2-2h2.92a2 2 0 0 1 2 2Z"/>
  </svg>
);
const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const XCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
  </svg>
);
const ShoppingBag = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 2L3 7v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-3-5Z"/><path d="M3 7h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const Package = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m7.5 4.27v.71c.64.08 1.25.26 1.8.52a2 2 0 0 1 1.02.97L12 8l-3.39-4.71a2 2 0 0 0-1.02-.97A8 8 0 0 0 7.5 4.27Z"/><path d="m20.5 8.35-7.79-5.18a2 2 0 0 0-2.02 0L3.5 8.35a2 2 0 0 0-1 1.73v5.24c0 1.14.7 2.22 1.7 2.76l7.58 4.29a2 2 0 0 0 2 0l7.58-4.29c1-.54 1.7-1.62 1.7-2.76v-5.24a2 2 0 0 0-1-1.73Z"/><path d="m12 22 7.5-4.33"/><path d="m12 12 7.5-4.33"/><path d="m12 12-7.5 4.33"/><path d="m12 12v10"/>
  </svg>
);


// --- Mock Data (NIGERIAN FOCUS) ---
// In a real app, this would come from an API or a larger data store.

const delicacies = [
  {
    id: '1',
    name: 'Jollof Rice with Chicken',
    description: 'Our signature smoky Jollof Rice, cooked to perfection with tender, well-seasoned fried chicken. A true Nigerian classic.',
    price: 3500.00, // Price in Naira
    imageUrl: 'data:image/jpeg;base64,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',
    category: 'Rice Dishes',
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Efo Riro (Spinach Stew) with Pounded Yam',
    description: 'A rich and savory Yoruba vegetable stew, packed with assorted meats and leafy greens, served with fluffy pounded yam.',
    price: 4500.00,
    imageUrl: '/efo.jpg',
    category: 'Soups & Swallows',
  },
  {
    id: '3',
    name: 'Suya Skewers (Beef/Chicken)',
    description: 'Spicy grilled skewers, marinated in authentic yaji spice blend. Choose between tender beef or succulent chicken.',
    price: 2000.00,
    imageUrl: '/suya.jpg',
    category: 'Grills & Sides',
  },
  {
    id: '4',
    name: 'Egusi Soup with Fufu',
    description: 'Traditional Nigerian soup made with melon seeds, palm oil, and leafy vegetables, served with soft fufu (cassava swallow).',
    price: 4000.00,
    imageUrl: '/egusi.jpg',
    category: 'Soups & Swallows',
  },
  {
    id: '5',
    name: 'Akara (Bean Cakes) & Pap (Ogi/Kunu)',
    description: 'Crispy, savory fried bean cakes, perfect with a warm, comforting bowl of fermented corn pudding (Pap) or millet drink (Kunu).',
    price: 1500.00,
    imageUrl: '/akaraonly.jpg',
    category: 'Breakfast/Snacks',
  },
  {
    id: '6',
    name: 'Pepper Soup (Catfish/Goat Meat)',
    description: 'A hearty and aromatic spicy broth, infused with local herbs and spices. Available with fresh catfish or tender goat meat.',
    price: 3000.00,
    imageUrl: '/peppersoup.jpg',
    category: 'Soups & Swallows',
  },
];

// Mock Varieties for each Delicacy (NIGERIAN FOCUS)
const foodVarieties = {
  '1': [ // Jollof Rice with Chicken varieties
    { id: '1a', name: 'Coconut Jollof Rice', description: 'Coconut jollof rice', price: 0, imageUrl: '/coconut.jpg' },
    { id: '1b', name: 'Vegetable Jollof Rice', description: 'Additional chicken thigh', price: 1000.00, imageUrl: '/vegetables.jpg' },
    { id: '1c', name: 'Chicken Royalty', description: 'With beef, shaki, pomo', price: 1500.00, imageUrl: '/chicken royalty.jpg' },
    { id: '1d', name: 'Smokey Jollof', description: 'Topped with smoked turkey', price: 1200.00, imageUrl: '/smokey.jpg' },
    { id: '1e', name:'Vegan Jollof', description: 'Served with fried plantain', price: 500.00, imageUrl: '/vegan.jpg' },
    { id: '1f', name: 'Jollof and Plantain', description: 'jollof and platain', price: 300.00, imageUrl: '/plantain.jpg' },
  ],
  '2': [ // Efo Riro with Pounded Yam varieties
    { id: '2a', name: 'Pounded Yam', description: 'Served with authentic pounded yam', price: 0, imageUrl: '/pounded.jpg' },
    { id: '2b', name: 'Eba (Garri)', description: 'Substitute with Eba', price: -200.00, imageUrl: '/garri.jpg' },
    { id: '2c', name: 'Amala', description: 'Substitute with Amala', price: 0, imageUrl: '/amala.jpg' },
    { id: '2d', name: 'Semovita', description: 'Substitute with Semovita', price: -100.00, imageUrl: '/semo.jpg' },
    { id: '2e', name: 'Mixed Meat (Assorted)', description: 'More assorted meat cuts', price: 800.00, imageUrl: '/meat.jpg' },
    { id: '2f', name: 'Pomo', description: 'Efo Riro with pomo', price: -150.00, imageUrl: '/kpomo.jpg' },
  ],
  '3': [ // Suya Skewers varieties
    { id: '3a', name: 'Beef Suya (4 skewers)', description: 'Four skewers of tender beef suya', price: 0, imageUrl: '/beef.jpg' },
    { id: '3b', name: 'Chicken Suya (4 skewers)', description: 'Four skewers of juicy chicken suya', price: 0, imageUrl: '/chickensuya.jpg' },
    { id: '3c', name: 'Mixed Suya (2 Beef, 2 Chicken)', description: 'A mix of beef and chicken suya', price: 100.00, imageUrl: '/chikenbeef.jpg' },
    { id: '3d', name: 'Extra Yaji Spice', description: 'More of our signature yaji spice', price: 200.00, imageUrl: '/yaji.jpg' },
    { id: '3e', name: 'Onion & Tomato Slices', description: 'Extra fresh onion and tomato slices', price: 100.00, imageUrl: '/tomatosuya.jpg' },
    { id: '3f', name: 'Larger Portion (+2 skewers)', description: 'Two additional skewers', price: 1000.00, imageUrl: '/large.jpg' },
  ],
  '4': [ // Egusi Soup with Fufu varieties
    { id: '4a', name: 'Fufu (Cassava)', description: 'Served with classic Fufu', price: 0, imageUrl: '/egfufu.jpg' },
    { id: '4b', name: 'Pounded Yam', description: 'Substitute with Pounded Yam', price: 500.00, imageUrl: '/egpounded.jpg' },
    { id: '4c', name: 'Eba (Garri)', description: 'Substitute with Eba (Garri)', price: -300.00, imageUrl: '/egpounded.jpg' },
    { id: '4d', name: 'Assorted Meat', description: 'With beef, shaki, pomo, goat meat', price: 1000.00, imageUrl: '/asorted.jpg' },
    { id: '4e', name: 'Fish Only', description: 'With smoked fish instead of meat', price: 200.00, imageUrl: '/egfish.jpg' },
    { id: '4f', name: 'Extra Vegetables', description: 'More leafy greens in soup', price: 300.00, imageUrl: '/egveg.jpg' },
  ],
  '5': [ // Akara & Pap varieties
    { id: '5a', name: 'Akara & Pap (Corn)', description: 'Standard Akara with Corn Pap', price: 0, imageUrl: '/papcorn.jpg' },
    { id: '5b', name: 'Akara & Kunu (Millet)', description: 'Akara with a refreshing Millet Kunu drink', price: 100.00, imageUrl: '/kunuakara.jpg' },
    { id: '5c', name: 'Extra Akara (3 Pcs)', description: 'Add three more Akara pieces', price: 400.00, imageUrl: '/onlyakara.jpg' },
    { id: '5d', name: 'Sweetened Pap', description: 'Pap pre-sweetened with sugar', price: 50.00, imageUrl: '/onlyakara.jpg' },
    { id: '5e', name: 'Milk for Pap', description: 'Side sachet of powdered milk for pap', price: 150.00, imageUrl: '/sweetpap.jpg' },
    { id: '5f', name: 'Plain Akara (No Pap)', description: 'Akara only, no pap/kunu', price: -500.00, imageUrl: '/onlyankara.jpg' },
  ],
  '6': [ // Pepper Soup varieties
    { id: '6a', name: 'Catfish Pepper Soup', description: 'Classic catfish pepper soup', price: 0, imageUrl: '/catsoup.jpg' },
    { id: '6b', name: 'Goat Meat Pepper Soup', description: 'Tender goat meat pepper soup', price: 500.00, imageUrl: '/goatsoup.jpg' },
    { id: '6c', name: 'Assorted Meat Pepper Soup', description: 'Mix of meats in pepper soup', price: 700.00, imageUrl: '/assortedsoup.jpg' },
    { id: '6d', name: 'Extra Hot (Ata Rodo)', description: 'Made extra spicy with Ata Rodo', price: 100.00, imageUrl: '/extrahot.jpg' },
    { id: '6e', name: 'Side of White Rice', description: 'Small side of white rice', price: 400.00, imageUrl: '/ricesoup.jpg' },
    { id: '6f', name: 'Yam Cubes', description: 'With soft boiled yam cubes', price: 300.00, imageUrl: '/yamsoup.jpg' },
  ],
};


// Mock Riders Data (can remain generic or be localized)
const riders = [
  { id: 'r1', name: 'Bolt Food Rider', rating: 4.8, eta: '15-20 min', imageUrl: '/bolt.jpg' },
  { id: 'r2', name: 'Glovo Express', rating: 4.5, eta: '20-25 min', imageUrl: '/glovo.jpg' },
  { id: 'r3', name: 'Jumia Food Dispatch', rating: 4.9, eta: '10-15 min', imageUrl: '/jumia.jpg' },
  { id: 'r4', name: 'Quick-Eats Deliveries', rating: 4.6, eta: '25-30 min', imageUrl: '/quickeat.jpg' },
  { id: 'r5', name: 'Speedy Chops', rating: 4.7, eta: '18-22 min', imageUrl: '/speedy.jpg' },
  { id: 'r6', name: 'Punctual Parcels NG', rating: 4.4, eta: '30-35 min', imageUrl: '/punctual.jpg' },
];

// --- DelicacyCard Component (from previous iteration, slightly enhanced) ---
const DelicacyCard = ({ delicacy, onSelectDelicacy }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 m-2 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
      onClick={() => onSelectDelicacy(delicacy.id)}
    >
      {/* Delicacy Image */}
      <div className="relative w-full h-56 mb-5 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition-colors duration-300">
        <Image
          src={delicacy.imageUrl}
          alt={delicacy.name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Delicacy Name */}
      <h3 className="text-3xl font-bold text-gray-900 mb-3 text-center tracking-tight">
        {delicacy.name}
      </h3>

      {/* Delicacy Description */}
      <p className="text-gray-700 text-base text-center mb-6 flex-grow leading-relaxed">
        {delicacy.description}
      </p>

      {/* Price Button (now just for display, click takes to variety page) */}
      <button className="bg-orange-600 text-white font-extrabold py-3 px-8 rounded-full shadow-lg text-lg">
        ₦{delicacy.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </button>
    </div>
  );
};

// --- DelicaciesPage Component ---
const DelicaciesPage = ({ onSelectDelicacy }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(delicacies.map(d => d.category))];

  const featuredDelicacy = delicacies.find(d => d.isFeatured);
  const otherDelicacies = delicacies.filter(d => !d.isFeatured);

  const filteredDelicacies = selectedCategory === 'All'
    ? otherDelicacies
    : otherDelicacies.filter(d => d.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        <span className="block text-orange-600">Our</span> Nigerian Delicacies
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-16 text-center max-w-3xl">
        Explore our authentic Nigerian culinary masterpieces, crafted to delight your senses.
      </p>

      {/* Featured Delicacy Section (Hero) */}
      {featuredDelicacy && (
        <div
          className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center p-8 md:p-12 mb-20 w-full max-w-7xl transform transition-all duration-500 hover:scale-[1.01] cursor-pointer"
          onClick={() => onSelectDelicacy(featuredDelicacy.id)}
        >
          <div className="relative w-full lg:w-1/2 h-80 md:h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl mb-8 lg:mb-0 lg:mr-12">
            <Image
              src={featuredDelicacy.imageUrl}
              alt={featuredDelicacy.name}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl transition-transform duration-500 hover:scale-105"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            <span className="absolute bottom-4 left-4 bg-orange-600 text-white text-sm md:text-base font-bold py-2 px-4 rounded-full shadow-lg">
                Delicacy of the Day!
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {featuredDelicacy.name}
            </h2>
            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed">
              {featuredDelicacy.description}
            </p>
            <button className="bg-orange-600 text-white font-extrabold py-4 px-10 rounded-full shadow-xl text-xl">
              Just ₦{featuredDelicacy.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </button>
          </div>
        </div>
      )}

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-3 px-6 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out
              ${selectedCategory === category
                ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Delicacies Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {filteredDelicacies.map((delicacy) => (
          <DelicacyCard key={delicacy.id} delicacy={delicacy} onSelectDelicacy={onSelectDelicacy} />
        ))}
      </div>
    </div>
  );
};

// --- VarietyPage Component ---
const VarietyPage = ({ selectedDelicacyId, onSelectVariety, onBack }) => {
  const delicacy = delicacies.find(d => d.id === selectedDelicacyId);
  const varieties = foodVarieties[selectedDelicacyId] || [];

  if (!delicacy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Delicacy Not Found!</h2>
        <button
          onClick={onBack}
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Go Back to Delicacies
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">
      <button
        onClick={onBack}
        className="self-start mb-8 text-orange-600 hover:text-orange-800 flex items-center transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-semibold">Back to Delicacies</span>
      </button>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        <span className="block text-orange-600">{delicacy.name}</span> Varieties
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center max-w-3xl">
        Choose your perfect combination to customize your Nigerian culinary experience.
      </p>

      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {varieties.length > 0 ? (
          varieties.map((variety) => (
            <div
              key={variety.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group cursor-pointer"
              onClick={() => onSelectVariety(delicacy.id, variety.id)}
            >
              <div className="relative w-full h-48 mb-5 rounded-lg overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition-colors duration-300">
                <Image
                  src={variety.imageUrl}
                  alt={variety.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center tracking-tight">
                {variety.name}
              </h3>
              <p className="text-gray-700 text-base text-center mb-4 flex-grow leading-relaxed">
                {variety.description}
              </p>
              <span className="text-xl font-extrabold text-orange-600">
                {variety.price === 0 ? 'Included' : `+ ₦${variety.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
              </span>
              <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full shadow-md transition-colors duration-300 text-lg uppercase">
                Select
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl">No varieties available for this delicacy yet.</p>
        )}
      </div>
    </div>
  );
};

// --- OrderPage Component ---
const OrderPage = ({ selectedDelicacyId, selectedVarietyId, onPlaceOrder, onBackToVariety, onSelectRider }) => {
  const delicacy = delicacies.find(d => d.id === selectedDelicacyId);
  const variety = foodVarieties[selectedDelicacyId]?.find(v => v.id === selectedVarietyId);

  const [deliveryOption, setDeliveryOption] = useState('rider'); // 'rider' or 'pickup'
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Clear errors when delivery option changes
    setErrors({});
  }, [deliveryOption]);

  if (!delicacy || !variety) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Order Details Missing!</h2>
        <button
          onClick={onBackToVariety}
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Back to Variety Selection
        </button>
      </div>
    );
  }

  const basePrice = delicacy.price;
  const varietyPrice = variety.price;
  const totalPrice = basePrice + varietyPrice;

  const validateForm = () => {
    let newErrors = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required.';
    // Basic phone number validation for Nigerian numbers (starts with 0, 11 digits)
    if (!phoneNumber.trim() || !/^0\d{10}$/.test(phoneNumber.trim())) newErrors.phoneNumber = 'Valid Nigerian Phone Number (e.g., 08012345678) is required.';
    if (deliveryOption === 'rider') {
      if (!location.trim()) newErrors.location = 'Location (City/Area) is required.';
      if (!address.trim()) newErrors.address = 'Full Delivery Address is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Custom alert for form errors
      const errorMessages = Object.values(errors).map(msg => `• ${msg}`).join('\n');
      showCustomMessage('Please correct the following errors:\n' + errorMessages, 'error');
      return;
    }

    const orderDetails = {
      delicacy: delicacy.name,
      variety: variety.name,
      basePrice: basePrice,
      varietyPrice: varietyPrice,
      totalPrice: totalPrice,
      deliveryOption: deliveryOption,
      fullName: fullName,
      phoneNumber: phoneNumber,
      location: deliveryOption === 'rider' ? location : 'N/A',
      address: deliveryOption === 'rider' ? address : 'N/A',
    };

    if (deliveryOption === 'rider') {
      onSelectRider(orderDetails); // Navigate to rider selection page
    } else {
      // Simulate direct order placement for pickup
      onPlaceOrder(orderDetails);
    }
  };

  const showCustomMessage = (message, type = 'info') => {
    const modal = document.createElement('div');
    modal.className = `fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50`;
    modal.innerHTML = `
      <div class="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-sm w-full text-center relative">
        <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-700" id="closeCustomMessage">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex flex-col items-center justify-center mb-4">
          ${type === 'success' ? `<div class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
          ${type === 'error' ? `<div class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
          ${type === 'info' ? `<div class="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
        </div>
        <p class="text-gray-800 text-lg font-semibold mb-4 whitespace-pre-line">${message}</p>
        <button id="okCustomMessage" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">OK</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButton = document.getElementById('closeCustomMessage');
    const okButton = document.getElementById('okCustomMessage');

    const removeModal = () => {
      document.body.removeChild(modal);
    };

    closeButton.addEventListener('click', removeModal);
    okButton.addEventListener('click', removeModal);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">
      <button
        onClick={onBackToVariety}
        className="self-start mb-8 text-orange-600 hover:text-orange-800 flex items-center transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-semibold">Back to {delicacy.name} Varieties</span>
      </button>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        <span className="block text-orange-600">Order</span> Confirmation
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center max-w-3xl">
        Confirm your selection and provide delivery details.
      </p>

      {/* Order Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 w-full max-w-2xl border-l-4 border-orange-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><ShoppingBag className="mr-3 text-orange-600"/> Your Order</h2>
        <div className="text-lg text-gray-700 space-y-2">
          <p><span className="font-semibold">Delicacy:</span> {delicacy.name}</p>
          <p><span className="font-semibold">Variety:</span> {variety.name}</p>
          <p><span className="font-semibold">Base Price:</span> ₦{basePrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
          <p><span className="font-semibold">Variety Add-on:</span> {varietyPrice === 0 ? 'Included' : `₦${varietyPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</p>
          <p className="text-2xl font-extrabold text-orange-700 pt-4 border-t border-gray-200">
            Total: ₦{totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmitOrder} className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center"><Package className="mr-3 text-orange-600"/> Delivery Details</h2>

        {/* Full Name & Phone Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">
              <User className="inline-block h-4 w-4 mr-1 text-orange-500"/> Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-semibold mb-2">
              <Phone className="inline-block h-4 w-4 mr-1 text-orange-500"/> Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g., 08012345678"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
          </div>
        </div>

        {/* Delivery Option */}
        <div className="mb-6">
          <h3 className="block text-gray-700 text-sm font-semibold mb-3">
            How would you like your order?
          </h3>
          <div className="flex space-x-4">
            <label className="flex items-center cursor-pointer p-3 rounded-lg border border-gray-300 transition-colors duration-200 hover:bg-orange-50">
              <input
                type="radio"
                name="deliveryOption"
                value="rider"
                checked={deliveryOption === 'rider'}
                onChange={() => setDeliveryOption('rider')}
                className="form-radio text-orange-600 h-5 w-5"
              />
              <span className="ml-2 text-gray-800 font-medium">
                <Bike className="inline-block h-5 w-5 mr-1 text-orange-600"/> Deliver with a Rider
              </span>
            </label>
            <label className="flex items-center cursor-pointer p-3 rounded-lg border border-gray-300 transition-colors duration-200 hover:bg-orange-50">
              <input
                type="radio"
                name="deliveryOption"
                value="pickup"
                checked={deliveryOption === 'pickup'}
                onChange={() => setDeliveryOption('pickup')}
                className="form-radio text-orange-600 h-5 w-5"
              />
              <span className="ml-2 text-gray-800 font-medium">
                <Home className="inline-block h-5 w-5 mr-1 text-orange-600"/> Pickup at Restaurant
              </span>
            </label>
          </div>
        </div>

        {/* Location & Address (Conditional for Rider Delivery) */}
        {deliveryOption === 'rider' && (
          <div className="space-y-6 mb-8">
            <div>
              <label htmlFor="location" className="block text-gray-700 text-sm font-semibold mb-2">
                <MapPin className="inline-block h-4 w-4 mr-1 text-orange-500"/> Location / City
              </label>
              <input
                type="text"
                id="location"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Lagos, Abuja, Onitsha"
              />
              {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">
                <Home className="inline-block h-4 w-4 mr-1 text-orange-500"/> Full Delivery Address
              </label>
              <textarea
                id="address"
                rows="3"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 transition-colors duration-200 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street name, building number, nearest landmark, e.g., No. 15 Ademola Str, by Zenith Bank"
              ></textarea>
              {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 rounded-full shadow-lg text-xl uppercase tracking-wider transform transition-all duration-300 hover:scale-105"
        >
          {deliveryOption === 'rider' ? 'Proceed to Rider Selection' : 'Place Pickup Order'}
        </button>
      </form>
    </div>
  );
};

// --- RiderSelectionPage Component ---
const RiderSelectionPage = ({ orderDetails, onRiderSelected, onBackToOrder }) => {
  const [selectedRiderId, setSelectedRiderId] = useState(null);

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Order Details Missing!</h2>
        <button
          onClick={onBackToOrder}
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Back to Order Details
        </button>
      </div>
    );
  }

  const handleConfirmRider = () => {
    if (selectedRiderId) {
      const selectedRider = riders.find(r => r.id === selectedRiderId);
      onRiderSelected({ ...orderDetails, rider: selectedRider });
    } else {
      showCustomMessage('Please select a rider to proceed.', 'error');
    }
  };

  const showCustomMessage = (message, type = 'info') => {
    const modal = document.createElement('div');
    modal.className = `fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50`;
    modal.innerHTML = `
      <div class="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-sm w-full text-center relative">
        <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-700" id="closeCustomMessage">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div class="flex flex-col items-center justify-center mb-4">
          ${type === 'success' ? `<div class="text-green-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
          ${type === 'error' ? `<div class="text-red-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
          ${type === 'info' ? `<div class="text-blue-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>` : ''}
        </div>
        <p class="text-gray-800 text-lg font-semibold mb-4">${message}</p>
        <button id="okCustomMessage" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">OK</button>
      </div>
    `;
    document.body.appendChild(modal);

    const closeButton = document.getElementById('closeCustomMessage');
    const okButton = document.getElementById('okCustomMessage');

    const removeModal = () => {
      document.body.removeChild(modal);
    };

    closeButton.addEventListener('click', removeModal);
    okButton.addEventListener('click', removeModal);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">
      <button
        onClick={onBackToOrder}
        className="self-start mb-8 text-orange-600 hover:text-orange-800 flex items-center transition-colors duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-lg font-semibold">Back to Order Details</span>
      </button>

      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        <span className="block text-orange-600">Select Your</span> Rider
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center max-w-3xl">
        Choose a rider to deliver your delicious Nigerian meal to {orderDetails.location}.
      </p>

      {/* Rider Selection Grid */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {riders.map(rider => (
          <div
            key={rider.id}
            className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 cursor-pointer
              ${selectedRiderId === rider.id ? 'border-4 border-orange-600 ring-4 ring-orange-200' : 'border border-gray-200 hover:shadow-xl hover:-translate-y-1'}`}
            onClick={() => setSelectedRiderId(rider.id)}
          >
            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-gray-100">
              <Image
                src={rider.imageUrl}
                alt={rider.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
                sizes="100px"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{rider.name}</h3>
            <div className="flex items-center text-gray-700 mb-2">
              <span className="text-orange-500 text-xl mr-1">⭐</span>
              <span className="font-semibold text-lg">{rider.rating}</span>
            </div>
            <p className="text-gray-600 text-lg font-medium">{rider.eta}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleConfirmRider}
        className="w-full max-w-md bg-orange-600 hover:bg-orange-700 text-white font-extrabold py-4 rounded-full shadow-lg text-xl uppercase tracking-wider transform transition-all duration-300 hover:scale-105"
      >
        Confirm Rider & Proceed to Payment
      </button>
    </div>
  );
};

// --- PaymentPage (Simulation) Component ---
const PaymentPage = ({ finalOrderDetails, onBackToDelicacies }) => {
  const [paymentStatus, setPaymentStatus] = useState('pending'); // 'pending', 'success', 'failed'
  const [paystackInitialized, setPaystackInitialized] = useState(false);

  useEffect(() => {
    // Load Paystack script dynamically
    const script = document.createElement('script');
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setPaystackInitialized(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up on unmount
    };
  }, []);

  if (!finalOrderDetails) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
        <h2 className="text-4xl font-bold text-red-600 mb-4">Order Details Missing!</h2>
        <button
          onClick={onBackToDelicacies} // Or back to rider selection
          className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handlePayWithPaystack = () => {
    if (!paystackInitialized || typeof window.PaystackPop === 'undefined') {
      alert('Paystack script not loaded yet. Please try again in a moment.');
      return;
    }

    // Replace with your actual Paystack public key
    const PUBLIC_KEY = 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // <<< IMPORTANT: Replace this with a TEST or LIVE key!

    if (PUBLIC_KEY === 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') {
        alert('Please replace pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx with your actual Paystack public key (test or live) to enable payment simulation.');
        return;
    }

    const handler = window.PaystackPop.setup({
      key: PUBLIC_KEY,
      email: finalOrderDetails.fullName.replace(/\s+/g, '') + '@example.com', // Use a valid email, typically from user login
      amount: finalOrderDetails.totalPrice * 100, // Amount in kobo (Naira cents)
      currency: "NGN", // Nigerian Naira
      ref: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, // unique transaction reference
      metadata: {
        custom_fields: [
          {
            display_name: "Delicacy",
            variable_name: "delicacy",
            value: finalOrderDetails.delicacy
          },
          {
            display_name: "Variety",
            variable_name: "variety",
            value: finalOrderDetails.variety
          },
          {
            display_name: "Delivery Option",
            variable_name: "delivery_option",
            value: finalOrderDetails.deliveryOption
          },
          ...(finalOrderDetails.rider ? [{ display_name: "Rider", variable_name: "rider", value: finalOrderDetails.rider.name }] : [])
        ]
      },
      callback: (response) => {
        // This is where you would typically verify the transaction on your backend
        // For simulation, we'll just set success/failure based on a mock check
        if (response.status === 'success') {
          setPaymentStatus('success');
          // In a real app, send response.reference to your backend for verification
        } else {
          setPaymentStatus('failed');
        }
      },
      onClose: () => {
        // User closed the payment modal
        if (paymentStatus === 'pending') { // Only if not already success/failed
            setPaymentStatus('failed'); // Treat as failed if closed before completion
            alert('Payment window closed. Payment cancelled.');
        }
      },
    });

    handler.openIframe(); // Open the payment modal
  };

  const isPickup = finalOrderDetails.deliveryOption === 'pickup';

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white font-sans flex flex-col items-center py-16 px-4 md:px-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 text-center leading-tight">
        <span className="block text-orange-600">Complete Your</span> Order
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center max-w-3xl">
        Review your final order and proceed to payment.
      </p>

      {/* Final Order Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 w-full max-w-2xl border-l-4 border-orange-500">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center"><ShoppingBag className="mr-3 text-orange-600"/> Your Final Order</h2>
        <div className="text-lg text-gray-700 space-y-2">
          <p><span className="font-semibold">Delicacy:</span> {finalOrderDetails.delicacy}</p>
          <p><span className="font-semibold">Variety:</span> {finalOrderDetails.variety}</p>
          <p><span className="font-semibold">Delivery Type:</span> {finalOrderDetails.deliveryOption === 'rider' ? 'Rider Delivery' : 'Restaurant Pickup'}</p>
          {finalOrderDetails.deliveryOption === 'rider' && finalOrderDetails.rider && (
            <p><span className="font-semibold">Selected Rider:</span> {finalOrderDetails.rider.name} ({finalOrderDetails.rider.eta})</p>
          )}
          <p><span className="font-semibold">Customer:</span> {finalOrderDetails.fullName}</p>
          <p><span className="font-semibold">Phone:</span> {finalOrderDetails.phoneNumber}</p>
          {finalOrderDetails.deliveryOption === 'rider' && (
            <>
              <p><span className="font-semibold">Location:</span> {finalOrderDetails.location}</p>
              <p><span className="font-semibold">Address:</span> {finalOrderDetails.address}</p>
            </>
          )}
          <p className="text-3xl font-extrabold text-orange-700 pt-4 border-t border-gray-200">
            Total: ₦{finalOrderDetails.totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Payment Status / Action */}
      {paymentStatus === 'pending' && (
        <div className="w-full max-w-md text-center">
          {isPickup ? (
            <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg mb-8" role="alert">
              <p className="font-bold">Pickup Order</p>
              <p>Your order is confirmed for pickup. Please proceed to the restaurant.</p>
            </div>
          ) : (
            <button
              onClick={handlePayWithPaystack}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold py-5 rounded-full shadow-lg text-2xl uppercase tracking-wider transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
            >
              <CreditCard className="mr-3"/> Pay with Paystack
            </button>
          )}
        </div>
      )}

      {paymentStatus === 'success' && (
        <div className="w-full max-w-md text-center bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md mb-8">
          <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-4"/>
          <h2 className="text-3xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-lg">Your order has been placed and confirmed.</p>
          {finalOrderDetails.deliveryOption === 'rider' && finalOrderDetails.rider && (
            <p className="text-md mt-2">Your rider, <span className="font-bold">{finalOrderDetails.rider.name}</span>, is on the way!</p>
          )}
        </div>
      )}

      {paymentStatus === 'failed' && (
        <div className="w-full max-w-md text-center bg-red-100 border-l-4 border-red-500 text-red-700 p-6 rounded-lg shadow-md mb-8">
          <XCircle className="h-20 w-20 text-red-600 mx-auto mb-4"/>
          <h2 className="text-3xl font-bold mb-2">Payment Failed!</h2>
          <p className="text-lg">There was an issue processing your payment. Please try again or contact support.</p>
        </div>
      )}

      <button
        onClick={onBackToDelicacies}
        className="mt-8 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
      >
        Start New Order
      </button>
    </div>
  );
};


// --- Main App Component ---
const FoodOrderingApp = () => {
  const [currentPage, setCurrentPage] = useState('delicacies');
  const [selectedDelicacyId, setSelectedDelicacyId] = useState(null);
  const [selectedVarietyId, setSelectedVarietyId] = useState(null);
  const [orderDetailsForRider, setOrderDetailsForRider] = useState(null); // Full order details before rider selection
  const [finalOrderDetails, setFinalOrderDetails] = useState(null); // Full order details including rider if applicable

  const handleSelectDelicacy = (delicacyId) => {
    setSelectedDelicacyId(delicacyId);
    setSelectedVarietyId(null); // Reset variety when delicacy changes
    setCurrentPage('variety');
  };

  const handleSelectVariety = (delicacyId, varietyId) => {
    setSelectedDelicacyId(delicacyId); // Ensure consistency
    setSelectedVarietyId(varietyId);
    setCurrentPage('order');
  };

  const handlePlaceOrder = (details) => {
    // This is for pickup orders that skip rider selection
    setFinalOrderDetails(details);
    setCurrentPage('payment');
  };

  const handleSelectRider = (details) => {
    // This is for delivery orders that go to rider selection
    setOrderDetailsForRider(details);
    setCurrentPage('rider');
  };

  const handleRiderSelected = (detailsWithRider) => {
    // This is called after a rider is selected
    setFinalOrderDetails(detailsWithRider);
    setCurrentPage('payment');
  };

  const handleBackToDelicacies = () => {
    setCurrentPage('delicacies');
    setSelectedDelicacyId(null);
    setSelectedVarietyId(null);
    setOrderDetailsForRider(null);
    setFinalOrderDetails(null);
  };

  const handleBackToVariety = () => {
    setCurrentPage('variety');
    setSelectedVarietyId(null);
    setOrderDetailsForRider(null);
    setFinalOrderDetails(null);
  };

  const handleBackToOrder = () => {
    setCurrentPage('order');
    setOrderDetailsForRuler(null); // Reset rider details if going back to order form
    setFinalOrderDetails(null);
  };

  switch (currentPage) {
    case 'delicacies':
      return <DelicaciesPage onSelectDelicacy={handleSelectDelicacy} />;
    case 'variety':
      return <VarietyPage selectedDelicacyId={selectedDelicacyId} onSelectVariety={handleSelectVariety} onBack={handleBackToDelicacies} />;
    case 'order':
      return <OrderPage selectedDelicacyId={selectedDelicacyId} selectedVarietyId={selectedVarietyId} onPlaceOrder={handlePlaceOrder} onBackToVariety={handleBackToVariety} onSelectRider={handleSelectRider} />;
    case 'rider':
      return <RiderSelectionPage orderDetails={orderDetailsForRider} onRiderSelected={handleRiderSelected} onBackToOrder={handleBackToOrder} />;
    case 'payment':
      return <PaymentPage finalOrderDetails={finalOrderDetails} onBackToDelicacies={handleBackToDelicacies} />;
    default:
      // Fallback to delicacies page if currentPage is somehow invalid
      return <DelicaciesPage onSelectDelicacy={handleSelectDelicacy} />;
  }
};

export default FoodOrderingApp;