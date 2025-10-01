// src/context/CartContext.js
'use client';

import { createContext, useState, useContext, useEffect, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // This effect correctly loads the cart from storage when the app first loads.
  useEffect(() => {
    const savedCart = localStorage.getItem('coffee-cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsInitialLoad(false);
  }, []);

  // This effect correctly saves the cart to storage whenever it changes.
  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem('coffee-cart', JSON.stringify(cart));
    }
  }, [cart, isInitialLoad]);

  // THE FIX: The 'clearCart' function now performs TWO actions.
  // 1. It clears the cart from localStorage DIRECTLY.
  // 2. It clears the cart from the component's state.
  // This guarantees that even if the page reloads, it will find an empty cart.
  const clearCart = useCallback(() => {
    localStorage.removeItem('coffee-cart'); // <-- THE KEY TO THE FINAL FIX
    setCart([]);
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const decreaseQuantity = useCallback((productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === productId);
      if (existingProduct?.quantity === 1) {
        return prevCart.filter(item => item.id !== productId);
      } else {
        return prevCart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  }, []);
  
  const removeFromCart = useCallback((productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}