// src/components/Header.js
'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const CartIcon = () => (
    <a href="/cart" className="relative hover:text-amber-400 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </a>
  );

  return (
    <>
      <header className="bg-amber-950/80 backdrop-blur-sm text-amber-50 p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-bold text-xl md:text-2xl hover:text-amber-400">Coffee Co.</a>
          <nav className="hidden md:flex space-x-6 items-center text-sm font-medium">
            {/* UPDATED: Links now point to homepage sections correctly */}
            <a href="/#about" className="hover:text-amber-400">About</a>
            <a href="/#products" className="hover:text-amber-400">Shop</a>
            <a href="/blog" className="hover:text-amber-400">Blog</a>
            <a href="/contact" className="hover:text-amber-400">Contact</a> {/* <-- NEW LINK */}
            <CartIcon />
          </nav>
          <div className="md:hidden flex items-center gap-4">
             <CartIcon />
            <button onClick={toggleMenu} className="text-amber-50 focus:outline-none z-50"><div className="space-y-2"><span className="block w-8 h-0.5 bg-amber-50"></span><span className="block w-8 h-0.5 bg-amber-50"></span><span className="block w-6 h-0.5 bg-amber-50"></span></div></button>
          </div>
        </div>
      </header>
      <nav className={`md:hidden fixed top-0 left-0 w-full h-full bg-amber-950/95 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl text-amber-50">
          <li><a href="/#about" onClick={toggleMenu}>About</a></li>
          <li><a href="/#products" onClick={toggleMenu}>Shop</a></li>
          <li><a href="/blog" onClick={toggleMenu}>Blog</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li> {/* <-- NEW LINK */}
        </ul>
      </nav>
    </>
  );
}
export default Header;