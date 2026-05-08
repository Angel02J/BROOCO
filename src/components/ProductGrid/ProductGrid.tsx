import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "SUDADERA ESTRUCTURAS - AMARILLO",
    price: 1450,
    category: "NUEVA COLECCIÓN",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "PANTALÓN CARGO MINIMAL",
    price: 1800,
    category: "HOMBRE",
    image:
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "CHAQUETA TÉCNICA OVERSIZE",
    price: 2200,
    category: "MUJER",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
  },
];

export const ProductGrid = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex justify-between items-end border-b border-gray-100 pb-6">
          <div>
            <h2 className="text-2xl font-light tracking-[0.2em] text-gray-900 uppercase">
              Productos Principales
            </h2>
            <p className="text-[10px] tracking-widest text-gray-500 uppercase mt-2">
              Selección exclusiva de temporada
            </p>
          </div>
          <a
            href="#"
            className="text-xs font-medium tracking-widest text-gray-400 
            hover:text-gray-900 transition-colors uppercase border-b border-transparent 
            hover:border-gray-900"
          >
            Ver catálogo completo
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-3/4 mb-4 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                  className="absolute bottom-0 left-0 w-full bg-gray-900/90 text-white 
                  py-4 text-[10px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 
                  transition-all duration-300 translate-y-2 group-hover:translate-y-0 backdrop-blur-sm 
                  hover:bg-gray-900 cursor-pointer"
                >
                  Añadir al Carrito
                </button>
              </div>

              <div className="space-y-1">
                <p className="text-[9px] tracking-widest text-gray-400 uppercase font-medium">
                  {product.category}
                </p>
                <h3 className="text-sm font-light tracking-wide text-gray-900 uppercase">
                  {product.name}
                </h3>
                <p className="text-sm font-medium text-gray-900">
                  ${product.price.toLocaleString("es-MX")} MXN
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
