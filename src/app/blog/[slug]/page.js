// src/app/blog/[slug]/page.js
import Header from '../../../components/Header.js';
import Footer from '../../../components/Footer.js';
// Import the posts data from our new central location
import { posts } from '../../../lib/data.js';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="bg-white">
      <Header />
      <article className="py-20 px-4">
        {/* The container is now centered and has a max-width for readability */}
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 leading-tight">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-gray-500">
              <span>By {post.author}</span>
              <span>&bull;</span>
              <span>{post.date}</span>
              <span>&bull;</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          
          {/* A beautiful hero image for the article */}
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-12" />

          {/* The 'prose' class from Tailwind Typography provides beautiful default styling for articles */}
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