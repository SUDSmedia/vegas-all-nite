import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Us - Vegas All Nite',
  description: 'Learn about Vegas All Nite, your premier VIP concierge and luxury service provider in Las Vegas.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#09070b] text-white">
      {/* Header with navigation */}
      <header className="fixed top-0 w-full bg-white text-black z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-light tracking-wider">VEGAS ALL NITE</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/packages" className="text-sm hover:opacity-70 transition">VIP PACKAGES</Link>
            <Link href="/about" className="text-sm hover:opacity-70 transition">ABOUT US</Link>
            <Link href="/contact" className="text-sm hover:opacity-70 transition">BOOK NOW</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://ext.same-assets.com/3492607784/307711746.jpeg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">ABOUT US</h1>
          <p className="text-xl md:text-2xl text-[#dbcbc3] max-w-3xl mx-auto">
            Your Premier Concierge and VIP Service Provider
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#dbcbc3] text-center">OUR STORY</h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-300">
            <p>
              Founded with a passion for exceptional service and an insider's knowledge of Las Vegas,
              Vegas All Nite has become the premier concierge and VIP service provider in the
              entertainment capital of the world.
            </p>
            <p>
              We understand that every visitor to Las Vegas seeks a unique experience. Whether you're
              celebrating a milestone, seeking adventure, or simply want to experience the city like
              a true insider, our team is dedicated to making it happen.
            </p>
            <p>
              With years of industry connections and unparalleled access to the city's best venues,
              events, and experiences, we've helped thousands of clients create unforgettable memories
              in Las Vegas.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-light mb-16 text-[#dbcbc3] text-center">WHAT WE DO</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 p-8 border border-white/10">
              <h3 className="text-2xl font-light mb-4 text-[#dbcbc3]">VIP Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Skip the lines and enjoy exclusive access to Las Vegas's hottest nightclubs,
                dayclubs, restaurants, and shows with our VIP connections.
              </p>
            </div>
            <div className="bg-black/40 p-8 border border-white/10">
              <h3 className="text-2xl font-light mb-4 text-[#dbcbc3]">Custom Experiences</h3>
              <p className="text-gray-300 leading-relaxed">
                From bachelor parties to corporate events, we design personalized itineraries
                tailored to your preferences and budget.
              </p>
            </div>
            <div className="bg-black/40 p-8 border border-white/10">
              <h3 className="text-2xl font-light mb-4 text-[#dbcbc3]">24/7 Support</h3>
              <p className="text-gray-300 leading-relaxed">
                Our concierge team is available around the clock to ensure your Las Vegas
                experience is seamless and unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-wide">
            READY TO EXPERIENCE LAS VEGAS LIKE NEVER BEFORE?
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all px-8 py-6 text-lg tracking-wider"
            >
              BOOK YOUR EXPERIENCE
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4 border-t border-white/10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-light tracking-wider">VEGAS ALL NITE</div>
          <div className="text-sm text-gray-400">
            © 2025 VEGAS ALL NITE • ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}
