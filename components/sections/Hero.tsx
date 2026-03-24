import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-dark text-white pt-[86px] pb-24">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/working_out1_webp.webp"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-dark/80 via-gray-dark/70 to-gray-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-wider mb-6 italic drop-shadow-2xl">
            Transform Your Body
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-lg">
            Professional Fitness Training in Plymouth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/contact" size="lg" variant="primary">
              Get Started
            </Button>
            <Button href="/about" size="lg" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white opacity-70"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
