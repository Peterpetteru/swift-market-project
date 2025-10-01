// src/app/blog/page.js

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

// This array acts as our blog's database.
// All the titles, excerpts, AND full content are defined here.
export const posts = [
  {
    id: 1,
    title: 'How to Brew the Perfect Pour-Over',
    slug: 'how-to-brew-perfect-pour-over', // This becomes the URL
    excerpt: 'Master the art of the pour-over with our step-by-step guide. We cover everything from grind size to water temperature for a flawless cup.',
    author: 'Petteru, Founder', // <-- UPDATED
    date: 'September 30, 2025',
    readTime: '5 min read',
    content: `
      <p class="mb-4">The pour-over is more than just a brewing method; it's a ritual. It gives you complete control over the extraction process, resulting in a clean, nuanced cup of coffee that highlights the unique flavors of the bean. Here’s how to master it.</p>
      <img src="https://placehold.co/800x400/a1887f/ffffff?text=Perfect+Pour-Over" alt="Pour-over coffee setup" class="rounded-lg my-6" />
      <h3 class="text-2xl font-bold mt-8 mb-3 text-amber-900">What You'll Need:</h3>
      <ul class="list-disc list-inside mb-6 space-y-2 text-amber-800">
        <li>Quality coffee beans (freshly roasted, of course!)</li>
        <li>A gooseneck kettle for precise pouring</li>
        <li>A pour-over dripper (like a V60 or Kalita Wave)</li>
        <li>High-quality paper filters</li>
        <li>A digital scale and timer</li>
      </ul>
      <h3 class="text-2xl font-bold mt-8 mb-3 text-amber-900">The Process:</h3>
      <p>The key is precision and patience. Start by rinsing your filter to remove any paper taste. Measure your beans and water carefully (a 1:16 coffee-to-water ratio is a great starting point). Control your pour in slow, concentric circles, allowing the coffee to "bloom" first. The entire process should take about 3-4 minutes. The result is a cup that is truly worth the effort. Happy brewing!</p>
    `
  },
  {
    id: 2,
    title: 'The Story Behind Our Morning Rise Blend',
    slug: 'story-of-morning-rise-blend',
    excerpt: 'Journey with us to the high-altitude farms where our signature blend is born. Learn about the farmers, the process, and the passion in every bean.',
    author: 'Petteru, Founder', // <-- UPDATED
    date: 'September 22, 2025',
    readTime: '4 min read',
    content: `
      <p class="mb-4">Our Morning Rise Blend isn't just a product; it's a relationship. It began with a trip to the Sidamo region of Ethiopia, a place renowned for its incredible coffee heritage. There, we met a cooperative of farmers dedicated to sustainable, organic practices passed down through generations.</p>
      <p>We work with them directly, ensuring they receive fair prices that empower their communities. The beans are hand-picked at peak ripeness, meticulously washed, and then sun-dried on raised beds. This careful process preserves the delicate floral and citrus notes that make this blend so special. When you drink our Morning Rise Blend, you're not just tasting coffee; you're tasting a story of community, dedication, and a shared love for an exceptional cup.</p>
    `
  },
];

// This is the component that renders the list of blog posts.
export default function BlogPage() {
  return (
    <main>
      <Header />
      <div className="bg-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-amber-950 mb-12 font-montserrat">
            The Coffee Co. Blog
          </h1>
          <div className="space-y-16">
            {posts.map((post) => (
              <div key={post.id}>
                <h2 className="text-3xl font-bold text-amber-900 mb-2 hover:text-amber-700 transition-colors">
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h2>
                <div className="flex items-center space-x-4 text-sm text-amber-700 mb-4">
                  <span>By {post.author}</span>
                  <span>&bull;</span>
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <p className="text-amber-800 text-lg mb-4">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="font-bold text-amber-900 hover:text-amber-700 transition-colors">
                  Read More &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}