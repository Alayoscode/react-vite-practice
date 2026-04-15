import { useEffect, useState } from "react";
import { products } from "./data/products";

const Products = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  if (!hasMounted) return null;

  return (
    <div >
        

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300 relative group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 sm:h-48 md:h-52 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm sm:text-base font-medium text-gray-700">{product.name}</h3>
              <p className="text-green-600 font-semibold mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-green-600 text-white py-1.5 rounded-md text-sm hover:bg-green-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  
    
  );
};

export default Products;


