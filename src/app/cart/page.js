'use client';

import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

  return (
    <main className="bg-gray-50">
      <Header />
      <div className="py-20 px-4 min-h-screen">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Your Shopping Cart
          </h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-12 px-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 text-lg mb-4">Your cart is currently empty.</p>
              <Link href="/" className="bg-amber-900 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-800 transition-colors duration-300">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-4 bg-white p-6 rounded-lg shadow-md">
                  {cart.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-b-0">
                       <div className="flex items-center gap-4">
                        <Image 
                          src={item.imageUrl} 
                          alt={item.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-md object-cover"
                        />
                        <div>
                          <h2 className="font-bold text-gray-800">{item.name}</h2>
                          <p className="text-sm text-gray-500">{item.price}</p>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline text-sm font-semibold mt-1">Remove</button>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 font-bold text-lg hover:bg-gray-300">-</button>
                        <p className="font-semibold text-lg w-4 text-center text-gray-800">{item.quantity}</p>
                        <button onClick={() => addToCart(item)} className="bg-gray-200 text-gray-700 rounded-full w-8 h-8 font-bold text-lg hover:bg-gray-300">+</button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-300 pb-4">Order Summary</h2>
                  <div className="flex justify-between mb-2 text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-4 text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-800">Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-xl text-gray-800 border-t border-gray-300 pt-4">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <Link href="/checkout/success" className="block text-center mt-6 w-full bg-amber-900 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
              <div className="text-center mt-8">
                <button onClick={() => clearCart()} className="text-gray-500 hover:text-red-600 hover:underline font-semibold transition-colors">
                  Clear All Items from Cart
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}

