import { useParams } from "react-router-dom";
import { products } from "../components/data/products";

function Category() {
  const { name } = useParams();

  const filtered = products.filter(p => p.category === name);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {filtered.length > 0 ? (
        <p>No products found.</p>
      ) : (
        filtered.map(product => (
          <div key={product.id} className="border rounded-xl overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-700">{product.name}</h3>
              <p className="text-green-600 font-semibold mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-green-600 text-white py-1.5 rounded-md text-sm hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Category;






