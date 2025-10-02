// src/components/CTA.js

export default function CTA() {
  return (
    <section className="bg-amber-950">
      <div className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Find Your New Favorite Coffee?
        </h2>
        <p className="text-amber-200 text-lg max-w-2xl mx-auto mb-8">
          Browse our selection of freshly roasted, artisan coffees and experience the difference that quality makes.
        </p>
        <a 
          href="/#products" 
          className="bg-white text-amber-950 font-bold py-3 px-8 rounded-full hover:bg-amber-100 transition-colors duration-300 text-lg shadow-lg"
        >
          Shop All Coffee
        </a>
      </div>
    </section>
  );
}