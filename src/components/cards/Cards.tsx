import bay from "../../assets/bay.png";
import avene from "../../assets/avene.png";
import joseon from "../../assets/joseon.png";
import skin1004 from "../../assets/nature.png";

const Brand = () => {
  const brands = [
    { img: bay, name: "BY BEAUTY BAY" },
    { img: avene, name: "AVENE" },
    { img: joseon, name: "BEAUTY OF JOSEON" },
    { img: skin1004, name: "SKIN1004" },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <h1 className="text-4xl font-semibold mb-12 text-center text-black-800">SHOP WITH BRAND</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-[300px] w-auto object-contain rounded-lg border border-gray-300 shadow-md"
            />
            <h1 className="mt-4 text-gray-800">{brand.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;