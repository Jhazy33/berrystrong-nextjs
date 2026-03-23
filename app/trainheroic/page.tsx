import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function TrainHeroicPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative py-20 bg-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              TrainHeroic
            </h1>
            <p className="text-xl font-light">
              Advanced training platform for serious athletes
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative h-96">
                  <Image
                    src="/images/trainheroic1-scaled.png"
                    alt="TrainHeroic Platform"
                    fill
                    className="object-contain bg-gray-900"
                  />
                </div>

                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-6">
                    What is TrainHeroic?
                  </h2>

                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    TrainHeroic is a premier online training platform that connects athletes with
                    expert coaches. Through our partnership with TrainHeroic, Berry Strong clients
                    get access to professional-grade training programming, exercise video demos,
                    performance tracking, and direct coach communication.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3 flex items-center">
                        <span className="text-2xl mr-2">📱</span>
                        Mobile App Access
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Access your workouts anywhere with the TrainHeroic mobile app for iOS
                        and Android.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3 flex items-center">
                        <span className="text-2xl mr-2">🎥</span>
                        Video Exercise Library
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Detailed video demonstrations for every exercise to ensure proper form
                        and technique.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3 flex items-center">
                        <span className="text-2xl mr-2">📊</span>
                        Performance Tracking
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Track your progress with detailed analytics and performance metrics
                        over time.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3 flex items-center">
                        <span className="text-2xl mr-2">💬</span>
                        Direct Messaging
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Stay connected with your coach through in-app messaging for questions
                        and feedback.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-light rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-oswald font-bold text-gray-dark mb-3">
                      Included with Professional and Elite Plans
                    </h3>
                    <p className="text-gray-600">
                      All Berry Strong Professional and Elite training plan members receive
                      full access to the TrainHeroic platform as part of their membership.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button href="/registration" size="lg" variant="primary">
                      Get Started with TrainHeroic
                    </Button>
                    <Button href="/training-plans" size="lg" variant="secondary">
                      View Training Plans
                    </Button>
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
