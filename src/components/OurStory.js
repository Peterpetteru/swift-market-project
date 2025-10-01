// src/components/OurStory.js

function OurStory() {
  return (
    <section id="about" className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <div>
            <img 
              src="https://placehold.co/600x400/5c3a2b/ffffff?text=Our+Roastery" 
              alt="Inside the Coffee Co. roastery"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Text Column */}
          <div className="text-amber-950">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Passion, Your Perfect Cup
            </h2>
            <p className="text-amber-800 mb-4">
              Coffee Co. was born from a simple idea: that everyone deserves to experience truly exceptional coffee. It all started in a small garage in Lagos, with a relentless pursuit of the perfect roast. We spent years building relationships with farmers who share our commitment to quality and sustainability.
            </p>
            <p className="text-amber-800">
              Today, we're proud to bring you a curated selection of single-origin beans and signature blends, each telling a unique story of its origin. Every batch is roasted with precision and care, ensuring that the coffee that reaches your cup is the freshest and most flavorful possible.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurStory;