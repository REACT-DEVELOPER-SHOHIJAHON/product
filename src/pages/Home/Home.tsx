import React from 'react'; 
import { useGetAllProductsQuery } from '../../api/makeupApi';
import Cards from '../../components/cards/Cards';
import Section from '../../components/section/Section';
import Banner from '../../components/banner/Banner';
import ProductCard from '../../components/ProductCard/ProductCard'; 
import "./Home.css";

const Home: React.FC = () => {
  // Fetch all products from the API
  const { data: products, error, isLoading } = useGetAllProductsQuery();

  // Handle loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return <div className="text-center text-red-500">Error loading products.</div>;
  }

  // Featured products selection
  const featuredProducts = products ? products.slice(123, 127) : []; 
  const featuredProduct = products && products.length > 0 ? products[0] : null;

  // Image URL for the banner section
  const imageUrl = "https://sun9-1.userapi.com/impf/c855632/v855632752/1148c8/AYeAd5M6NA8.jpg?size=1280x720&quality=96&sign=19a343ebd0a4f532b0ec2a09d9c2a15f&c_uniq_tag=_Ew89S4ckXdCsQn9OUQtnEE6wuODk1VeuFDpAW52Xcw&type=album"; 

  return (
    <>
      <div>
        {/* Welcome Section */}
        <section className="h-screen text-white py-20 relative">
          <img
            src={imageUrl} 
            alt="Intro"
            className="w-full h-full object-cover absolute top-0 left-0 z-[-1] video"
            style={{ filter: 'blur(0.5px)' }} 
          />
          <div className="container mx-auto absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-6xl font-extrabold mb-4 text-blue-600">Welcome to BeautyBay</h1>
            <p className="text-lg mb-6 flex flex-col items-center justify-center text-yellow-500">
              Discover a wide range of beauty products curated just for you.
            </p>
            <a
              href="#products"
              className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-blue-600 hover:text-white transition"
            >
              Shop Now
            </a>
          </div>
        </section>

        {/* Featured Products Section */}
        <section id="products" className="py-16 bg-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
      
      {/* Other Components */}
      <Cards />
      <Section />

      {/* Banner for featured product */}
      {featuredProduct && <Banner featuredProduct={featuredProduct} />}
    </>
  );
};

export default Home;