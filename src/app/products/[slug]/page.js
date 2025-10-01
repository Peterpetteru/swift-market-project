// src/app/products/[slug]/page.js
import Header from '../../../components/Header.js';
import Footer from '../../../components/Footer.js';
import { coffeeProducts } from '../../../lib/data.js';
import ProductDetailClient from '../../../components/ProductDetailClient.js';

export async function generateStaticParams() {
  return coffeeProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = coffeeProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main>
        <Header />
        <div className="text-center py-20">Product not found.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <ProductDetailClient product={product} />
      <Footer />
    </main>
  );
}