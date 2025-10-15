import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'VIP Packages - Vegas All Nite',
  description: 'Explore our exclusive VIP packages for nightclubs, dayclubs, bachelor parties, and more.',
};

export default function PackagesPage() {
  const packages = [
    {
      title: 'NIGHTCLUB VIP',
      price: 'From $500',
      image: 'https://ext.same-assets.com/3492607784/4245034179.png',
      features: [
        'Skip-the-line entry',
        'VIP table reservation',
        'Bottle service',
        'Personal host',
        'Premium seating',
      ],
    },
    {
      title: 'DAYCLUB EXPERIENCE',
      price: 'From $400',
      image: 'https://ext.same-assets.com/3492607784/494072187.webp',
      features: [
        'Pool cabana access',
        'Bottle service',
        'VIP entry',
        'Complimentary amenities',
        'Dedicated server',
      ],
    },
    {
      title: 'CLUB HOPPER',
      price: 'From $750',
      image: 'https://ext.same-assets.com/3492607784/440329304.png',
      features: [
        'Multiple venue access',
        'VIP transportation',
        'Skip-the-line at 3+ clubs',
        'Bottle service options',
        'All-night concierge',
      ],
    },
    {
      title: 'BACHELOR PARTY',
      price: 'From $1,500',
      image: 'https://ext.same-assets.com/3492607784/126471433.png',
      features: [
        'Custom itinerary',
        'Multi-venue access',
        'Luxury transportation',
        'Group coordination',
        'Bottle service packages',
        'Special experiences',
      ],
    },
    {
      title: 'BACHELORETTE PARTY',
      price: 'From $1,500',
      image: 'https://ext.same-assets.com/3492607784/1716992346.webp',
      features: [
        'Personalized experience',
        'Spa & pool access',
        'Nightclub VIP access',
        'Private transportation',
        'Special celebrations',
        'Professional photos',
      ],
    },
    {
      title: 'ULTIMATE VIP',
      price: 'Custom Pricing',
      image: 'https://ext.same-assets.com/3492607784/4086784111.jpeg',
      features: [
        'Fully customized package',
        'Premium accommodations',
        'Private jet options',
        'Celebrity meet & greets',
        'Exclusive experiences',
        '24/7 concierge service',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#09070b] text-white">
      {/* Header */}
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

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://ext.same-assets.com/3492607784/1122231428.jpeg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">VIP PACKAGES</h1>
          <p className="text-xl md:text-2xl text-[#dbcbc3] max-w-3xl mx-auto">
            Exclusive Access to Las Vegas's Premier Venues
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-black border border-white/10 overflow-hidden group hover:border-white/30 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light mb-2 text-[#dbcbc3]">{pkg.title}</h3>
                  <p className="text-xl mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#dbcbc3] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all"
                    >
                      BOOK NOW
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Package CTA */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-6">NEED SOMETHING CUSTOM?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us create a personalized package tailored to your exact needs and budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all px-8 py-6 text-lg tracking-wider"
            >
              REQUEST CUSTOM PACKAGE
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
