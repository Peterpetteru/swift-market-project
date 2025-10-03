// Define the testimonial data in an array.
const testimonials = [
  {
    id: 1,
    quote: "This is the best coffee I've ever had. The Morning Rise Blend is my go-to every single day. The freshness is unmatched!",
    author: "Adaobi Okoro",
    location: "Lagos, Nigeria"
  },
  {
    id: 2,
    quote: "As a decaf drinker, it's hard to find beans with real flavor. The Sunset Decaf is rich and smooth. I'm a customer for life.",
    author: "Bola Adeyemi",
    location: "Abuja, Nigeria"
  },
  {
    id: 3,
    quote: "The Midnight Espresso makes the perfect shot. It's bold, complex, and has a beautiful crema. Highly recommended for any coffee lover.",
    author: "Chinedu Eze",
    location: "Port Harcourt, Nigeria"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-950 mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-amber-50 p-8 rounded-lg shadow-md">
              {/* THE FIX: Replaced " with &quot; to fix the error */}
              <p className="text-amber-800 italic mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-bold text-amber-950">{testimonial.author}</p>
              <p className="text-sm text-amber-700">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

