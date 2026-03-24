import Image from 'next/image';
import Card from '@/components/ui/Card';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'Berry Strong completely transformed my fitness journey. The personalized training and nutrition guidance helped me lose 30 pounds and gain confidence I never knew I had!',
    image: '/images/003_webp.webp',
    rating: 5,
  },
  {
    name: 'John D.',
    text: 'The online coaching program is fantastic. I can train from anywhere while still getting professional guidance and support. Highly recommend!',
    image: '/images/coach_portrait1_webp.webp',
    rating: 5,
  },
  {
    name: 'Emma L.',
    text: 'My son has been training with Berry Strong for 6 months and the improvement in his strength, confidence, and overall health is remarkable.',
    image: '/images/008_webp.webp',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-40 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients who transformed their lives with Berry Strong
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h4 className="font-oswald font-bold text-gray-dark uppercase">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-berry-red-dark">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
