import { motion } from 'framer-motion';

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="relative">
        {/* Modern Water Droplet Animation with Enhanced Ripple Effect */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full shadow-lg"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-4 h-4 bg-gradient-to-r from-white to-gray-300 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 shadow-md"
              animate={{
                y: [0, -16, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          {/* Enhanced Ripple Effects */}
          <motion.div
            className="absolute w-16 h-16 border-2 border-primary-400 rounded-full"
            animate={{
              scale: [0.9, 1.2, 0.9],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-20 h-20 border-2 border-primary-600 rounded-full"
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 font-medium text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}