import Image from 'next/image';
import Card from '@/components/ui/Card';

const services = [
  {
    title: 'Personal Training',
    description: 'One-on-one personalized training sessions tailored to your specific fitness goals and schedule.',
    image: '/images/personal_training_webp.webp',
    icon: '💪',
  },
  {
    title: 'Online Coaching',
    description: 'Remote training programs with virtual coaching, nutrition guidance, and progress tracking.',
    image: '/images/online_exercise_webp.webp',
    icon: '💻',
  },
  {
    title: 'Middle School Training',
    description: 'Age-appropriate fitness programs for middle school students to build healthy habits early.',
    image: '/images/middle_school1.webp',
    icon: '🏃',
  },
  {
    title: 'Exercise Programs',
    description: 'Customized workout plans designed for all fitness levels, from beginners to advanced athletes.',
    image: '/images/training1.webp',
    icon: '🏋️',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 text-4xl bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
