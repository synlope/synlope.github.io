import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Projects = () => {
  const containerRef = useRef(null);
  
  // Animation for background elements
  useEffect(() => {
    if (!containerRef.current) return;
    
    const elements = containerRef.current.querySelectorAll('.animate-element');
    
    gsap.fromTo(elements,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      }
    );
    
    return () => {
      // Clean up
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-20">
        {/* Header section */}
        <section className="px-6 sm:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Projects
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-white"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </section>
        
        {/* Coming Soon content */}
        <section className="px-6 sm:px-12 py-16" ref={containerRef}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="glitch-text" data-text="Under Construction">Under Construction</span>
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm currently working on amazing projects that will be showcased here soon. 
                Check back later to see my portfolio in action.
              </motion.p>
            </div>
            
            {/* Visual elements */}
            <div className="relative h-80 sm:h-96 border border-gray-800 rounded-lg overflow-hidden bg-gray-900/30">
              {/* Grid lines */}
              <div className="absolute inset-0 grid grid-cols-6 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-r border-white/10 animate-element"></div>
                ))}
              </div>
              <div className="absolute inset-0 grid grid-rows-6 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="border-b border-white/10 animate-element"></div>
                ))}
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center animate-element">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                        className="w-10 h-10 border-2 border-t-0 border-white rounded-full"
                      />
                    </div>
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-white mx-4 animate-element" />
                    <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center animate-element">
                      <motion.div
                        animate={{ 
                          rotate: -360,
                        }}
                        transition={{ 
                          duration: 12, 
                          repeat: Infinity,
                          ease: "linear" 
                        }}
                        className="w-10 h-10 border-2 border-r-0 border-white rounded-full"
                      />
                    </div>
                  </div>
                  
                  <motion.p 
                    className="font-mono text-lg animate-element"
                    animate={{ 
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    // Projects loading...
                  </motion.p>
                </motion.div>
              </div>
              
              {/* Corners */}
              <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-white animate-element" />
              <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-white animate-element" />
              <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-white animate-element" />
              <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-white animate-element" />
            </div>
            
            {/* Call to action */}
            <div className="mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-gray-300 mb-8">
                  Want to discuss a potential project or collaboration?
                </p>
                <Link 
                  to="/contact" 
                  className="hoverable inline-flex items-center px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Projects; 