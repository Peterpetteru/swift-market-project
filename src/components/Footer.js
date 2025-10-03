import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-200 py-12 px-4">
      <div className="container mx-auto text-center">
        
        {/* Main Navigation Links */}
        <nav className="flex justify-center space-x-6 md:space-x-8 mb-8">
          <Link href="/#products" className="hover:text-amber-400 transition-colors">Shop</Link>
          <Link href="/#about" className="hover:text-amber-400 transition-colors">Our Story</Link>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" aria-label="Twitter" className="hover:text-amber-400 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.792 4.644-.56.153-1.156.22-1.778.22-.304 0-.596-.03-.885-.083.618 1.958 2.423 3.382 4.566 3.421-1.618 1.274-3.649 2.029-5.854 2.029-.379 0-.753-.022-1.124-.065 2.094 1.342 4.587 2.123 7.276 2.123 8.729 0 13.501-7.243 13.501-13.501 0-.206-.005-.411-.014-.615.93-.671 1.727-1.511 2.37-2.464z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-amber-400 transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
          </a>
        </div>

        {/* Copyright and Developer Notice */}
        <div className="border-t border-amber-800 pt-8">
          <p className="text-sm">&copy; 2025 Coffee Co. All Rights Reserved.</p>
          {/* THE CHANGE: Added your attribution line here */}
          <p className="text-xs text-amber-400 mt-2">Developed by Peter Oluwatosin</p>
        </div>

      </div>
    </footer>
  );
}

