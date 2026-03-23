import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4">
              Berry Strong Fitness
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional fitness training services in Plymouth. Personal training,
              online coaching, and customized exercise programs to help you reach
              your fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/training-plans" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Training Plans
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4">
              Contact
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>Plymouth, UK</strong>
              <br />
              <a href="mailto:info@berrystrong.net" className="hover:text-white transition-colors">
                info@berrystrong.net
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Berry Strong Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
