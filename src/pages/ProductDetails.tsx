import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';
import { Star, Check, ArrowRight } from 'lucide-react';

const products = [
  {
    id: '1',
    title: 'Home Cleaning Service',
    description: 'Professional home cleaning services to keep your space spotless.',
    fullDescription: `Our home cleaning service ensures your living space remains clean and hygienic. We use eco-friendly products and follow best practices to deliver exceptional cleaning results.

Our process includes:
- Initial assessment and customized cleaning plan
- Thorough cleaning of all rooms
- Dusting, vacuuming, and mopping
- Kitchen and bathroom cleaning
- Garbage removal and recycling`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/8.jpeg',
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg'
    ],
    features: [
      'Eco-friendly Products',
      'Scheduled Cleanings',
      'Experienced Staff',
      'Flexible Timings',
      'Pet-Friendly',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '1-3 hours',
      team: '2-4 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$100+',
    reviews: [
      {
        author: 'Emma Brown',
        company: 'Homeowner',
        rating: 5,
        comment: 'The cleaning team did an amazing job. My house looks spotless and smells fresh!'
      },
      {
        author: 'Liam Wilson',
        company: 'Apartment Renter',
        rating: 4,
        comment: 'Very professional service. They arrived on time and cleaned every corner of my apartment.'
      }
    ]
  },
  {
    id: '2',
    title: 'Office Cleaning Service',
    description: 'Comprehensive office cleaning services to maintain a productive work environment.',
    fullDescription: `Our office cleaning service ensures a clean and organized workspace for your team. We use high-quality cleaning products and follow strict protocols for a thorough clean.

Our process includes:
- Assessment and customized cleaning plan
- Cleaning of workstations, common areas, and restrooms
- Floor cleaning and carpet vacuuming
- Trash removal and recycling
- Sanitization of high-touch surfaces`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Daily, Weekly, or Monthly Service',
      'High-Quality Products',
      'Trained Professionals',
      'Flexible Scheduling',
      'Disinfection Services',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '2-4 hours',
      team: '3-5 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$150+',
    reviews: [
      {
        author: 'Michael Scott',
        company: 'Dunder Mifflin',
        rating: 5,
        comment: 'Our office has never been cleaner. The team is professional and thorough.'
      },
      {
        author: 'Pam Beesly',
        company: 'Dunder Mifflin',
        rating: 4,
        comment: 'Great service and attention to detail. They even cleaned areas we did not expect.'
      }
    ]
  },
  {
    id: '3',
    title: 'Window Cleaning Service',
    description: 'Sparkling clean windows for a brighter home or office.',
    fullDescription: `Our window cleaning service ensures clear and spotless windows. We use safe and effective cleaning methods to remove dirt, streaks, and smudges.

Our process includes:
- Exterior and interior window cleaning
- Frame and sill cleaning
- Streak-free cleaning products
- Attention to detail and safety`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Streak-Free Finish',
      'Safe Cleaning Methods',
      'Experienced Technicians',
      'Flexible Scheduling',
      'Affordable Pricing',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '1-2 hours',
      team: '1-2 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$80+',
    reviews: [
      {
        author: 'Jane Doe',
        company: 'Homeowner',
        rating: 5,
        comment: 'Excellent window cleaning service. My windows have never looked better.'
      },
      {
        author: 'John Roe',
        company: 'Office Manager',
        rating: 4,
        comment: 'Professional and efficient. They did a great job on our office windows.'
      }
    ]
  },
  {
    id: '4',
    title: 'Carpet Cleaning Service',
    description: 'Deep cleaning for carpets to remove dirt, stains, and allergens.',
    fullDescription: `Our carpet cleaning service provides deep cleaning solutions to keep your carpets fresh and clean. We use advanced equipment and techniques to remove dirt, stains, and allergens.

Our process includes:
- Pre-inspection and spot treatment
- Deep cleaning with hot water extraction
- Stain and odor removal
- Fast drying times`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Deep Cleaning',
      'Stain Removal',
      'Odor Elimination',
      'Quick Drying',
      'Safe for Pets',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '2-3 hours',
      team: '2-3 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$120+',
    reviews: [
      {
        author: 'Alice Green',
        company: 'Homeowner',
        rating: 5,
        comment: 'Our carpets look brand new after the cleaning. Highly recommend this service.'
      },
      {
        author: 'Bob Brown',
        company: 'Office Administrator',
        rating: 4,
        comment: 'The team did a thorough job on our office carpets. Very pleased with the results.'
      }
    ]
  },
  {
    id: '5',
    title: 'Move-In/Move-Out Cleaning Service',
    description: 'Comprehensive cleaning for your move-in or move-out needs.',
    fullDescription: `Our move-in/move-out cleaning service ensures a spotless home for your moving needs. We provide a thorough cleaning to prepare your home for new occupants or to ensure you leave your old home in pristine condition.

Our process includes:
- Deep cleaning of all rooms
- Kitchen and bathroom sanitization
- Trash and debris removal
- Floor cleaning and vacuuming`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpegg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Thorough Cleaning',
      'Flexible Scheduling',
      'Trained Professionals',
      'Affordable Pricing',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '3-5 hours',
      team: '3-4 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$200+',
    reviews: [
      {
        author: 'Chris White',
        company: 'Homeowner',
        rating: 5,
        comment: 'The move-out cleaning service was excellent. The place was spotless, and we got our deposit back.'
      },
      {
        author: 'Dana Black',
        company: 'Tenant',
        rating: 4,
        comment: 'Great service for moving in. The new place was clean and ready for us.'
      }
    ]
  },
  {
    id: '6',
    title: 'Post-Construction Cleaning Service',
    description: 'Detailed cleaning after construction or renovation projects.',
    fullDescription: `Our post-construction cleaning service ensures your space is clean and ready for use after construction or renovation. We remove dust, debris, and construction materials for a pristine finish.

Our process includes:
- Removal of dust and debris
- Cleaning of surfaces and fixtures
- Floor cleaning and vacuuming
- Window and glass cleaning`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Thorough Cleaning',
      'Debris Removal',
      'Experienced Staff',
      'Flexible Scheduling',
      'Affordable Pricing',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '4-6 hours',
      team: '3-5 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$250+',
    reviews: [
      {
        author: 'Eve Gray',
        company: 'Homeowner',
        rating: 5,
        comment: 'The post-construction cleaning was thorough and left our home looking brand new.'
      },
      {
        author: 'Frank Blue',
        company: 'Contractor',
        rating: 4,
        comment: 'Great service. They handled all the post-renovation cleaning efficiently.'
      }
    ]
  },
  {
    id: '7',
    title: 'Upholstery Cleaning Service',
    description: 'Professional cleaning for your furniture and upholstery.',
    fullDescription: `Our upholstery cleaning service keeps your furniture looking fresh and clean. We use specialized techniques to remove stains, dirt, and allergens from your upholstery.

Our process includes:
- Pre-inspection and spot treatment
- Deep cleaning with appropriate methods
- Stain and odor removal
- Safe and gentle cleaning products`,
    image: 'https://shivonic.com/assets/img/footer2.jpg',
    gallery: [
      'https://shivonic.com/assets/products/7.jpeg',
      'https://shivonic.com/assets/products/5.jpeg',
      'https://shivonic.com/assets/products/8.jpeg'
    ],
    features: [
      'Deep Cleaning',
      'Stain Removal',
      'Odor Elimination',
      'Quick Drying',
      'Safe for Pets',
      'Satisfaction Guaranteed'
    ],
    specs: {
      timeline: '1-2 hours',
      team: '1-2 cleaners',
      support: 'Customer support available',
      maintenance: 'Optional recurring service'
    },
    price: '$90+',
    reviews: [
      {
        author: 'Grace Yellow',
        company: 'Homeowner',
        rating: 5,
        comment: 'Our sofa looks brand new after the cleaning. Highly recommend their upholstery cleaning service.'
      },
      {
        author: 'Henry Orange',
        company: 'Office Manager',
        rating: 4,
        comment: 'They did a great job on our office chairs. Very professional and efficient.'
      }
    ]
  }
];


export function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white dark:bg-dark">
      <PageBanner
        title={product.title}
        subtitle="Discover the Perfect Solution for Your Business"
        image={product.image}
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{product.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">{product.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-primary-500">{product.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">Starting price</span>
                </div>
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star
                      key={star}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    ({product.reviews.length} reviews)
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {product.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="rounded-lg shadow-lg object-cover w-full h-48"
                />
              ))}
            </motion.div>
          </div>

          {/* Features & Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-dark-200 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Check size={20} className="text-primary-500" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-dark-200 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Description</h2>
            <div className="prose dark:prose-invert max-w-none">
              {product.fullDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-dark-200 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                          }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{review.comment}</p>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{review.author}</p>
                    <p className="text-gray-500 dark:text-gray-400">{review.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}