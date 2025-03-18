import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import CrypticText from '../components/CrypticText';
import StarryBackground from '../components/StarryBackground';
import PageTransition from '../components/PageTransition';
import useScrollAnimation from '../hooks/useScrollAnimation';
import FallingStarLogo from '../assets/falling-star.svg';
import CosmicExperienceSvg from '../assets/cosmic-experience.svg';

const Home = () => {
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.5);
  const gridRef = useRef(null);
  
  // Grid animation with GSAP
  useEffect(() => {
    if (!gridRef.current) return;
    
    const gridItems = gridRef.current.querySelectorAll('.grid-item');
    
    gsap.set(gridItems, { opacity: 0, y: 20 });
    
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top 70%',
      }
    });
    
    timeline.to(gridItems, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Animated background */}
        <StarryBackground />
        
        {/* Hero section */}
        <section className="min-h-screen flex flex-col justify-center px-6 sm:px-12 py-20">
          <div className="max-w-7xl mx-auto w-full space-y-4">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                <CrypticText />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A portfolio of creative work and digital experiences
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <Link 
                to="/projects" 
                className="hoverable group relative inline-flex items-center px-8 py-3 overflow-hidden border border-white rounded-full"
              >
                <span className="absolute left-0 w-0 h-full bg-white transition-all duration-300 group-hover:w-full"></span>
                <span className="relative text-white group-hover:text-black transition-colors duration-300">
                  View My Work
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Intro section */}
        <section ref={introRef} className="py-20 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={introVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="flex items-center">
                  <h2 className="text-3xl sm:text-4xl font-bold">Creating Digital Experience</h2>
                  <img 
                    src={FallingStarLogo} 
                    alt="Falling Star" 
                    className="w-10 h-10 ml-3 animate-pulse"
                  />
                </div>
                <p className="text-gray-300">
                  I design and develop websites and applications with a focus on user experience,
                  animation, and cutting-edge technologies.
                </p>
                <div className="pt-4">
                  <Link 
                    to="/about" 
                    className="hoverable inline-flex items-center text-lg font-medium"
                  >
                    Learn more about me
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="aspect-square relative border border-gray-800 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 opacity-80 relative">
                    {/* This could be an image or animation */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg flex items-center justify-center">
                      <img 
                        src={CosmicExperienceSvg} 
                        alt="Cosmic Experience" 
                        className="w-full h-full"
                      />
                    </div>
                    
                    {/* Add multiple falling stars as decorative elements */}
                    <img 
                      src={FallingStarLogo} 
                      alt="Falling Star" 
                      className="absolute top-10 right-20 w-8 h-8 opacity-70 animate-falling-star"
                    />
                    <img 
                      src={FallingStarLogo} 
                      alt="Falling Star" 
                      className="absolute top-40 left-10 w-6 h-6 opacity-60 animate-falling-star"
                      style={{ animationDelay: "1.5s" }}
                    />
                    <img 
                      src={FallingStarLogo} 
                      alt="Falling Star" 
                      className="absolute bottom-10 right-10 w-5 h-5 opacity-50 animate-falling-star"
                      style={{ animationDelay: "3s" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Grid section */}
        <section ref={gridRef} className="py-20 px-6 sm:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-16 text-center">My Specialties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {['Web Development', 'UI/UX Design', 'Animation', 'Frontend Architecture', 'Performance Optimization', 'Responsive Design'].map((item, index) => (
                <div 
                  key={index} 
                  className="grid-item border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{item}</h3>
                  <p className="text-gray-400">
                  </p>
                </div>
              ))}
            </div>
            
            {/* Programming Languages Section */}
            <div className="grid-item border border-gray-800 rounded-lg p-6 bg-gray-900/30 mb-8">
              <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
              <div className="font-mono text-sm text-gray-300 bg-black/50 p-4 rounded-lg overflow-auto">
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-purple-400">lua</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-blue-400">python</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-cyan-400">cpp</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-green-400">csharp</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-blue-300">c</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-yellow-300">javascript</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-orange-400">html</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-blue-500">css</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-indigo-400">php</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-gray-400">batch</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-blue-400">powershell</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-yellow-500">sql</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-green-300">ahk</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-blue-300">golang</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-2">#</span>
                  <span className="text-orange-500">rust</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section ref={ctaRef} className="py-32 px-6 sm:px-12 relative">
          {/* Content container without any background or border styling */}
          <div className="relative z-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={ctaVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center"
            >
              {/* Decorative element above heading */}
              <div className="flex justify-center mb-2">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                  Let's Create Something Amazing
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              
              <div className="pt-6 flex justify-center">
                <Link 
                  to="/contact" 
                  className="hoverable group relative inline-flex items-center px-8 py-4 text-lg font-medium overflow-hidden rounded-full"
                >
                  {/* Button background with gradient */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                  
                  {/* Hover effect layer */}
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Button text */}
                  <span className="relative text-white flex items-center">
                    Get In Touch
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home; 