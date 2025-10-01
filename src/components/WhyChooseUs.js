// src/components/WhyChooseUs.js

function WhyChooseUs() {
  return (
    <section className="bg-amber-50 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-950 mb-12">
          Why Coffee Co.?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-amber-900 text-amber-50 rounded-full p-4 mb-4">
              {/* Placeholder for an icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-950 mb-2">Ethically Sourced</h3>
            <p className="text-amber-800">
              We partner directly with farmers to ensure fair wages and sustainable practices.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-amber-900 text-amber-50 rounded-full p-4 mb-4">
              {/* Placeholder for an icon */}
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-950 mb-2">Peak Freshness</h3>
            <p className="text-amber-800">
              Our beans are roasted to order and shipped within 48 hours for maximum flavor.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
             <div className="bg-amber-900 text-amber-50 rounded-full p-4 mb-4">
              {/* Placeholder for an icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-amber-950 mb-2">Crafted with Love</h3>
            <p className="text-amber-800">
              Each roast is a result of meticulous testing and a passion for perfect coffee.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;