import Button from '@/components/ui/Button';

export default function CallToAction() {
  return (
    <section className="py-32 bg-berry-red-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wider mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto font-light">
          Take the first step towards a healthier, stronger you. Join Berry Strong today!
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button href="/registration" size="lg" variant="secondary">
            Register Now
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-berry-red border-2 border-white hover:bg-gray-100 hover:border-gray-100"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
