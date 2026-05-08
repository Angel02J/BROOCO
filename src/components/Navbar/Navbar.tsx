import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleCart, cartCount } = useCart();

  return (
    <div
      className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b 
      border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="shrink-0 flex flex-col items-center cursor-pointer">
            <span className="text-2xl font-bold tracking-[0.3em] text-gray-900 leading-none">
              BROOCO
            </span>
            <div className="flex items-center w-full mt-1">
              <span
                className="text-[10px] tracking-[0.15em] text-gray-500 uppercase 
                whitespace-nowrap"
              >
                Fashion Store
              </span>
              <div className="ml-2 h-px bg-gray-900 grow"></div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a
              href="#"
              className="text-sm font-medium tracking-widest text-gray-900 
              hover:text-gray-500 transition-colors"
            >
              HOMBRE
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-widest text-gray-900 
              hover:text-gray-500 transition-colors"
            >
              MUJER
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-widest text-gray-900 
              hover:text-gray-500 transition-colors"
            >
              ACCESORIOS
            </a>
            <a
              href="#"
              className="text-sm font-medium tracking-widest text-gray-900 
              hover:text-gray-500 transition-colors"
            >
              COLECCIONES
            </a>
          </div>

          <div className="flex items-center space-x-5">
            <button
              className="text-gray-900 hover:scale-110 transition-transform 
              hover:cursor-pointer"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button
              className="hidden sm:block text-gray-900 hover:scale-110 
              transition-transform hover:cursor-pointer"
            >
              <User size={20} strokeWidth={1.5} />
            </button>

            <button
              onClick={toggleCart}
              className="text-gray-900 hover:scale-110 transition-transform relative 
              hover:cursor-pointer"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-black text-white 
                  text-[10px] w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center py-8">
            <a
              href="#"
              className="block px-3 py-4 text-lg font-medium tracking-widest text-gray-900"
            >
              HOMBRE
            </a>
            <a
              href="#"
              className="block px-3 py-4 text-lg font-medium tracking-widest text-gray-900"
            >
              MUJER
            </a>
            <a
              href="#"
              className="block px-3 py-4 text-lg font-medium tracking-widest text-gray-900"
            >
              ACCESORIOS
            </a>
            <a
              href="#"
              className="block px-3 py-4 text-lg font-medium tracking-widest text-gray-900"
            >
              COLECCIONES
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
