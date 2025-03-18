import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-7xl sm:text-9xl font-bold mb-4"
            animate={{ 
              y: [0, -10, 0],
              textShadow: [
                '0 0 5px rgba(255,255,255,0.1)',
                '0 0 15px rgba(255,255,255,0.3)',
                '0 0 5px rgba(255,255,255,0.1)'
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            404
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 bg-white mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
          
          <h2 className="text-2xl sm:text-3xl font-medium mb-6">
            Page Not Found
          </h2>
          
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            sorry buddy not found :/
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Return Home
            </Link>
          </motion.div>
          
          {/* Decorative stars */}
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-50"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-white rounded-full opacity-50"></div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default NotFound; 