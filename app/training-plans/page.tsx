import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const plans = [
  {
    name: 'Starter',
    price: '£50/month',
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Custom workout plan',
      'Exercise video library access',
      'Monthly progress check-ins',
      'Email support',
      'Nutrition guidelines',
    ],
    image: '/images/training1.webp',
  },
  {
    name: 'Professional',
    price: '£100/month',
    description: 'Ideal for committed individuals seeking serious results',
    features: [
      'Everything in Starter',
      'Weekly check-ins',
      'Form video analysis',
      'Personalized nutrition plan',
      'Priority support',
      'Workout adjustments',
    ],
    image: '/images/personal_training_webp.webp',
    popular: true,
  },
  {
    name: 'Elite',
    price: '£200/month',
    description: 'Maximum support for achieving your ultimate goals',
    features: [
      'Everything in Professional',
      'Daily support via messaging',
      'Real-time workout feedback',
      'Advanced nutrition coaching',
      'Supplement guidance',
      'Competition preparation',
    ],
    image: '/images/online_exercise_webp.webp',
  },
];

export default function TrainingPlansPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 bg-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              Training Plans
            </h1>
            <p className="text-xl font-light">
              Choose the perfect plan for your fitness goals
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
                  Select Your Plan
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  All plans include personalized programming designed to help you reach your
                  specific fitness goals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      plan.popular ? 'border-2 border-berry-red transform scale-105' : ''
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-berry-red text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                      <Image
                        src={plan.image}
                        alt={plan.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <h3 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-2">
                      {plan.name}
                    </h3>

                    <div className="text-3xl font-bold text-berry-red-dark mb-4">
                      {plan.price}
                    </div>

                    <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-berry-red-dark mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button href="/registration" className="w-full" variant={plan.popular ? 'primary' : 'secondary'}>
                      Choose {plan.name}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us for a free consultation to discuss your goals and find the perfect fit
            </p>
            <Button href="/contact" size="lg" variant="primary">
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
