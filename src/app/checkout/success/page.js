// src/app/checkout/success/page.js
'use client';

import { useEffect } from 'react';
import Header from '../../../components/Header.js';
import Footer from '../../../components/Footer.js';
import { useCart } from '../../../context/CartContext.js';

export default function SuccessPage() {
  // Get the clearCart function from our context
  const { clearCart } = useCart();

  // This is the key: When this page loads, it automatically clears the cart.
  // This simulates the completion of a checkout.
  useEffect(() => {
    clearCart();
  }, [clearCart]); // The dependency array ensures this runs only once.

  return (
    <main className="bg-gray-50">
      <Header />
      <div className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-2xl text-center bg-white p-12 rounded-lg shadow-md">
          {/* Checkmark Icon */}
          <svg className="w-16 h-16 text-green-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Thank You For Your Order!
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Your payment was successful. We've received your order and will begin processing it right away.
          </p>
          <a href="/" className="bg-amber-900 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-800 transition-colors duration-300">
            Continue Shopping
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}