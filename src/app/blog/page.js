import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { posts } from '@/lib/data'; // We get our blog data from the central file

export default function BlogPage() {
  return (
    <main className="bg-amber-50">
      <Header />
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4 font-display">The Coffee Co. Blog</h1>
            <p className="text-lg text-amber-800">Brewing tips, stories from our farmers, and company news.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group block bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <div className="relative w-full h-56">
                  <Image 
                    src={post.imageUrl} 
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors font-display">{post.title}</h2>
                  <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
                    <span>By {post.author}</span>
                    <span>&bull;</span>
                    <span>{post.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="font-bold text-amber-900 group-hover:text-amber-700 transition-colors">Read More &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

