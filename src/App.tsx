import { BROOCOHero } from "./components/BROOCOHero/BROOCOHero";
import { Navbar } from "./components/Navbar/Navbar";
import { ProductGrid } from "./components/ProductGrid/ProductGrid";
import { CartDrawer } from "./components/CartDrawer/CartDrawer";
import { CartProvider } from "./context/CartContext";

export const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <BROOCOHero />
      <ProductGrid />

      <CartDrawer />
    </CartProvider>
  );
};
