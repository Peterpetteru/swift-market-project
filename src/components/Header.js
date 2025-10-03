'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const CartIcon = () => (
    <Link href="/cart" className="relative hover:text-amber-400">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      {totalItems > 0 && (<span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>)}
    </Link>
  );

  return (
    <>
      <header className="bg-amber-950/90 backdrop-blur-sm text-amber-50 p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-bold text-xl md:text-2xl">Coffee Co.</Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/#products" className="hover:text-amber-400">Shop</Link>
            <Link href="/#about" className="hover:text-amber-400">Our Story</Link>
            <Link href="/blog" className="hover:text-amber-400">Blog</Link>
            <CartIcon />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <CartIcon />
            {/* The hamburger button now animates into an 'X' */}
            <button onClick={toggleMenu} className="z-50 h-8 w-8 relative focus:outline-none">
              <div className="space-y-2">
                <span className={`block w-8 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[10px]' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-8 h-0.5 bg-amber-50 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </header>
      
      {/* The mobile menu is now a sidebar that slides in from the right. */}
      <nav 
        className={`md:hidden fixed top-0 right-0 w-full max-w-xs h-full bg-amber-950/80 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <li><Link href="/#products" onClick={toggleMenu} className="text-amber-50 hover:text-amber-300">Shop</Link></li>
          <li><Link href="/#about" onClick={toggleMenu} className="text-amber-50 hover:text-amber-300">Our Story</Link></li>
          <li><Link href="/blog" onClick={toggleMenu} className="text-amber-50 hover:text-amber-300">Blog</Link></li>
        </ul>
      </nav>
    </>
  );
}

