import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-berry-red to-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              About Berry Strong
            </h1>
            <p className="text-xl font-light">
              Professional Fitness Training in Plymouth
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <Image
                    src="/images/coach_portrait1_webp.webp"
                    alt="Berry Strong Coach"
                    width={400}
                    height={500}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-6">
                    Our Story
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Berry Strong is dedicated to helping individuals of all ages and fitness
                    levels achieve their health and wellness goals. With years of experience
                    in personal training and coaching, we provide personalized programs
                    that deliver real results.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our approach combines expert knowledge of exercise science, nutrition
                    guidance, and motivational support to create a comprehensive fitness
                    experience tailored to each client&apos;s unique needs.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you&apos;re looking to lose weight, build muscle, improve athletic
                    performance, or simply adopt a healthier lifestyle, Berry Strong is
                    here to guide you every step of the way.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-8 text-center">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-5xl mb-4">💪</div>
                    <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3">
                      Strength
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Building physical and mental strength through proven training methods
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">🎯</div>
                    <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3">
                      Dedication
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Committed to your success with personalized attention and support
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-4">⭐</div>
                    <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3">
                      Excellence
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Delivering the highest quality training programs and coaching
                    </p>
                  </div>
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
