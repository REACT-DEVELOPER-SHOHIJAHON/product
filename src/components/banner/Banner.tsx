import React from 'react';
import { useGetAllProductsQuery } from '../../api/makeupApi';
import { Link } from 'react-router-dom';
import { Product } from '../../api/makeupApi';

interface BannerProps {
  featuredProduct: Product & { price_sign?: string | null };
}

const Banner: React.FC<BannerProps> = ({ featuredProduct }) => {
  const { data: products } = useGetAllProductsQuery();

  if (!featuredProduct) {
    return null;
  }

  return (
    <div className="container mx-auto px-10 py-12 bg-gray-50 rounded-lg shadow-lg max-w-7xl">
      <h2 className="text-4xl p-4 font-bold mb-8 text-center text-blue-600">Discover Trendy Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.slice(180, 196).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative transform hover:scale-105"
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600 transition mb-2">
                  {product.name}
                </h3>
                <p className="text-blue-600 font-semibold text-xl mb-4">
                  {product.price_sign}{product.price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition shadow-md text-left"
                >
                  SINGLE PAGE
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">No products available</div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-center p-10 max-w-7xl mx-auto mt-12 rounded-xl bg-gradient-to-r from-white-200 to-indigo-300 shadow-2xl">
        <div className="flex-1 p-8 text-center text-gray-900">
          <p className="mb-8 text-[22px] leading-relaxed text-gray-800">
            Looking for five-star formulas, minus the price tag? From skincare essentials to makeup must-haves and results-driven haircare, By BEAUTY BAY has everything you need to discover your next best obsession.
          </p>
          <Link to="/category">
            <button
              className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition duration-300 shadow-lg"
            >
              SHOP NOW WITH BEAUTY BAY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;