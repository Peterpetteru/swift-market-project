'use client'; 

import { useState } from 'react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form Submitted:', { name, email, message });
    setIsSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Get In Touch</h1>
          {/* THE FIX: Replaced ' with &apos; to fix the error */}
          <p className="text-gray-600 mt-2">We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you as soon as possible.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 p-8 rounded-lg shadow-md">
          <div className="text-gray-700">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <p className="mb-2"><strong>Email:</strong> support@coffeeco.com</p>
            <p className="mb-2"><strong>Phone:</strong> +234 123 456 7890</p>
            <p><strong>Address:</strong> 123 Coffee Lane, Ikeja, Lagos, Nigeria</p>
          </div>

          <div>
            {isSubmitted ? (
              <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full bg-amber-900 text-white font-bold py-3 px-6 rounded-full hover:bg-amber-800 transition-colors duration-300 shadow-lg">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

