'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 bg-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              Contact Us
            </h1>
            <p className="text-xl font-light">
              Get in touch to start your fitness journey
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-6">
                  Send us a message
                </h2>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">✓ Message sent successfully! We&apos;ll get back to you soon.</p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">✗ {errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+1 508 555 0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about your fitness goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📍</div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Location</h3>
                        <p className="text-gray-600">Plymouth, MA</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-2xl mr-4">📧</div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Email</h3>
                        <a
                          href="mailto:info@berrystrong.net"
                          className="text-berry-red-dark hover:text-berry-red transition-colors"
                        >
                          info@berrystrong.net
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="text-2xl mr-4">⏰</div>
                      <div>
                        <h3 className="font-semibold text-gray-dark mb-1">Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 6am - 8pm
                          <br />
                          Saturday: 8am - 2pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-berry-red-dark rounded-lg shadow-lg p-8 text-white text-center">
                  <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider mb-4">
                    Ready to Start?
                  </h2>
                  <p className="mb-6 font-light">
                    Take the first step towards a healthier you today!
                  </p>
                  <Button href="/registration" variant="secondary" size="lg">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
