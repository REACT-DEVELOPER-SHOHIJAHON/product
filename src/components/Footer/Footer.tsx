import React from 'react';
import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram, BsFacebook, BsArrowRight } from "react-icons/bs";
import logo from '../../assets/beauty.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-pink-500 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start mb-8 md:mb-0">
            <img src={logo} alt="Company Logo" className="w-50 h-50 rounded-full mb-4" />
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 text-white">Help & Information</h1>
            <ul className="space-y-2">
              <li className="cursor-pointer">Delivery & Returns</li>
              <li className="cursor-pointer">Contact Us & FAQ's</li>
              <li className="cursor-pointer">About Us</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 text-white">Legal</h1>
            <ul className="space-y-2">
              <li className="cursor-pointer">Terms & Conditions</li>
              <li className="cursor-pointer">TRIBE Terms</li>
              <li className="cursor-pointer">Website Terms of Use</li>
              <li className="cursor-pointer">Privacy</li>
              <li className="cursor-pointer">Anti-Slavery</li>
              <li className="cursor-pointer">Cookies</li>
              <li className="cursor-pointer">Manage Preferences</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-semibold mb-4 text-white">Want More from Beauty Bay?</h1>
            <p className="text-sm mb-4">
              Let’s stay in touch! We promise to send you the latest news, offers, and the freshest beauty drops, straight to your inbox.
            </p>
            <div className="flex items-center mb-4 gap-2">
              <input
                type="text"
                placeholder="Your Email"
                className="border border-gray-300 p-2 rounded-l-md w-full"
              />
              <button
                type="submit"
                aria-label="Subscribe to Newsletter"
                className="p-2 rounded-r-md text-gray-600 bg-white transition-colors"
              >
                <BsArrowRight className="text-2xl" />
              </button>
            </div>
            <div className="flex space-x-4">
              <BsFacebook className="text-2xl cursor-pointer" />
              <BsInstagram className="text-2xl cursor-pointer" />
              <AiFillTwitterCircle className="text-3xl cursor-pointer" />
              <FaTiktok className="text-2xl cursor-pointer" />
              <AiFillYoutube className="text-3xl cursor-pointer" />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>Copyright © 2024 BEAUTY BAY Ltd.</p>
            <p>Registered office address Level 12, 5 Exchange Quay, M5 3EF. Registered in England, company registration number 6427672, VAT number GB 927197591.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;