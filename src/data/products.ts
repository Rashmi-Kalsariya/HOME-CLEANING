import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    title: 'Dr. Clean Victor Mop',
    description: 'Premium quality cotton mop with durable handle and excellent absorption',
    fullDescription: `The Dr. Clean Victor Mop is designed for superior cleaning performance. Features include:
    - High-quality cotton material
    - Durable handle with comfortable grip
    - Excellent water absorption
    - Easy to wash and maintain
    - Perfect for all floor types`,
    image: 'https://www.shivonic.com/assets/products/2.jpeg', // Replace with actual image URL
    price: '₹199',
    features: [
      'Premium Cotton Material',
      'Ergonomic Handle Design',
      'Superior Absorption',
      'Easy to Clean',
      'Durable Construction'
    ],
    specs: {
      material: 'Premium Cotton',
      handleLength: '150cm',
      weight: '350g',
      warranty: '6 months'
    }
  },
  {
    id: '2',
    title: 'Dr. Clean Premium Cotton Mop',
    description: 'Professional-grade cotton mop for superior cleaning performance',
    fullDescription: `The Dr. Clean Premium Cotton Mop offers professional cleaning results. Key features include:
    - Premium cotton strands for better absorption
    - Professional-grade handle
    - Enhanced durability
    - Perfect for commercial and residential use
    - Easy maintenance design`,
    image: 'https://www.shivonic.com/assets/products/2.jpeg', // Replace with actual image URL
    price: '₹249',
    features: [
      'Professional Grade Cotton',
      'Heavy-Duty Handle',
      'Maximum Absorption',
      'Commercial Quality',
      'Long-Lasting Performance'
    ],
    specs: {
      material: 'Premium Grade Cotton',
      handleLength: '160cm',
      weight: '400g',
      warranty: '12 months'
    }
  },
  {
    id: '3',
    title: 'Perfect Cotton Mop',
    description: 'High-performance cotton mop with expert cleaning capabilities',
    fullDescription: `The Perfect Cotton Mop delivers exceptional cleaning results with its advanced features:
    - High-density cotton fibers
    - Reinforced handle connection
    - Optimal moisture retention
    - Suitable for all surfaces
    - Easy-grip design`,
    image: 'https://www.shivonic.com/assets/products/2.jpeg', // Replace with actual image URL
    price: '₹299',
    features: [
      'High-Density Cotton',
      'Reinforced Construction',
      'Optimal Performance',
      'Universal Surface Use',
      'Ergonomic Design'
    ],
    specs: {
      material: 'High-Density Cotton',
      handleLength: '155cm',
      weight: '380g',
      warranty: '12 months'
    }
  }
];