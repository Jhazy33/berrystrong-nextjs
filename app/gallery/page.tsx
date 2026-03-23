import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

const images = [
  { src: '/images/working_out1_webp.webp', alt: 'Training session' },
  { src: '/images/personal_training_webp.webp', alt: 'Personal training' },
  { src: '/images/online_exercise_webp.webp', alt: 'Online coaching' },
  { src: '/images/middle_school1.webp', alt: 'Youth training' },
  { src: '/images/training1.webp', alt: 'Workout routine' },
  { src: '/images/coach_help_webp.webp', alt: 'Coaching session' },
  { src: '/images/001_webp.webp', alt: 'Fitness training' },
  { src: '/images/002_webp.webp', alt: 'Exercise demo' },
  { src: '/images/004_webp.webp', alt: 'Strength training' },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative py-20 bg-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              Gallery
            </h1>
            <p className="text-xl font-light">
              See our training programs in action
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg aspect-square"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg font-oswald font-semibold uppercase tracking-wider">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-16 text-center">
              <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our training programs and become part of our success stories.
              </p>
              <a
                href="/registration"
                className="inline-block px-8 py-3 bg-berry-red text-white font-oswald font-bold uppercase rounded-full hover:bg-berry-red-dark transition-colors"
              >
                Register Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
