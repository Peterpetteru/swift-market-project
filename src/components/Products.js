'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { coffeeProducts } from '@/lib/data';

export default function Products() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = useState(null);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => { setAddedId(null); }, 1500);
  };

  return (
    <section id="products" className="bg-white py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-amber-950">Our Coffee Selection</h2>
        
        {/* THE CHANGE: This container now scrolls horizontally on mobile */}
        <div className="flex space-x-6 md:grid md:grid-cols-3 md:gap-8 md:space-x-0 overflow-x-auto pb-4">
          {coffeeProducts.map((product) => (
            // The link is now sized for mobile scrolling
            <a href={`/products/${product.slug}`} key={product.id} className="group block flex-none w-72 md:w-auto">
              <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-amber-950 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                  <p className="text-gray-600 mt-2 flex-grow text-sm">{product.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <p className="text-lg font-semibold text-amber-900">{product.price}</p>
                    <button onClick={(e) => handleAddToCart(e, product)} className={`py-2 px-4 rounded-full text-sm font-bold transition-colors ${addedId === product.id ? 'bg-green-600 text-white' : 'bg-amber-900 text-amber-50 hover:bg-amber-800'}`} disabled={addedId === product.id}>
                      {addedId === product.id ? 'Added ✓' : 'Add to cart'}
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

