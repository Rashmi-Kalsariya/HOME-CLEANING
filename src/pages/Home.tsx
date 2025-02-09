import { motion } from 'framer-motion';
import { ArrowRight, Home as HomeIcon, Sparkles, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';
import { services } from '../data/services';

export function Home() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://shivonic.com/assets/banner/1.png)'
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Experience a Spotless Home<br />With Our Professional Cleaning Services
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl">
                We provide top-notch home cleaning services to ensure your space is always clean and comfortable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Book Now
                </Link>
                <Link
                  to="/about"
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Cleaning Services</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We offer a wide range of cleaning services to meet all your home cleaning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {service.icon === 'Home' && <HomeIcon size={40} />}
                  {service.icon === 'Sparkles' && <Sparkles size={40} />}
                  {service.icon === 'CheckCircle' && <CheckCircle size={40} />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-white dark:bg-dark relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Latest Tips & Tricks</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay updated with our latest cleaning tips and home maintenance tricks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{blog.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{blog.excerpt}</p>
                  <Link
                    to={`/products/${blog.id}`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    Read more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Posts <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}