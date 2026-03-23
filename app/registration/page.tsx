import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';

export default function RegistrationPage() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <section className="relative py-20 bg-berry-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-oswald font-bold uppercase tracking-wider mb-4">
              Register
            </h1>
            <p className="text-xl font-light">
              Start your fitness journey today
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-light">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-oswald font-bold uppercase tracking-wider text-gray-dark mb-6">
                Create Your Account
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Plan *
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none"
                  >
                    <option value="">Choose a plan</option>
                    <option value="starter">Starter - £50/month</option>
                    <option value="professional">Professional - £100/month</option>
                    <option value="elite">Elite - £200/month</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    Fitness Goals *
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none resize-none"
                    placeholder="Describe your fitness goals..."
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Fitness Experience *
                  </label>
                  <textarea
                    id="experience"
                    name="experience"
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berry-red focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your fitness background..."
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 w-4 h-4 text-berry-red border-gray-300 rounded focus:ring-berry-red"
                  />
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the Terms of Service and Privacy Policy *
                  </label>
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Register Now
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
