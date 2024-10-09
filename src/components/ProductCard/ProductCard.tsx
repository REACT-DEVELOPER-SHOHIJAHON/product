// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../../api/makeupApi';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 relative">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full h-64 object-cover object-top"  
        />
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 hover:text-teal-600 transition duration-200">
          {product.name}
        </h3>
        <p className="mt-2 text-teal-600 font-bold text-2xl">
          {product.price_sign}{product.price}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="mt-4 inline-block bg-teal-500 text-white px-4 py-2 rounded transition-all duration-200 hover:bg-teal-600"
        >
          VIEW DETAILS
        </Link>
      </div>
      <div className="absolute top-2 right-2">
        <span className="bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
          New 33%
        </span>
      </div>
    </div>
  );
};

export default ProductCard;