import { ShoppingCart, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const[search, setSearch] = useState("");

  return (
    <>
      {/* HEADER (fixed height, never changes) */}
      <div>
        
      </div>
      <header className="fixed top-0 left-0 w-full h-16 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            
            <div className="text-2xl font-bold text-green-600 cursor-pointer">
              FreshMart
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex mx-6 w-[320px]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for groceries..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-gray-200 py-2 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {/* Search icon */}
                {search === "" && (
                  <Search className="absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                )}
                
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium text-gray-700">
              <Link to="/fruits" className="rounded-full px-3 py-1 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                Fruits
              </Link>
              <Link to="/vegetables" className="rounded-full px-3 py-1 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                Vegetables
              </Link>
              <Link to="/dairy" className="rounded-full px-3 py-1 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                Dairy
              </Link>
              <Link to="/snacks" className="rounded-full px-3 py-1 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                Snacks
              </Link>
              <Link to="/frozen-foods" className="rounded-full px-3 py-1 hover:bg-green-50 hover:text-green-600 transition cursor-pointer">
                Frozen Foods
              </Link>
              <Link
                to="/signup"
                className="ml-4 px-4 w-30 py-1.5 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition flex justify-center"
              >
                Get Started
              </Link>
            </nav>

            {/* Cart */}
            <div className="ml-4 relative cursor-pointer hidden md:block">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU (separate from header) */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 max-w-7xl mx-auto z-40 md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search for groceries..."
              className="w-full rounded-full border border-gray-200 py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <a className="px-3 py-2 rounded hover:bg-green-50 hover:text-green-600 cursor-pointer">Fruits</a>
            <a className="px-3 py-2 rounded hover:bg-green-50 hover:text-green-600 cursor-pointer">Vegetables</a>
            <a className="px-3 py-2 rounded hover:bg-green-50 hover:text-green-600 cursor-pointer">Dairy</a>
            <a className="px-3 py-2 rounded hover:bg-green-50 hover:text-green-600 cursor-pointer">Snacks</a>

            <Link
              to="/signup"
              className="px-3 py-2 bg-green-600 text-white rounded-full text-center font-medium hover:bg-green-700 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>

            <div className="px-3 py-2 flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span>0</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
