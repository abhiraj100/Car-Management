import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  // Hide the Navbar on specific routes
  if (['/login', '/signup'].includes(location.pathname)) {
    return null;
  }

  return (
    <nav className="bg-black mx-auto">
      <div className="container mx-auto flex flex-col items-baseline md:items-baseline lg:flex-row md:justify-evenly lg:items-start lg:justify-between space-y-2 p-4 lg:p-1">
        {/* Left Side */}
        <div className="flex flex-row my-1">
          <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
          <div className="mt-2 ml-2">
            <h3 className="text-red-600 font-poppins text-xl font-bold">
              CAR MANAGEMENT
            </h3>
            <p className="text-gray-300 text-[12px] ml-2 mt-0 font-bold font-poppins">
              Drive Smart, Manage Easy 🚗
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex">
          <ul className="text-white cursor-pointer mt-4 flex flex-col text-left md:flex-row items-left justify-center gap-x-6 font-poppins">
            <NavLink
              to="/vision"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-white'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/company"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-white'
              }
            >
              About
            </NavLink>
            <NavLink
              to="/ecosystem"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-white'
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-white'
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className="flex gap-x-6">
          <button
            onClick={handleLogin}
            className="text-black bg-white px-5 rounded-xl cursor-pointer mt-4 flex flex-col text-left md:flex-row items-left justify-center gap-x-6 font-poppins"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="text-black bg-white px-3 rounded-xl cursor-pointer mt-4 flex flex-col text-left md:flex-row items-left justify-center gap-x-6 font-poppins"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
