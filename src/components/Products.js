// src/components/Products.js
'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext.js';
import { coffeeProducts } from '../lib/data.js';

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
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-950 mb-12">Our Coffee Selection</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coffeeProducts.map((product) => (
            <a href={`/products/${product.slug}`} key={product.id} className="group block">
              <div className="bg-amber-50 rounded-lg shadow-md overflow-hidden transform group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-amber-950 mb-2 transition-colors group-hover:text-amber-700">{product.name}</h3>
                  <p className="text-amber-800 mb-4 flex-grow">{product.description}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <p className="text-lg font-semibold text-amber-900">{product.price}</p>
                    <button onClick={(e) => handleAddToCart(e, product)} className={`font-bold py-2 px-4 rounded-full transition-all duration-300 shadow ${addedId === product.id ? 'bg-green-600 text-white' : 'bg-amber-900 text-amber-50 hover:bg-amber-800'}`} disabled={addedId === product.id}>
                      {addedId === product.id ? 'Added ✓' : 'Add +'}
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