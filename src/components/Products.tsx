import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Strawberry", image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=500&auto=format&fit=crop&q=60", price: "$2" },
  { id: 2, name: "Orange", image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500&auto=format&fit=crop&q=60", price: "$1.5" },
  { id: 3, name: "Apple", image: "https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?w=500&auto=format&fit=crop&q=60", price: "$3" },
  { id: 4, name: "Banana", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60", price: "$4" },
  { id: 5, name: "Lemon", image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60", price: "$2" },
  { id: 6, name: "Chesse", image: "https://media.istockphoto.com/id/2237342139/photo/board-with-a-variety-of-cheeses-parma-cheese-blue-cheese-manchego-cheese-french-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=UXNhXAnOt9Qy75RX2JrBSz6xL-tx9mymSvJ7kdkjzXg=", price: "$2" },
  { id: 7, name: "Tomato Soup", image: "https://images.unsplash.com/photo-1693168045046-9a4b4f30f1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTN8fGdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.5" },
  { id: 8, name: "Red bell pepper", image: "https://images.unsplash.com/photo-1614260025937-b4ecb6eb9165?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxncm9jZXJpZXN8ZW58MHx8MHx8fDA%3D", price: "$3" },
  { id: 9, name: "Frozen turkey", image: "https://media.istockphoto.com/id/507755834/photo/raw-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=sJzumywvHcZwVE4PFFjdXuxXIWjAZ5YGmqwDB4RA38k=", price: "$4" },
  { id: 10, name: "Okra", image: "https://media.istockphoto.com/id/1327662123/photo/abelmoschus-esculentus-commonly-known-as-ladys-finger-or-okra.webp?a=1&b=1&s=612x612&w=0&k=20&c=RyHAO3DQtwiHKQQUl8xSUXrfy_Xg-5_4H66W97dABwg=", price: "$2" },
  { id: 11, name: "Broccoli", image: "https://images.unsplash.com/photo-1751200365135-9e9eb01a2919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JvY2VyaWVzJTIwdmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D", price: "$2" },
  { id: 12, name: "Egg", image: "https://images.unsplash.com/photo-1755445412767-73ea49b9799c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdyb2NlcmllcyUyMGVnZ3xlbnwwfHwwfHx8MA%3D%3D", price: "$1.5" },
  { id: 13, name: "Celery", image: "https://images.unsplash.com/photo-1589469224608-c84d02c71b94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ5fHx8ZW58MHx8fHx8", price: "$3" },
  { id: 14, name: "Spinach", image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyb2NlcmllcyUyMHNwaW5hY2h8ZW58MHx8MHx8fDA%3D", price: "$4" },
  { id: 15, name: "chilli pepper", image: "https://images.unsplash.com/photo-1601602062684-803b28de2a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyb2NlcmllcyUyMHZlZ2dpZXN8ZW58MHx8MHx8fDA%3D", price: "$2" },
];

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


