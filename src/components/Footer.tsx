import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4 font-display">Shivonic</h3>
            <p className="text-gray-400">
              Leading manufacturer of premium cleaning solutions since 2012.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-400 mb-4 font-display">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Contact Us', path: '/contact' }
              ].map(link => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-primary-400 mb-4 font-display">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary-400" />
                <span className="text-gray-400">info@shivonic.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary-400" />
                <span className="text-gray-400">+91-7503350764</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={18} className="text-primary-400" />
                <span className="text-gray-400">
                  U-1/65 Phase-1 Budh Vihar,<br />
                  Delhi - 110086 (INDIA)
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-400 mb-4 font-display">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' }
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="text-gray-400 hover:text-primary-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                  aria-label={label}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shivonic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}