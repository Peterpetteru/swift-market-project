'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

// Make sure you have images like 'background1.jpeg' in your /public folder
const slides = [
  { 
    bgImage: '/background1.jpeg',
    headline: 'Discover Your Perfect Roast',
    subheadline: 'Experience artisan coffee, sustainably sourced and freshly roasted.'
  },
  { 
    bgImage: '/background2.jpeg',
    headline: 'The Art of the Bean',
    subheadline: 'From farm to cup, every step is a testament to quality.'
  },
  { 
    bgImage: '/backgroud3.jpeg',
    headline: 'Brew Like a Pro',
    subheadline: 'Master the craft with our expert guides and premium equipment.'
  },
];

export default function Hero() {
  return (
    <section className="h-[70vh] md:h-[90vh] w-full">
      <Swiper 
        modules={[Autoplay, Pagination, EffectFade]} 
        loop={true}
        effect={'fade'} // This tells the slider to use the fade effect
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        pagination={{ clickable: true }} 
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="w-full h-full flex flex-col items-center justify-center bg-black/50 text-white text-center p-4">
                <h1 className="text-4xl md:text-7xl font-bold font-display tracking-tight">{slide.headline}</h1>
                <p className="mt-4 text-lg max-w-2xl">{slide.subheadline}</p>
                <a href="#products" className="mt-8 bg-amber-900 text-amber-50 font-bold py-3 px-8 rounded-full hover:bg-amber-800 transition-colors">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

