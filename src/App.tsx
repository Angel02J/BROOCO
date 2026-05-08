import { useState } from "react";
import { BROOCOHero } from "./components/BROOCOHero/BROOCOHero";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { CartDrawer } from "./components/CartDrawer/CartDrawer";
import { CartProvider } from "./context/CartContext";

export const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <BROOCOHero />
      <ProductGrid />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </CartProvider>
  );
};
