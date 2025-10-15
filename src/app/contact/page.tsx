'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  guests: z.string().min(1, 'Please select number of guests'),
  date: z.string().min(1, 'Please select a date'),
  packageType: z.string().min(1, 'Please select a package'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://ext.same-assets.com/3492607784/307711746.jpeg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">BOOK NOW</h1>
          <p className="text-xl md:text-2xl text-[#dbcbc3] max-w-3xl mx-auto">
            Let's Create Your Perfect Vegas Experience
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-light mb-6 text-[#dbcbc3]">GET IN TOUCH</h2>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-light mb-2">Phone</h3>
                  <p className="text-lg">+1 (702) 555-NITE</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">Email</h3>
                  <p className="text-lg">info@vegasallnite.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">Hours</h3>
                  <p className="text-lg">24/7 Concierge Service</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">Location</h3>
                  <p className="text-lg">Las Vegas, Nevada</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-light mb-4">What to Expect</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#dbcbc3] mt-1">•</span>
                    <span>Response within 2-4 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#dbcbc3] mt-1">•</span>
                    <span>Personalized package recommendation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#dbcbc3] mt-1">•</span>
                    <span>Transparent pricing quote</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#dbcbc3] mt-1">•</span>
                    <span>Dedicated concierge assignment</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Full Name *</label>
                  <input
                    {...register('name')}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">Email *</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">Phone *</label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Number of Guests *</label>
                    <select
                      {...register('guests')}
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="1-2">1-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-10">6-10</option>
                      <option value="10+">10+</option>
                    </select>
                    {errors.guests && (
                      <p className="mt-1 text-sm text-red-400">{errors.guests.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Preferred Date *</label>
                    <input
                      {...register('date')}
                      type="date"
                      className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                    />
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-400">{errors.date.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">Package Type *</label>
                  <select
                    {...register('packageType')}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors"
                  >
                    <option value="">Select a package</option>
                    <option value="nightclub">Nightclub VIP</option>
                    <option value="dayclub">Dayclub Experience</option>
                    <option value="club-hopper">Club Hopper</option>
                    <option value="bachelor">Bachelor Party</option>
                    <option value="bachelorette">Bachelorette Party</option>
                    <option value="custom">Custom Package</option>
                  </select>
                  {errors.packageType && (
                    <p className="mt-1 text-sm text-red-400">{errors.packageType.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-300">Additional Details *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-white/20 text-white focus:border-white/60 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your ideal Vegas experience..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-900/30 border border-green-500/50 text-green-200">
                    Thank you! We'll be in touch within 2-4 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-900/30 border border-red-500/50 text-red-200">
                    Something went wrong. Please try again or call us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all py-6 text-lg tracking-wider"
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT BOOKING REQUEST'}
                </Button>
              </form>
            </div>
          </div>
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
