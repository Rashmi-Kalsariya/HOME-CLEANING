import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';
import { Layout, Smartphone, Globe, Database, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: '1',
    icon: Layout,
    title: 'Standard Cleaning',
    description: 'Comprehensive standard cleaning services for your home.',
    features: ['Dusting', 'Vacuuming', 'Mopping'],
    image: '/images/IMG-20250131-WA0011.jpg',
    price: '$100+',
    specs: {
      timeline: '2-4 hours',
      team: '1-2 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '2',
    icon: Layout,
    title: 'Deep Cleaning',
    description: 'Thorough deep cleaning services for every corner of your home.',
    features: ['Detailed Cleaning', 'Grout Scrubbing', 'Furniture Moving'],
    image: '/images/IMG-20250131-WA0012.jpg',
    price: '$200+',
    specs: {
      timeline: '4-6 hours',
      team: '2-3 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '3',
    icon: Smartphone,
    title: 'Move-In/Move-Out Cleaning',
    description: 'Specialized cleaning services for moving in or out of your home.',
    features: ['Complete Cleaning', 'Appliance Cleaning', 'Carpet Cleaning'],
    image: '/images/IMG-20250131-WA0013.jpg',
    price: '$150+',
    specs: {
      timeline: '3-5 hours',
      team: '2-3 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '4',
    icon: Smartphone,
    title: 'Post-Construction Cleaning',
    description: 'Cleaning services to remove construction debris and dust.',
    features: ['Dust Removal', 'Debris Cleanup', 'Surface Polishing'],
    image: '/images/IMG-20250131-WA0014.jpg',
    price: '$250+',
    specs: {
      timeline: '4-6 hours',
      team: '2-4 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '5',
    icon: Smartphone,
    title: 'Green Cleaning',
    description: 'Eco-friendly cleaning services using non-toxic products.',
    features: ['Eco-Friendly Products', 'Safe for Pets and Kids', 'Sustainable Methods'],
    image: '/images/IMG-20250131-WA0015.jpg',
    price: '$120+',
    specs: {
      timeline: '2-4 hours',
      team: '1-2 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '6',
    icon: Smartphone,
    title: 'Spring Cleaning',
    description: 'Seasonal cleaning to refresh your home for the new season.',
    features: ['Thorough Dusting', 'Window Washing', 'Closet Organization'],
    image: '/images/IMG-20250131-WA0016.jpg',
    price: '$180+',
    specs: {
      timeline: '3-5 hours',
      team: '2-3 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
  {
    id: '7',
    icon: Smartphone,
    title: 'Holiday Cleaning',
    description: 'Special cleaning services to prepare your home for the holidays.',
    features: ['Decor Cleaning', 'Guest Room Preparation', 'Kitchen Deep Clean'],
    image: '/images/IMG-20250131-WA0017.jpg',
    price: '$200+',
    specs: {
      timeline: '4-6 hours',
      team: '2-3 cleaners',
      support: 'Business hours support',
      maintenance: 'N/A'
    }
  },
];

export function Products() {
  return (
    <div className="bg-white dark:bg-dark">
      <PageBanner
        title="Our Cleaning Services"
        subtitle="Professional Home Cleaning Solutions"
        image="https://shivonic.com/assets/img/footer2.jpg"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{product.price}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-primary-500 dark:text-primary-400">
                      <product.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {product.features.map(feature => (
                      <div
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={`/products/${product.id}`}
                    className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-lg transition-colors font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips & Resources Section */}
      <section className="py-16 bg-gray-50 dark:bg-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tips & Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our collection of guides and best practices to make the most of your cleaning services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Getting Started Guide',
                description: 'Essential tips for making the most of your cleaning services.',
                icon: Layout
              },
              {
                title: 'Best Practices',
                description: 'Effective methods to keep your home clean and tidy.',
                icon: Shield
              },
              {
                title: 'Maintenance Tips',
                description: 'Keep your home in top shape with these maintenance guidelines.',
                icon: Database
              }
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-500 dark:text-primary-400 mb-4">
                  <tip.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}