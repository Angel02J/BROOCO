import { ArrowRight } from "lucide-react";

export const BROOCOHero = () => {
  return (
    <div className="relative font-sans text-gray-900 bg-white">
      <section className="relative min-h-screen flex flex-col md:flex-row items-stretch pt-20">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-start text-left px-8 
          py-16 md:px-16 lg:px-24 z-10 bg-white"
        >
          <p
            className="text-sm md:text-base font-medium tracking-[0.2em] text-gray-500 mb-4 
            uppercase"
          >
            El minimalismo refinado
          </p>

          <h1
            className="text-4xl lg:text-5xl font-light tracking-[0.15em] leading-snug 
            text-gray-900 mb-10"
          >
            NUEVA COLECCIÓN <br />
            <span className="font-semibold">ESTRUCTURAS</span>
          </h1>

          <button
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-900 
            text-white text-sm font-medium tracking-[0.15em] uppercase hover:bg-gray-800 
              transition-colors group hover:cursor-pointer"
          >
            <span>Descubre la colección</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-2 transition-transform"
            />
          </button>
        </div>

        <div
          className="w-full md:w-1/2 h-[50vh] md:h-auto relative 
          overflow-hidden bg-gray-100"
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop"
            alt="Minimalist Fashion Collection Model"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </div>
      </section>
    </div>
  );
};
