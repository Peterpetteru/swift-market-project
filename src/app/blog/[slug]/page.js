// src/app/blog/[slug]/page.js

import Header from '../../../components/Header.js';
import Footer from '../../../components/Footer.js';
// We import the 'posts' array from our main blog page file.
import { posts } from '../page.js';

// This is a special function to tell Next.js which blog post pages to create.
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  // Get the 'slug' from the URL to know which post to display.
  const { slug } = params;

  // Find the post from our data array that matches the slug.
  const post = posts.find((p) => p.slug === slug);

  // If for some reason the post isn't found, show a message.
  if (!post) {
    return (
      <main>
        <Header />
        <div className="text-center py-20">Post not found.</div>
        <Footer />
      </main>
    );
  }

  // If the post is found, render the full article with our "Medium feel".
  return (
    <main>
      <Header />
      <article className="bg-amber-50 py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 font-montserrat leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-amber-700 mb-8">
            <span>By {post.author}</span>
            <span>&bull;</span>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>
          
          {/* This part takes the HTML string from our 'content' and safely renders it on the page. */}
          <div 
            className="prose lg:prose-xl max-w-none text-amber-900 prose-headings:text-amber-950 prose-strong:text-amber-950"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

        </div>
      </article>
      <Footer />
    </main>
  );
}