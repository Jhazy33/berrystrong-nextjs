import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-dark text-white py-16 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="text-center md:text-left">
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4 text-lg">
              Berry Strong Fitness
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional fitness training services in Plymouth. Personal training,
              online coaching, and customized exercise programs to help you reach
              your fitness goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3 inline-block text-left">
              <li>
                <Link href="/" className="text-gray-300 hover:text-berry-red-dark hover:translate-x-1 text-sm transition-all duration-300 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-berry-red-dark hover:translate-x-1 text-sm transition-all duration-300 inline-block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-berry-red-dark hover:translate-x-1 text-sm transition-all duration-300 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/training-plans" className="text-gray-300 hover:text-berry-red-dark hover:translate-x-1 text-sm transition-all duration-300 inline-block">
                  Training Plans
                </Link>
              </li>
              <li>
                <Link href="/registration" className="text-gray-300 hover:text-berry-red-dark hover:translate-x-1 text-sm transition-all duration-300 inline-block">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-berry-red-dark font-oswald uppercase tracking-wider mb-4 text-lg">
              Contact
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Plymouth, MA</strong>
              <br />
              <br />
              <a href="mailto:info@berrystrong.net" className="hover:text-berry-red-dark transition-colors duration-300">
                info@berrystrong.net
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Berry Strong Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
