import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';
import { Users, Target, Award } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white dark:bg-dark">
      <PageBanner
        title="About Us"
        subtitle="Your Trusted Home Cleaning Experts"
        image="https://shivonic.com/assets/banner/1.png"
      />

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2010, CleanHome has been dedicated to providing top-notch home cleaning services, ensuring your home is spotless and comfortable.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Our journey began with a simple mission: to make professional cleaning services accessible to everyone. Today, we're proud to have served over 500+ clients, delivering exceptional cleaning solutions tailored to their needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://www.merrymaids.com/images/cleaning-services.jpg"
                alt="Home cleaning team"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-primary-600/10 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50 dark:bg-dark-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                description: 'To provide exceptional home cleaning services that ensure a healthy and comfortable living environment.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every cleaning task, delivering results that exceed expectations.'
              },
              {
                icon: Users,
                title: 'Trust',
                description: 'We build trust with our clients through reliable and consistent cleaning services.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-lg"
              >
                <div className="text-primary-500 dark:text-primary-400 mb-4">
                  <item.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Homes Cleaned' },
              { number: '1000+', label: 'Cleaning Sessions' },
              { number: '50+', label: 'Professional Cleaners' },
              { number: '15+', label: 'Years in Business' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-500 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}