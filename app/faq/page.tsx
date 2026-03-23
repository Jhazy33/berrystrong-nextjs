import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const faqs = [
  {
    question: 'What is Berry Strong?',
    answer: 'Berry Strong is a professional fitness training service based in Plymouth, offering personalized training programs, online coaching, and nutrition guidance to help clients achieve their fitness goals.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is easy! Simply contact us through our contact form or register directly on our website. We\'ll schedule a free consultation to discuss your goals and recommend the best training plan for you.',
  },
  {
    question: 'What training plans do you offer?',
    answer: 'We offer three comprehensive training plans: Starter (£50/month), Professional (£100/month), and Elite (£200/month). Each plan is designed to provide different levels of support based on your needs and budget.',
  },
  {
    question: 'Do you offer online coaching?',
    answer: 'Yes! We provide comprehensive online coaching that includes personalized workout plans, video exercise libraries, form analysis via video, regular check-ins, and ongoing support through messaging.',
  },
  {
    question: 'Can middle school students participate?',
    answer: 'Absolutely! We offer specialized training programs for middle school students. These age-appropriate programs focus on building healthy exercise habits, proper form, and foundational strength in a safe and supportive environment.',
  },
  {
    question: 'How often will I have check-ins?',
    answer: 'Check-in frequency depends on your plan. Starter includes monthly check-ins, Professional includes weekly check-ins, and Elite includes daily support. All check-ins include progress reviews and program adjustments.',
  },
  {
    question: 'Do you provide nutrition guidance?',
    answer: 'Yes! All plans include nutrition guidance. The Professional and Elite plans include personalized nutrition plans tailored to your goals, dietary preferences, and lifestyle.',
  },
  {
    question: 'What equipment do I need?',
    answer: 'Equipment requirements vary based on your program. We can design programs for gym access, home workouts with basic equipment, or bodyweight-only routines. We\'ll work with what you have available.',
  },
  {
    question: 'Can I cancel or change my plan?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. We require 30 days\' notice for cancellations. Contact us directly to make any changes to your plan.',
  },
  {
    question: 'Do you offer a free consultation?',
    answer: 'Yes! We offer a free initial consultation to discuss your goals, assess your fitness level, and recommend the best plan for your needs. Contact us to schedule.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative py-20 bg-gradient-to-br from-berry-red to-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl font-light">
              Find answers to common questions about our services
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-lg shadow-lg group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-oswald font-semibold text-gray-dark uppercase tracking-wider">
                      {faq.question}
                    </h3>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Can\'t find the answer you\'re looking for? Please reach out to our team directly.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-berry-red text-white font-oswald font-bold uppercase rounded-full hover:bg-berry-red-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
