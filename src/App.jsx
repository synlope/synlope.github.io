import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Import components
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// AnimatePresence wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [cursorDisabled, setCursorDisabled] = useState(false);
  
  // Detect touch devices and disable custom cursor
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 || 
      navigator.msMaxTouchPoints > 0;
      
    setCursorDisabled(isTouchDevice);
  }, []);

  return (
    <Router>
      {!cursorDisabled && <CustomCursor />}
      <Navigation />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
