import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/makeupApi';
import { ShoppingCartIcon } from '@heroicons/react/outline';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, error } = useGetProductByIdQuery(Number(id));

  if (error || !product) {
    return <div className="text-center text-red-500">Error loading product.</div>;
  }

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price), 
      image: product.image_link,
      quantity: 1,
    };

    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    savedCart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(savedCart));
  };

  return (
    <div className="container mx-auto px-8 py-10 flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden">
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={product.image_link}
          alt={product.name}
          className="w-80 h-80 rounded-lg shadow-lg object-contain border border-pink-300"
        />
      </div>

      <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
        <h1 className="text-4xl font-bold text-blue-600">{product.name}</h1>
        <p className="mt-4 text-red-500 text-2xl font-semibold">
          {product.price_sign}{product.price}
        </p>
        <p className="mt-6 text-gray-700">{product.description}</p>

        <div className="mt-6 text-gray-600 space-y-2">
          <p><span className="font-semibold text-gray-800">Brand:</span> {product.brand || 'N/A'}</p>
          <p><span className="font-semibold text-gray-800">Category:</span> {product.category || 'N/A'}</p>
          <p><span className="font-semibold text-gray-800">Rating:</span> {product.rating || 'N/A'}</p>
        </div>

        <div className="mt-8 flex space-x-4">
          <a
            href={product.product_link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition flex items-center shadow-md"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Buy Now
          </a>  
          <button 
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded hover:bg-blue-600 hover:text-white transition shadow-md" 
            onClick={handleAddToCart}
          >
            ADD STORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;