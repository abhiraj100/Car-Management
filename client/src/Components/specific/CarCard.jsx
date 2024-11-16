// components/CarCard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react'; // Assuming you're using lucide-react for icons

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const {
    _id,
    name,
    image,
    price,
    year,
    mileage,
    transmission,
    fuelType,
    location
  } = car;

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
      onClick={() => navigate(`/cars/${_id}`)}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        {/* Like Button */}
        <button 
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
        >
          <Heart 
            className={`w-5 h-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
        {/* Tags */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
            {transmission}
          </span>
          <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
            {fuelType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
            {name}
          </h3>
          <div className="text-right">
            <span className="text-lg font-bold text-blue-600">
              ${price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 block">
              estimated
            </span>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-4 my-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Year:</span>
            <span className="text-gray-900 font-medium">{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">Mileage:</span>
            <span className="text-gray-900 font-medium">
              {mileage.toLocaleString()} km
            </span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-3 text-gray-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
            />
          </svg>
          <span className="text-sm">{location}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <button 
            className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Handle booking logic
            }}
          >
            Book Now
          </button>
          <button 
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              // Handle contact logic
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;