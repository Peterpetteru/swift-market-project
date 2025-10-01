// src/components/Newsletter.js

function Newsletter() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-950 mb-4">
          Stay in the Loop
        </h2>
        <p className="text-amber-800 mb-8">
          Sign up for our newsletter to receive exclusive offers, brewing tips, and be the first to know about our new roasts.
        </p>
        
        {/* This is a simple form. In a real application, you would connect this to an email service. */}
        <form className="flex flex-col md:flex-row justify-center max-w-md mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-grow p-3 rounded-md border border-amber-300 focus:ring-2 focus:ring-amber-500 focus:outline-none"
            aria-label="Email Address"
          />
          <button 
            type="submit"
            className="bg-amber-900 text-amber-50 font-bold py-3 px-6 rounded-md hover:bg-amber-800 transition-colors duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;