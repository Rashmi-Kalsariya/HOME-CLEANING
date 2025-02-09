import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, FileText, Home, Info, Box, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About Us', icon: Info },
    { path: '/products', label: 'Products', icon: Box },
    { path: '/contact', label: 'Contact', icon: Phone },
    { 
      path: 'https://shivonic.com/shivonic-catalogue.pdf',
      label: 'Brochure',
      icon: FileText,
      external: true
    }
  ];

  const textColorClass = isScrolled 
    ? 'text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400'
    : 'text-white hover:text-primary-200';

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-black/90 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link 
            to="/" 
            className={`text-2xl font-bold font-display ${textColorClass}`}
          >
            Shivonic
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColorClass} transition-colors flex items-center gap-2`}
                >
                  {link.icon && <link.icon size={18} />}
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`${textColorClass} transition-colors flex items-center gap-2`}
                >
                  {link.icon && <link.icon size={18} />}
                  {link.label}
                </Link>
              )
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${textColorClass}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={textColorClass}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map(link => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && <link.icon size={18} />}
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="flex items-center gap-2 px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && <link.icon size={18} />}
                  {link.label}
                </Link>
              )
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}