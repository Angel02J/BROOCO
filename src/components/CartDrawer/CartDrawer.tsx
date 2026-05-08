import { X, Trash2, Minus, Plus, ArrowRight } from "lucide-react";
import { useCart } from "../../context/CartContext";

export const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    toggleCart,
    updateQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleCart}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-112.5 bg-white z-50 
            shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
              isCartOpen ? "translate-x-0" : "translate-x-full"
            }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <h2 className="text-sm font-medium tracking-[0.2em] text-gray-900 uppercase">
            Tu Carrito ({cartItems.length})
          </h2>
          <button
            onClick={toggleCart}
            className="p-2 text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-gray-500 tracking-widest text-sm uppercase">
                Tu carrito está vacío
              </p>
              <button
                onClick={toggleCart}
                className="text-xs font-medium tracking-widest text-gray-900 border-b border-gray-900 pb-1 cursor-pointer"
              >
                Continuar comprando
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-24 aspect-3/4 bg-gray-50 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h3 className="text-xs font-medium tracking-wide text-gray-900 uppercase leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-[10px] text-gray-500 tracking-widest uppercase mt-1">
                          Talla: {item.size || "Única"}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-3 py-1 text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        ${(item.price * item.quantity).toLocaleString("es-MX")}{" "}
                        MXN
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-8 bg-gray-50/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm tracking-widest text-gray-500 uppercase">
                Subtotal
              </span>
              <span className="text-lg font-medium text-gray-900">
                ${cartTotal.toLocaleString("es-MX")} MXN{" "}
              </span>
            </div>
            <p
              className="text-[10px] tracking-widest text-gray-500 text-center mb-6 
              uppercase"
            >
              Los gastos de envío se calculan en el checkout
            </p>
            <button
              className="w-full flex items-center justify-center space-x-3 px-8 
              py-5 bg-gray-900 text-white text-xs font-medium tracking-[0.2em] 
              uppercase hover:bg-gray-800 transition-colors group cursor-pointer"
            >
              <span>Proceder al pago</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
};
