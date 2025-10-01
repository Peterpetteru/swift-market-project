// src/app/page.js

import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import Products from '../components/Products.js';
import WhyChooseUs from '../components/WhyChooseUs.js';
import OurStory from '../components/OurStory.js';
import Testimonials from '../components/Testimonials.js';
import FAQ from '../components/FAQ.js';
import Newsletter from '../components/Newsletter.js';
import Footer from '../components/Footer.js';
// STEP 1: Import our new animation wrapper
import ScrollAnimation from '../components/ScrollAnimation.js';

export default function Home() {
  return (
    <main>
      <Header />
      {/* STEP 2: Wrap each section component with the ScrollAnimation wrapper */}
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>
      <ScrollAnimation>
        <Products />
      </ScrollAnimation>
      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>
      <ScrollAnimation>
        <OurStory />
      </ScrollAnimation>
      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      <ScrollAnimation>
        <Newsletter />
      </ScrollAnimation>
      <Footer />
    </main>
  );
}