import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-8">
        <hr className="bg-[#E4E4E7] mt-2" />
        <div className="flex flex-col md:flex-row space-y-8 md:space-x-8 md:space-y-0">
          {/* first div */}
          <div className="lg:w-2/5 p-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <img src="/logo.jpg" alt="Logo" className="w-16 h-16" />
              <div className="ml-4">
                <h3 className="text-red-600 text-xl font-bold">CAR MANAGEMENT</h3>
                <p className="text-gray-300 text-sm font-bold">Drive Smart, Manage Easy 🚗</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-start mt-4 space-x-6">
              <FaTwitter className="text-white w-7 h-7" />
              <FaFacebookF className="text-white w-7 h-7" />
              <FaInstagram className="text-white w-7 h-7" />
              <FaGithub className="text-white w-7 h-7" />
            </div>
          </div>

          {/* third div */}
          <div className="lg:w-1/5 p-8">
            <h2 className="text-white font-bold text-lg">Company</h2>
            <ul className="text-white font-semibold text-sm mt-6 space-y-4">
              <li>
                <NavLink>About Us</NavLink>
              </li>
              <li>
                <NavLink>Our car companies</NavLink>
              </li>
            </ul>
          </div>

          {/* fourth div */}
          <div className="lg:w-1/5 p-8">
            <h2 className="text-white font-bold text-lg">Help</h2>
            <ul className="text-white font-semibold text-sm mt-6 space-y-4">
              <li>
                <NavLink >Contact Us</NavLink>
              </li>
              <li>
                <NavLink >Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink >Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink >Cancellation & Refund</NavLink>
              </li>
              <li>
                <NavLink >Shipping & Delivery</NavLink>
              </li>
            </ul>
          </div>

          {/* fifth div */}
          <div className="lg:w-1/5 p-8">
            <h2 className="text-white font-bold text-lg">Contact</h2>
            <ul className="text-white font-semibold text-sm mt-6 space-y-4">
              <li>
                <NavLink >Phone: +91 9112233445</NavLink>
              </li>
              <li>
                <NavLink >Email: carmanagement@gmail.com</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
