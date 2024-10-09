import React, { useEffect, useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5"; 
import { AiOutlineHeart } from "react-icons/ai"; 
import { GiShop } from "react-icons/gi"; 
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import beauty from "../../assets/beauty.png";
import { Product } from '../../api/makeupApi';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0); 
  const [language, setLanguage] = useState<string>('uz');
  const [currency, setCurrency] = useState<string>('USD');

  useEffect(() => {
    // Load initial states from localStorage
    try {
      const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
      setCartCount(cartItems.length);
    } catch (error) {
      console.error('Error parsing cart items from localStorage:', error);
      setCartCount(0);
    }

    const storedLanguage = localStorage.getItem('language') || 'uz';
    setLanguage(storedLanguage);

    const storedCurrency = localStorage.getItem('currency') || 'USD';
    setCurrency(storedCurrency);

    const storedLikes = JSON.parse(localStorage.getItem('likes') || '[]');
    setLikesCount(storedLikes.length);
  }, []);
  
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const handleCurrencyChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = e.target.value;
    setCurrency(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  return (
    <div>
      <div className="bg-white text-red-800 text-center py-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-10 space-y-2 md:space-y-0">
        <p className="flex items-center justify-center mx-auto font-semibold text-sm md:text-base">
          FREE delivery over £25 OR spend £60 for FREE next day delivery. Download the app for exclusive offers and discounts!
        </p>
        <div className="flex justify-center items-center space-x-4">
          <select
            id="language-select"
            value={language}
            onChange={handleLanguageChange}
            className="border border-gray-300 p-2 rounded-md shadow-md"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <select
            id="currency-select"
            value={currency}
            onChange={handleCurrencyChange}
            className="border border-gray-300 p-2 rounded-md shadow-md w-[100px]"
          >
            <option value="USD">USD</option>
            <option value="UZS">UZS</option>
          </select>
        </div>
      </div>

      <header className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/"> 
            <img src={beauty} alt="Beauty Bay" className="w-[120px]" />
          </Link>
          
          <div className="flex-grow mx-8">
            <input
              type="text"
              placeholder="Search products, brands"
              className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/category" aria-label="Category">
              <GiShop className="text-3xl text-gray-600 hover:text-purple-500 cursor-pointer transition" />
            </Link>
            <Link to="/cart" className="relative" aria-label="Cart">
              <IoCartOutline className="text-3xl text-gray-600" /> 
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {cartCount}
              </span>
            </Link>
            <Link to="/likes" className="relative" aria-label="Likes">
              <AiOutlineHeart className="text-3xl text-gray-600" />
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {likesCount}
              </span>
            </Link>
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6 text-gray-600" />
              ) : (
                <MenuIcon className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow">
            <nav className="px-4 py-2 space-y-2">
              <Link to="/category/lipstick" className="block text-gray-700 hover:text-purple-500 transition">
                Lipsticks
              </Link>
              <Link to="/category/foundation" className="block text-gray-700 hover:text-purple-500 transition">
                Foundations
              </Link>
              <Link to="/category/eyeshadow" className="block text-gray-700 hover:text-purple-500 transition">
                Eyeshadows
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className="bg-white py-6">
        <div className="container mx-auto flex justify-center space-x-8 flex-wrap">
          {["Gifting", "Offers", "By BEAUTY BAY", "New & Trending", "Brands", "Makeup", "Skincare", "Haircare", "Body Care", "Wellness", "Tools & Accessories"].map((category) => (
            <Link to="/category" key={category} className="text-sm text-gray-700 hover:text-black">{category}</Link>
          ))}
        </div>
      </div>       
    </div>
  );
};

export default Header;