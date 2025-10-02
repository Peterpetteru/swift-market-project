import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
// STEP 1: Import our new Chatbot component
import Chatbot from "@/components/Chatbot";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata = {
  title: "Coffee Co.",
  description: "Artisan coffee, sustainably sourced and freshly roasted.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          {/* STEP 2: Add the Chatbot component here. It will float above all other content. */}
          <Chatbot />
        </CartProvider>
      </body>
    </html>
  );
}

