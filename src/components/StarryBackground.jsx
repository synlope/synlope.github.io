import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let stars = [];
    let nebulae = [];
    let shootingStars = []; // Array to track multiple shooting stars
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateBackground();
    };

    // Generate the complete background
    const generateBackground = () => {
      generateStars();
      generateNebulae();
    };

    // Generate stars with color variations
    const generateStars = () => {
      stars = [];
      // More stars than before
      const starCount = Math.floor((canvas.width * canvas.height) / 4000);
      
      // Star colors: white, blue-ish, yellow-ish, red-ish
      const starColors = [
        { r: 255, g: 255, b: 255 }, // white
        { r: 220, g: 240, b: 255 }, // blue-white
        { r: 255, g: 240, b: 220 }, // yellow-white
        { r: 255, g: 220, b: 220 }  // red-white
      ];
      
      for (let i = 0; i < starCount; i++) {
        const colorIndex = Math.floor(Math.random() * starColors.length);
        const color = starColors[colorIndex];
        const size = Math.random();
        // Create larger stars occasionally
        const radius = size > 0.98 ? Math.random() * 2 + 1.5 : size > 0.95 ? Math.random() * 1.5 + 0.5 : Math.random() * 1.2;
        
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          color: color,
          alpha: Math.random() * 0.5 + 0.5,
          alphaChange: Math.random() * 0.005 + 0.002,
          increasing: Math.random() > 0.5,
          twinkleSpeed: Math.random() * 0.01 + 0.005
        });
      }
    };

    // Generate nebula clouds
    const generateNebulae = () => {
      nebulae = [];
      const nebulaCount = 3 + Math.floor(Math.random() * 3); // 3-5 nebulae
      
      // Nebula colors: purple, blue, teal, pink
      const nebulaColors = [
        { r: 120, g: 70, b: 180 },  // purple
        { r: 70, g: 100, b: 180 },  // blue
        { r: 70, g: 160, b: 180 },  // teal
        { r: 180, g: 70, b: 150 }   // pink
      ];
      
      for (let i = 0; i < nebulaCount; i++) {
        const colorIndex = Math.floor(Math.random() * nebulaColors.length);
        const color = nebulaColors[colorIndex];
        
        nebulae.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 300 + 200,
          color: color,
          alpha: Math.random() * 0.05 + 0.02, // Very subtle
          rotation: Math.random() * Math.PI,
          drift: {
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2
          }
        });
      }
    };

    // Draw cosmic background gradient
    const drawCosmicBackground = () => {
      // Create a gradient from dark blue to black
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(5, 15, 40, 1)');
      gradient.addColorStop(0.5, 'rgba(10, 10, 25, 1)');
      gradient.addColorStop(1, 'rgba(0, 0, 10, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Draw nebula cloud
    const drawNebula = (nebula) => {
      // Update position with drift
      nebula.x += nebula.drift.x;
      nebula.y += nebula.drift.y;
      
      // Wrap around if off-screen
      if (nebula.x < -nebula.radius) nebula.x = canvas.width + nebula.radius;
      if (nebula.x > canvas.width + nebula.radius) nebula.x = -nebula.radius;
      if (nebula.y < -nebula.radius) nebula.y = canvas.height + nebula.radius;
      if (nebula.y > canvas.height + nebula.radius) nebula.y = -nebula.radius;
      
      // Draw cloud-like nebula
      const gradient = ctx.createRadialGradient(
        nebula.x, nebula.y, 0,
        nebula.x, nebula.y, nebula.radius
      );
      
      gradient.addColorStop(0, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, ${nebula.alpha})`);
      gradient.addColorStop(0.5, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, ${nebula.alpha * 0.6})`);
      gradient.addColorStop(1, `rgba(${nebula.color.r}, ${nebula.color.g}, ${nebula.color.b}, 0)`);
      
      ctx.save();
      ctx.translate(nebula.x, nebula.y);
      ctx.rotate(nebula.rotation);
      ctx.translate(-nebula.x, -nebula.y);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(nebula.x, nebula.y, nebula.radius, nebula.radius * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    // Render animation frame
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw cosmic background
      drawCosmicBackground();
      
      // Draw nebulae
      nebulae.forEach(drawNebula);
      
      // Draw stars with enhanced rendering
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Draw with color
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.alpha})`;
        ctx.fill();
        
        // Add glow for larger stars
        if (star.radius > 1) {
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.radius * 3
          );
          glow.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.3)`);
          glow.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`);
          
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Enhanced twinkle effect
        if (star.increasing) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha >= 1) {
            star.increasing = false;
          }
        } else {
          star.alpha -= star.twinkleSpeed;
          if (star.alpha <= 0.3) {
            star.increasing = true;
          }
        }
      });
      
      // Add occasional shooting star
      if (Math.random() < 0.015 && shootingStars.length < 3) { // Increased frequency but cap total number
        createShootingStar();
      }
      
      // Render all active shooting stars
      shootingStars.forEach((shootingStar, index) => {
        if (renderShootingStar(shootingStar) === false) {
          // Remove completed shooting stars
          shootingStars.splice(index, 1);
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    // Create a shooting star with enhanced effects
    const createShootingStar = () => {
      // Create shooting stars from different screen edges
      const edgeSelector = Math.random();
      let x, y, angle;
      
      if (edgeSelector < 0.4) {
        // From top edge (most common)
        x = Math.random() * canvas.width;
        y = 0;
        angle = Math.PI / 4 + (Math.random() * Math.PI / 2); // Downward angle
      } else if (edgeSelector < 0.7) {
        // From left edge
        x = 0;
        y = Math.random() * canvas.height * 0.7; // Top 70% of screen height
        angle = -Math.PI / 4 + (Math.random() * Math.PI / 2); // Downward right angle
      } else {
        // From right edge
        x = canvas.width;
        y = Math.random() * canvas.height * 0.7; // Top 70% of screen height
        angle = Math.PI / 2 + (Math.random() * Math.PI / 2); // Downward left angle
      }
      
      const shootingStar = {
        x,
        y,
        initialX: x,
        initialY: y,
        length: Math.random() * 150 + 100, // Variable length
        speed: Math.random() * 12 + 8, // Slightly slower but more visible
        angle,
        opacity: 1,
        thickness: Math.random() * 2 + 1, // Varying thickness
        color: Math.random() > 0.6 ? { r: 220, g: 240, b: 255 } : 
               Math.random() > 0.3 ? { r: 255, g: 255, b: 255 } :
               { r: 255, g: 240, b: 220 }, // More color variations
        decay: Math.random() * 0.01 + 0.005, // Slower decay for longer visibility
        particles: [], // Particles for the trail effect
        age: 0
      };
      
      // Add trail particles
      for (let i = 0; i < 8; i++) {
        shootingStar.particles.push({
          offset: Math.random() * 0.2 - 0.1,
          size: Math.random() * 1.5 + 0.5,
          distance: Math.random() * 0.5 + 0.5
        });
      }
      
      shootingStars.push(shootingStar);
    };

    // Render a shooting star
    const renderShootingStar = (shootingStar) => {
      // Update age
      shootingStar.age++;
      
      // Fade in effect for the first few frames
      const opacity = shootingStar.age < 5 ? shootingStar.age / 5 * shootingStar.opacity : shootingStar.opacity;
      
      // Tail gradient
      const gradient = ctx.createLinearGradient(
        shootingStar.x, shootingStar.y,
        shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length,
        shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length
      );
      
      gradient.addColorStop(0, `rgba(${shootingStar.color.r}, ${shootingStar.color.g}, ${shootingStar.color.b}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${shootingStar.color.r}, ${shootingStar.color.g}, ${shootingStar.color.b}, 0)`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = shootingStar.thickness;
      ctx.beginPath();
      ctx.moveTo(shootingStar.x, shootingStar.y);
      
      const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length;
      const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length;
      
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
      
      // Add a brighter core
      ctx.beginPath();
      ctx.arc(shootingStar.x, shootingStar.y, shootingStar.thickness * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${shootingStar.color.r}, ${shootingStar.color.g}, ${shootingStar.color.b}, ${opacity})`; 
      ctx.fill();
      
      // Draw additional particles for a more spectacular effect
      shootingStar.particles.forEach(particle => {
        // Only draw particles after initial frames
        if (shootingStar.age > 3) {
          const particleAngle = shootingStar.angle + particle.offset;
          const particleDistance = shootingStar.length * particle.distance;
          const particleX = shootingStar.x - Math.cos(particleAngle) * particleDistance;
          const particleY = shootingStar.y - Math.sin(particleAngle) * particleDistance;
          
          ctx.beginPath();
          ctx.arc(particleX, particleY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${shootingStar.color.r}, ${shootingStar.color.g}, ${shootingStar.color.b}, ${opacity * 0.7})`;
          ctx.fill();
        }
      });
      
      // Move the shooting star
      shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
      shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
      shootingStar.opacity -= shootingStar.decay;
      
      // Calculate distance traveled
      const distanceTraveled = Math.sqrt(
        Math.pow(shootingStar.x - shootingStar.initialX, 2) + 
        Math.pow(shootingStar.y - shootingStar.initialY, 2)
      );
      
      // Return false if completed (either by opacity or by traveling far enough)
      if (shootingStar.opacity <= 0 || 
          shootingStar.x < -shootingStar.length || 
          shootingStar.x > canvas.width + shootingStar.length || 
          shootingStar.y < -shootingStar.length || 
          shootingStar.y > canvas.height + shootingStar.length ||
          distanceTraveled > canvas.width * 1.5) {
        return false;
      }
      
      return true;
    };

    // Initialize and start animation
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    render();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarryBackground; 