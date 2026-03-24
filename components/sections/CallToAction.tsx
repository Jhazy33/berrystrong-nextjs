import Button from '@/components/ui/Button';

export default function CallToAction() {
  return (
    <section className="py-40 bg-gradient-to-br from-berry-red-dark via-berry-red to-berry-red-dark text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wider mb-8 drop-shadow-lg">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto font-light drop-shadow-md">
          Take the first step towards a healthier, stronger you. Join Berry Strong today!
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <Button href="/registration" size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            Register Now
          </Button>
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-berry-red border-2 border-white hover:bg-gray-100 hover:border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
