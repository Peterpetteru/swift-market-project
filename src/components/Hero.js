// src/components/Hero.js

function Hero() {
  return (
    // A section to contain the hero content
    <section className="bg-amber-50 text-amber-950 py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 tracking-tight">
          Discover Your Perfect Roast
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-amber-800">
          Experience artisan coffee, sustainably sourced and freshly roasted, delivered right to your door.
        </p>
        <a 
          href="#products" 
          className="bg-amber-900 text-amber-50 font-bold py-3 px-8 rounded-full hover:bg-amber-800 transition-colors duration-300 text-lg shadow-lg"
        >
          Shop Our Coffee
        </a>
      </div>
    </section>
  );
}

export default Hero;