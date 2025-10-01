// src/components/ProductDetailClient.js
'use client';
import { useState } from 'react';
import { useCart } from '../context/CartContext.js';

export default function ProductDetailClient({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      setIsAdded(true);
      setTimeout(() => { setIsAdded(false); }, 2000);
    }
  };

  if (!product) {
    return <div className="text-center py-20">Product details could not be loaded.</div>;
  }

  return (
    <div className="bg-amber-50 py-20 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={product.detailImageUrl} alt={product.name} className="rounded-lg shadow-lg w-full h-auto"/>
        </div>
        <div className="text-amber-950">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-montserrat">{product.name}</h1>
          <p className="text-2xl font-semibold text-amber-900 mb-6">{product.price}</p>
          <p className="text-lg text-amber-800 mb-6">{product.description}</p>
          <div className="border-t border-amber-200 pt-6">
            <h3 className="text-xl font-bold mb-3">Tasting Notes</h3>
            <ul className="flex flex-wrap gap-2 mb-6">
              {product.tastingNotes.map(note => (
                <li key={note} className="bg-amber-200 text-amber-900 text-sm font-semibold px-3 py-1 rounded-full">{note}</li>
              ))}
            </ul>
            <p><span className="font-bold">Origin:</span> {product.origin}</p>
            <p><span className="font-bold">Roast Level:</span> {product.roastLevel}</p>
          </div>
          <button onClick={handleAddToCart} className={`mt-8 w-full font-bold py-4 px-8 rounded-full transition-colors duration-300 text-lg shadow-lg ${isAdded ? 'bg-green-600 text-white' : 'bg-amber-900 text-amber-50 hover:bg-amber-800'}`}>
            {isAdded ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}