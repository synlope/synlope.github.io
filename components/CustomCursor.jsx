import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [magnetTarget, setMagnetTarget] = useState(null);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleHoverElements = () => {
      const hoverableElements = document.querySelectorAll('a, button, .hoverable');
      
      hoverableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          setIsHovering(true);
          setMagnetTarget(element);
        });
        
        element.addEventListener('mouseleave', () => {
          setIsHovering(false);
          setMagnetTarget(null);
        });
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Initialize hoverable elements when component mounts
    handleHoverElements();
    
    // Re-initialize when DOM might have changed
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (magnetTarget && isHovering) {
      const magnetStrength = 0.3; // Adjust this value for stronger/weaker effect
      const rect = magnetTarget.getBoundingClientRect();
      const targetX = rect.left + rect.width / 2;
      const targetY = rect.top + rect.height / 2;
      
      // Calculate the position with magnetic pull
      const x = position.x + (targetX - position.x) * magnetStrength;
      const y = position.y + (targetY - position.y) * magnetStrength;
      
      setPosition({ x, y });
    }
  }, [position, isHovering, magnetTarget]);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    opacity: isVisible ? 1 : 0,
  };

  return (
    <div 
      className={`cursor-custom ${isHovering ? 'hover' : ''}`} 
      style={cursorStyle}
    />
  );
};

export default CustomCursor; 