import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts } from '@/lib/data';

// This special function tells Next.js which blog post pages to build ahead of time for speed.
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  // Find the specific post from our data file that matches the URL's slug.
  const post = posts.find((p) => p.slug === slug);

  // If no post is found, we can show a simple message.
  if (!post) {
    return (
      <main>
        <Header />
        <div className="text-center py-20">Post not found.</div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-white">
      <Header />
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 leading-tight font-display">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gray-500">
              <span>By {post.author}</span>
              <span>&bull;</span>
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="relative w-full h-auto max-h-[500px] mb-12">
            <Image 
              src={post.imageUrl} 
              alt={post.title}
              width={1200}
              height={675}
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>

          {/* The 'prose' class from Tailwind provides beautiful default styling for articles */}
          <div 
            className="prose lg:prose-xl max-w-none prose-h3:text-amber-900 prose-p:text-gray-700 prose-ul:text-gray-600"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
      </article>
      <Footer />
    </main>
  );
}

