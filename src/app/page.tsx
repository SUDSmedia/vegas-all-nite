'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Menu, X, Instagram, Facebook } from 'lucide-react';

// Custom Yelp Icon Component
const YelpIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.111 18.226c-.141.969-2.119 3.483-3.029 3.847-.311.124-.611.094-.85-.093-.154-.121-2.119-1.574-2.92-2.194-.121-.094-.209-.209-.209-.399 0-.471.669-3.076.81-3.636.09-.321.309-.491.58-.491.091 0 .219.028.361.089.899.39 3.162 1.368 3.812 1.712.587.311.616.925.445 1.165zm-1.588-9.182c-.4-.4-.9-.4-1.35-.05-.45.35-3.15 2.3-3.9 2.85-.15.1-.25.25-.25.45 0 .2.1.35.25.45.75.55 3.45 2.5 3.9 2.85.45.35.95.35 1.35-.05.5-.5 1.55-2.95 1.75-3.65.1-.35 0-.75-.25-1-.25-.25-.65-.35-1-.25-.35.1-3 .85-3.9 1.05-.2.05-.35 0-.45-.15-.1-.15-.1-.35 0-.5.85-.9 3.5-3.5 3.9-3.9.35-.35.35-.85-.05-1.3zm-8.978-6.44c-.141.311-.174.611-.094.85.121.154 1.574 2.119 2.194 2.92.094.121.209.209.399.209.471 0 3.076-.669 3.636-.81.321-.09.491-.309.491-.58 0-.091-.028-.219-.089-.361-.39-.899-1.368-3.162-1.712-3.812-.311-.587-.925-.616-1.165-.445-.969.141-3.483 2.119-3.847 3.029h.187z"/>
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      title: 'The Ultimate Way to Do Vegas',
      subtitle: 'All Nite, Every Night',
    },
    {
      title: 'Experience Las Vegas Like a True Insider',
      subtitle: '',
    },
    {
      title: 'Vegas All Nite. All Access. All Yours.',
      subtitle: '',
    },
    {
      title: 'From Arrival to Afterparty',
      subtitle: 'We\'ve Got You Covered',
    },
  ];

  const services = [
    {
      title: 'DAYCLUBS & NIGHTCLUBS',
      image: 'https://ext.same-assets.com/3492607784/4245034179.png',
      link: '#',
    },
    {
      title: 'CLUB HOPPER',
      image: 'https://ext.same-assets.com/3492607784/440329304.png',
      link: '#',
    },
    {
      title: 'BACHELOR & BACHELORETTE',
      image: 'https://ext.same-assets.com/3492607784/126471433.png',
      link: '#',
    },
  ];

  const galleryImages = [
    'https://ext.same-assets.com/3492607784/2632311173.webp',
    'https://ext.same-assets.com/3492607784/3135594939.webp',
    'https://ext.same-assets.com/3492607784/1095559274.webp',
    'https://ext.same-assets.com/3492607784/3410357751.webp',
    'https://ext.same-assets.com/3492607784/3534000478.webp',
    'https://ext.same-assets.com/3492607784/3765034797.webp',
    'https://ext.same-assets.com/3492607784/1716992346.webp',
    'https://ext.same-assets.com/3492607784/2109620000.webp',
  ];

  const testimonials = [
    {
      text: 'Vegas All Nite was amazing! They were fast, professional and flexible. We had many last minute updates as we hired them for a celebrity guest and they executed flawlessly. Thank you!',
      author: 'Eileen L.',
    },
    {
      text: 'Omg! I cannot rave about these guys enough!! We reserved a party bus for my Moms 50th in Vegas and they great!!! Great response time! Great with follow up questions! Prompt arrival! Greg was GREEEAAATTT!!!',
      author: 'Syteria L.',
    },
    {
      text: 'Just the best! Quality and quantity, the greatest way to see, experience, and enjoy Vegas! Thank you for such extraordinary service and exemplary care!',
      author: 'Shayna E.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#09070b] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white text-black z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-light tracking-wider">VEGAS ALL NITE</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/packages" className="text-sm hover:opacity-70 transition">VIP PACKAGES</a>
            <a href="/about" className="text-sm hover:opacity-70 transition">ABOUT US</a>
            <a href="/contact" className="text-sm hover:opacity-70 transition">BOOK NOW</a>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://www.instagram.com/vegasallnite/" className="hover:opacity-70 transition">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/vegasallnite/" className="hover:opacity-70 transition">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com/vegasallnite" className="hover:opacity-70 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g45963-d14969343-Reviews-VEGAS_ALL_NITE-Las_Vegas_Nevada.html" className="hover:opacity-70 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </a>
            <a href="https://www.yelp.com/biz/vegas-all-nite-las-vegas" className="hover:opacity-70 transition">
              <YelpIcon size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="/packages" className="text-sm hover:opacity-70 transition">VIP PACKAGES</a>
              <a href="/about" className="text-sm hover:opacity-70 transition">ABOUT US</a>
              <a href="/contact" className="text-sm hover:opacity-70 transition">BOOK NOW</a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/vegasallnite/" className="hover:opacity-70 transition">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/vegasallnite/" className="hover:opacity-70 transition">
                  <Facebook size={20} />
                </a>
                <a href="https://www.yelp.com/biz/vegas-all-nite-las-vegas" className="hover:opacity-70 transition">
                  <YelpIcon size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://ext.same-assets.com/3492607784/1122231428.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <img
            src="https://ext.same-assets.com/3492607784/544825447.jpeg"
            alt="Vegas All Nite Logo"
            className="mx-auto mb-8 w-56 md:w-64 h-auto drop-shadow-2xl"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-12 tracking-wide drop-shadow-lg">
            EXPERIENCE LAS VEGAS LIKE A TRUE INSIDER
          </h1>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all px-8 py-6 text-lg tracking-wider"
          >
            BOOK YOUR EXPERIENCE
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-widest mb-4">VEGAS ALL NITE</h2>
            <p className="text-xl text-[#dbcbc3] tracking-wide">PREMIER CONCIERGE AND VIP SERVICE PROVIDER</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group relative overflow-hidden border-2 border-white/20 hover:border-white/60 transition-all"
              >
                <div className="aspect-square relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-light tracking-widest text-center">{service.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Services Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/3492607784/885553744.jpeg"
                alt="Welcome to Las Vegas Sign"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-[#dbcbc3]">LUXURY TAILORED SERVICES</h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-300">
                Whether you're an everyday visitor or a discerning client seeking luxury experiences,
                we specialize in curating personalized services for individuals and their guests.
                From customized itineraries to tailored experiences, we ensure your Las Vegas visit
                is nothing short of exceptional.
              </p>
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all"
              >
                LEARN MORE ABOUT US
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all"
            >
              FULL GALLERY
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-12 text-[#dbcbc3]">
                UNPARALLELED SERVICE AND EXPERTISE
              </h2>
              <div className="relative min-h-[300px]">
                <div className="space-y-8">
                  <p className="text-lg leading-relaxed italic text-gray-300">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <p className="text-xl font-light">{testimonials[currentTestimonial].author}</p>
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                    className="hover:opacity-70 transition"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                    className="hover:opacity-70 transition"
                  >
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <a href="https://www.tripadvisor.com/Attraction_Review-g45963-d14969343-Reviews-VEGAS_ALL_NITE-Las_Vegas_Nevada.html" className="hover:opacity-70 transition">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                </a>
                <a href="https://www.yelp.com/biz/vegas-all-nite-las-vegas" className="hover:opacity-70 transition">
                  <YelpIcon size={32} />
                </a>
              </div>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/3492607784/4086784111.jpeg"
                alt="Luxury Limo Interior"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://ext.same-assets.com/3492607784/307711746.jpeg')` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
            GET THE VIP EXPERIENCE WITH VEGAS ALL NITE
          </h2>
          <Button
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all px-8 py-6 text-lg"
          >
            BOOK YOUR EXPERIENCE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-light tracking-wider">VEGAS ALL NITE</div>
          <div className="text-sm text-gray-400">
            © 2025 VEGAS ALL NITE • ALL RIGHTS RESERVED. SITE BY WWW.SKC.AGENCY
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/vegasallnite/" className="hover:opacity-70 transition">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/vegasallnite/" className="hover:opacity-70 transition">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/vegasallnite" className="hover:opacity-70 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.tripadvisor.com/Attraction_Review-g45963-d14969343-Reviews-VEGAS_ALL_NITE-Las_Vegas_Nevada.html" className="hover:opacity-70 transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
            </a>
            <a href="https://www.yelp.com/biz/vegas-all-nite-las-vegas" className="hover:opacity-70 transition">
              <YelpIcon size={24} />
            </a>
          </div>
        </div>
      </footer>

      {/* Accessibility Button */}
      <button
        className="fixed bottom-8 right-8 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition z-50"
        aria-label="Accessibility Options"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM21 9h-6V7h-2v2h-2V7h-2v2H3v2h6v10h2V11h2v10h2V11h6V9z"/>
        </svg>
      </button>
    </div>
  );
}
