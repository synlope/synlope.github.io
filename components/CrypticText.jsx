import { useState, useEffect, useRef } from 'react';

const CrypticText = ({ words = ['data', 'datamodel', 'len', 'syn', 'synlope'], delay = 2 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isGlitching, setIsGlitching] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const typeText = () => {
      const currentWord = words[currentIndex];
      const shouldDelete = isDeleting;
      
      // Set typing speed - faster when deleting
      const speed = shouldDelete ? typingSpeed / 1 : typingSpeed;
      
      // Create glitch effect randomly
      if (Math.random() > 0.9 && !isGlitching) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }

      if (shouldDelete) {
        // Deleting text
        setDisplayText(prev => prev.substring(0, prev.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        // Typing text
        setDisplayText(prev => currentWord.substring(0, prev.length + 1));
        
        if (displayText === currentWord) {
          // Pause at end of word
          setIsDeleting(true);
        }
      }
    };

    intervalRef.current = setInterval(typeText, typingSpeed);
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [currentIndex, displayText, isDeleting, typingSpeed, words, isGlitching]);

  return (
    <span className="inline-block">
      <span className={isGlitching ? 'glitch-text' : ''} data-text={displayText}>
        {displayText}
      </span>
      <span className="animate-blink inline-block w-[2px] h-[1em] ml-1 bg-white"></span>
    </span>
  );
};

export default CrypticText; 