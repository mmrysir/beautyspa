'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ServiceCard from '@/components/ServiceCard';
import { menuItems } from '@/data/menu';
import { useCart } from '@/context/CartContext';

const WHATSAPP_NUMBER = '255717126282';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Beauty Spa! I would like to book an appointment.')}`;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openCart } = useCart();

  const categories = [
    { id: 'All', label: 'All Treatments' },
    { id: 'Starters', label: 'Massages' },
    { id: 'Facial', label: 'Facials' },
    { id: 'Extras', label: 'Extras & Beauty' }
  ];

  const filteredItems = menuItems.filter(item =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-spa-light pb-16 md:pb-0">
      {/* pb-16 on mobile so sticky bottom bar doesn't overlap content */}
      <Navbar />

      {/* Hero Section — pt-28 accounts for marquee (h-8) + navbar height */}
      <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img
            src="/assets/img/hero.jpeg"
            alt="Spa Background"
            className="w-full h-full object-cover object-center scale-105 contrast-[1.1] saturate-[1.2]"
          />
          {/* Dot overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')] opacity-60" />
          {/* Frosted gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/60 to-spa-light backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center pb-20 md:pb-28">

          {/* Pill Badge */}
          <span className="text-spa-accent uppercase tracking-[0.3em] text-xs font-bold mb-8 flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full border border-spa-accent/20 shadow-sm">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            Escape to Tropical Sanctuary
          </span>

          {/* Two-tone Headline */}
          <h1 className="font-amatic font-bold uppercase tracking-wider leading-tight drop-shadow-sm mb-6">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-spa-dark">Nourish Your Body,</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-spa-accent italic">Rest Your Soul.</span>
          </h1>

          <p className="text-base md:text-lg text-spa-dark/75 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Welcome to Beauty Spa Jambiani — a serene tropical sanctuary where peaceful gardens meet traditional African therapies. Recharge with organic herbal blends and the curative touch of our dedicated therapists.
          </p>

          {/* USP Checkmark Bullets */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {['Warm Spiced Oils', 'Private Wellness Suites', 'Instant WhatsApp Booking'].map((usp) => (
              <span key={usp} className="flex items-center gap-2 text-spa-dark/80 text-sm font-medium">
                <span className="w-5 h-5 rounded-full bg-spa-accent/10 border border-spa-accent/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[12px] text-spa-accent">check</span>
                </span>
                {usp}
              </span>
            ))}
          </div>

          {/* Primary WhatsApp CTA */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="group relative w-full max-w-sm flex items-center justify-center gap-3 px-8 py-4 bg-spa-accent text-white rounded-2xl hover:bg-[#b00f0f] transition-all shadow-[0_0_20px_rgba(206,18,18,0.4)] hover:shadow-[0_0_30px_rgba(206,18,18,0.6)] hover:-translate-y-1 mb-4 font-semibold tracking-wider uppercase text-sm overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 group-hover:animate-bounce">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="relative z-10">Book via WhatsApp</span>
          </a>

          {/* Dual CTA row — hidden on mobile (sticky bar handles it) */}
          <div className="hidden md:flex items-center gap-3 w-full max-w-sm">
            <button
              id="hero-view-cart"
              onClick={openCart}
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 border-2 border-spa-dark/20 text-spa-dark rounded-2xl hover:border-spa-dark hover:bg-spa-dark/5 transition-all font-medium text-sm tracking-wide"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              View Cart
            </button>
            <a
              href="#services"
              id="hero-book-now"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-spa-dark text-white rounded-2xl hover:bg-spa-dark/90 transition-all font-medium text-sm tracking-wide shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 md:px-12 bg-spa-light">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-spa-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Sanctuary</h2>
          <h3 className="font-amatic font-bold uppercase tracking-widest text-5xl md:text-7xl text-spa-dark mb-8">
            Wellness &amp; Holistic Healing
          </h3>
          <p className="text-spa-dark/80 text-lg leading-relaxed max-w-3xl mx-auto mb-16 font-medium">
            We pride ourselves on offering the best wellness and holistic services in Zanzibar. Our highly trained and professional staff are devoted to providing a calming and relaxing experience using the most exquisite products. Find your balance and renew your spirit in our tranquil oasis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-spa-dark/5 hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-spa-accent mb-6 block">spa</span>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-3xl text-spa-dark mb-4">Expert Therapists</h4>
              <p className="text-spa-dark/70 font-light leading-relaxed">With over 15 years of holistic healing experience, our team provides the utmost care for your body and mind.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-spa-dark/5 hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-spa-accent mb-6 block">self_improvement</span>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-3xl text-spa-dark mb-4">Tranquil Oasis</h4>
              <p className="text-spa-dark/70 font-light leading-relaxed">Located easily at the Jambiani Plaza, our environment is designed exclusively for your deep relaxation.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-spa-dark/5 hover:-translate-y-2 transition-transform duration-300">
              <span className="material-symbols-outlined text-5xl text-spa-accent mb-6 block">eco</span>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-3xl text-spa-dark mb-4">Exquisite Products</h4>
              <p className="text-spa-dark/70 font-light leading-relaxed">We use only the finest natural and locally sourced products to nourish your skin and enhance your well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu Section */}
      <section id="services" className="py-24 px-6 md:px-12 bg-white rounded-[3rem] shadow-sm relative z-10 -mt-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-spa-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Our Menu</h2>
            <h3 className="font-amatic font-bold uppercase tracking-widest text-5xl md:text-6xl text-spa-dark mb-6">Curated Treatments</h3>
            <p className="text-spa-dark/80 font-medium">Select from our range of deeply relaxing and rejuvenating treatments designed to restore your natural balance.</p>
          </div>

          {/* Filter Navigation */}
          <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md py-4 -mx-6 px-6 md:-mx-12 md:px-12 flex flex-wrap justify-center gap-3 mb-12 shadow-sm border-b border-spa-dark/5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-spa-dark text-white shadow-md scale-105'
                    : 'bg-white text-spa-dark border border-spa-dark/10 hover:border-spa-accent hover:text-spa-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 transition-all duration-500">
            {filteredItems.map(item => (
              <div key={item.id} className="transition-all duration-500">
                <ServiceCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 px-6 md:px-12 bg-[#FDFBF7]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-spa-accent uppercase tracking-[0.2em] text-sm font-bold mb-4">Guest Experiences</h2>
            <h3 className="font-amatic font-bold uppercase tracking-widest text-5xl md:text-6xl text-spa-dark mb-6">Stories of Serenity</h3>
            <p className="text-spa-dark/80 font-medium max-w-2xl mx-auto">Discover what our guests are saying about their restorative journeys at Beauty Spa Jambiani.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-spa-dark/5 hover:-translate-y-1 transition-all">
              <div className="flex gap-1 text-spa-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <p className="text-spa-dark/70 font-light leading-relaxed mb-8 italic">&quot;Absolutely incredible experience. The hot stone massage was exactly what I needed after a long week of travel. The therapists are true professionals.&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-spa-dark/5 flex items-center justify-center text-spa-dark font-amatic text-2xl font-bold">SJ</div>
                <div>
                  <h4 className="font-bold text-spa-dark text-sm uppercase tracking-wider">Sarah Jenkins</h4>
                  <p className="text-xs text-spa-dark/50 uppercase tracking-widest">London, UK</p>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-spa-dark/5 hover:-translate-y-1 transition-all md:-translate-y-4">
              <div className="flex gap-1 text-spa-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <p className="text-spa-dark/70 font-light leading-relaxed mb-8 italic">&quot;The best spa in Jambiani! My partner and I booked the private wellness suite. The organic products smelled heavenly and left our skin glowing.&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-spa-dark/5 flex items-center justify-center text-spa-dark font-amatic text-2xl font-bold">MB</div>
                <div>
                  <h4 className="font-bold text-spa-dark text-sm uppercase tracking-wider">Marco Bianchi</h4>
                  <p className="text-xs text-spa-dark/50 uppercase tracking-widest">Milan, Italy</p>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-spa-dark/5 hover:-translate-y-1 transition-all">
              <div className="flex gap-1 text-spa-accent mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                ))}
              </div>
              <p className="text-spa-dark/70 font-light leading-relaxed mb-8 italic">&quot;A true hidden gem. I highly recommend the traditional African full body massage. Instant booking via WhatsApp was also super convenient.&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-spa-dark/5 flex items-center justify-center text-spa-dark font-amatic text-2xl font-bold">AK</div>
                <div>
                  <h4 className="font-bold text-spa-dark text-sm uppercase tracking-wider">Aisha Khan</h4>
                  <p className="text-xs text-spa-dark/50 uppercase tracking-widest">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-spa-light overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="text-spa-accent uppercase tracking-[0.2em] text-sm font-semibold mb-4">Gallery</h2>
              <h3 className="font-amatic font-bold uppercase tracking-wider text-4xl md:text-5xl text-spa-dark">Glimpse of Serenity</h3>
            </div>
            <p className="text-spa-dark/60 max-w-sm font-light">Take a visual journey through our peaceful spaces designed entirely for your relaxation.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-12">
          {[1, 6, 7, 8].map((num) => (
            <div key={num} className="aspect-square rounded-2xl overflow-hidden group relative">
              <div className="absolute inset-0 bg-spa-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={`/assets/img/new_photos/photo_${num}.jpeg`}
                alt={`Gallery ${num}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="bg-spa-dark text-spa-light py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
            <div>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-2xl mb-8">Location</h4>
              <p className="font-light text-spa-light/70 leading-relaxed">
                Jambiani Plaza<br />
                Zanzibar, Tanzania
              </p>
            </div>
            <div>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-2xl mb-8">Contact</h4>
              <p className="font-light text-spa-light/70 leading-relaxed">
                +255 717 126 282<br />
                spaplaza2022@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-2xl mb-8">Hours</h4>
              <p className="font-light text-spa-light/70 leading-relaxed">
                Mon - Sat: 9:00 AM - 9:00 PM<br />
                Sunday: Closed
              </p>
            </div>
            <div>
              <h4 className="font-amatic font-bold uppercase tracking-wider text-2xl mb-8">Social</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-spa-light/20 flex items-center justify-center hover:bg-spa-accent hover:border-spa-accent hover:text-white transition-all">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-spa-light/20 flex items-center justify-center hover:bg-spa-accent hover:border-spa-accent hover:text-white transition-all">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.476 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-spa-light/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light text-spa-light/50">
            <p>&copy; {new Date().getFullYear()} mugogoinc. All rights reserved.</p>
            <p>Designed for Serenity</p>
          </div>
        </div>
      </section>
    </main>
  );
}
