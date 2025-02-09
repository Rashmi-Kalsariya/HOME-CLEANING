import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "7367989866"; // Your WhatsApp number

    const message = `
      *New Contact Form Submission*%0A
      *Name:* ${formData.name}%0A
      *Email:* ${formData.email}%0A
      ${formData.phone ? `*Phone:* ${formData.phone}%0A` : ""}
      ${formData.subject ? `*Subject:* ${formData.subject}%0A` : ""}
      *Message:*%0A${formData.message}
    `;

    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      sendToWhatsApp();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header Banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://shivonic.com/assets/banner/1.png)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
              Contact Us for Home Cleaning Services
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-display">
              Have questions about our services? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-12 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-6 bg-gray-500/5 dark:bg-black p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark-300 transition-all duration-300 outline-none
                    ${errors.name
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                    }
                  `}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark-300 transition-all duration-300 outline-none
                    ${errors.email
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                    }
                  `}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark-300 transition-all duration-300 outline-none
                    ${errors.phone
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                    }
                  `}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-300 transition-all duration-300 outline-none focus:border-primary-500 dark:focus:border-primary-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-dark-300 transition-all duration-300 outline-none
                    ${errors.message
                      ? 'border-red-500'
                      : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-400'
                    }
                  `}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-black dark:bg-white/90 hover:bg-gray-800 dark:hover:bg-white text-white dark:text-black py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>Send via WhatsApp</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-12 lg:col-span-6 space-y-4"
          >
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Home cleaning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Professional cleaning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Get in Touch Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have questions about our home cleaning services? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="text-primary-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Office Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  U-1/65 Phase-1 Budh Vihar,<br />
                  Delhi - 110086 (INDIA)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-500">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                <p className="text-gray-600 dark:text-gray-300">info@shivonic.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="text-primary-500">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                <p className="text-gray-600 dark:text-gray-300">+91-7503350764</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}