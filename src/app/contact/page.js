// src/app/contact/page.js

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
import ContactSection from '../../components/ContactSection.js';

export default function ContactPage() {
  return (
    <main className="bg-gray-50">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}