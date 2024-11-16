import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../constants/server";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${server}/api/car/`);
      if (data.success) {
        setCars(data.cars);
      }
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchCars = async () => {
    try {
      setSearchLoading(true);
      const { data } = await axios.get(
        `${server}/api/car/search?q=${search}`,
        { withCredentials: true }
      );
      if (data.success) {
        setSearchResults(data.cars);
      }
    } catch (err) {
      console.error(err.response?.data?.message);
      setSearchResults([]);
    } finally {
      setSearchLoading(false);
    }
  };

  useEffect(() => {
    if (!search.trim()) {
      setSearchResults([]);
      return;
    }
    const id = setTimeout(() => {
      handleSearchCars();
    }, 500);
    return () => clearTimeout(id);
  }, [search]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="relative max-w-md mb-5">
        <div className="relative">
          <input
            type="text"
            placeholder="Search cars..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {searchLoading && (
            <div className="absolute right-3 top-2.5">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
            </div>
          )}
        </div>

        {/* Search Results Dropdown */}
        {search.trim() && (
          <div className="absolute z-20 w-full mt-1 bg-white rounded-md shadow-lg max-h-96 overflow-y-auto">
            {searchResults&&searchResults?.length === 0 ? (
              <div className="p-4 text-gray-500 text-center">
                {searchLoading ? "Searching..." : "No results found"}
              </div>
            ) : (
              <div className="py-2">
                {searchResults?.map((car) => (
                 <div  className="p-2" key={car._id}><Link to={`/car/${car._id}`}>{car.title}</Link></div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <hr className="my-8" />

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            onClick={() => navigate(`/cars/${car._id}`)}
          />
        ))}
      </div>
    </div>
  );
}

function CarCard({ car, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <img
        src={car.images[0].url}
        alt={car.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{car.title}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {car.description.substring(0, 100)}...
        </p>
        <div className="flex flex-wrap gap-2">
          {car.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cars;