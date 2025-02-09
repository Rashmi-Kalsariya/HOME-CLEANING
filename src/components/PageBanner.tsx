import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageBanner({ title, subtitle, image }: PageBannerProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}