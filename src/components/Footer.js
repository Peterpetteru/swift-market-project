// src/components/Footer.js

function Footer() {
  return (
    <footer className="bg-amber-950 text-amber-50 py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* About Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Coffee Co.</h3>
          <p className="text-amber-200 text-sm">
            Bringing you the finest artisan coffee, sourced sustainably from around the globe.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-amber-400">About</a></li>
            <li><a href="#products" className="hover:text-amber-400">Shop</a></li>
            <li><a href="#faq" className="hover:text-amber-400">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-amber-200 text-sm">support@coffeeco.com</p>
          <p className="text-amber-200 text-sm">+234 123 456 7890</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.792 4.644-.56.153-1.156.22-1.778.22-.304 0-.596-.03-.885-.083.618 1.958 2.423 3.382 4.566 3.421-1.618 1.274-3.649 2.029-5.854 2.029-.379 0-.753-.022-1.124-.065 2.094 1.342 4.587 2.123 7.276 2.123 8.729 0 13.501-7.243 13.501-13.501 0-.206-.005-.411-.014-.615.93-.671 1.727-1.511 2.37-2.464z" /></svg>
            </a>
            <a href="#" className="hover:text-amber-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-amber-800 mt-8 pt-6">
        <p className="text-amber-200 text-sm">&copy; 2025 Coffee Co. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;