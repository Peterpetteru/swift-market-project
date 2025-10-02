import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurStory from '@/components/OurStory';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
// Import our new animation component
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      
      {/* We wrap each section to apply the scroll-in animation */}
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
      
      <CTA />
      <Footer />
    </main>
  );
}

