import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PageTransition from '../components/PageTransition';
import useScrollAnimation from '../hooks/useScrollAnimation';
import waitTwoGif from '../assets/wait-two.gif';

const skillsData = [
  { name: 'JavaScript', level: 80 },
  { name: 'HTML/CSS', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'React.js', level: 70 },
  { name: 'C/C++', level: 65 },
  { name: 'C#', level: 60 },
  { name: 'PHP', level: 55 },
  { name: 'SQL', level: 60 },
  { name: 'PowerShell', level: 65 },
  { name: 'Batch', level: 70 },
  { name: 'Rust', level: 45 },
  { name: 'Golang', level: 50 },
  { name: 'Lua', level: 75 },
  { name: 'AHK', level: 65 },
];

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Self-Learning Advanced Web Development',
    company: 'Personal Projects',
    description: 'Building responsive websites and learning about frontend frameworks.'
  },
  {
    year: '2022 - 2023',
    title: 'Game Development Exploration',
    company: 'Personal Projects',
    description: 'Creating small games with Lua and experimenting with C# in Unity.'
  },
  {
    year: '2021 - 2022',
    title: 'Learning Programming Fundamentals',
    company: 'Online Courses',
    description: 'Completed courses on Python, JavaScript, and web development basics.'
  },
  {
    year: '2020 - 2021',
    title: 'First Steps in Coding',
    company: 'Self-Study',
    description: 'Started learning HTML, CSS, and basic programming stuff with tutorials.'
  },
];

const About = () => {
  const photoRef = useRef(null);
  const timelineRef = useRef(null);
  const { ref: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  
  // Animation for the photo reveal
  useEffect(() => {
    if (!photoRef.current) return;
    
    gsap.fromTo(photoRef.current,
      { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
      { 
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', 
        duration: 1.2, 
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: photoRef.current,
          start: 'top 70%',
        }
      }
    );
    
    return () => {
      // Clean up
    };
  }, []);
  
  // Animation for the timeline
  useEffect(() => {
    if (!timelineRef.current) return;
    
    const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
    
    gsap.set(timelineItems, { opacity: 0, x: -50 });
    
    gsap.to(timelineItems, {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 70%',
      }
    });
    
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
              About Me
            </motion.h1>
            
            <motion.div 
              className="h-1 w-24 bg-white"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </section>
        
        {/* Bio section */}
        <section ref={bioRef} className="px-6 sm:px-12 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
              {/* Photo */}
              <div className="md:col-span-2">
                <div className="aspect-[3/4] relative bg-gray-800 rounded-lg overflow-hidden">
                  <div
                    ref={photoRef}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${waitTwoGif})` }}
                  />
                  
                  {/* Decorative grid lines */}
                  <div className="absolute inset-0 grid grid-cols-3 pointer-events-none">
                    <div className="border-r border-white/10"></div>
                    <div className="border-r border-white/10"></div>
                  </div>
                  <div className="absolute inset-0 grid grid-rows-3 pointer-events-none">
                    <div className="border-b border-white/10"></div>
                    <div className="border-b border-white/10"></div>
                  </div>
                </div>
              </div>
              
              {/* Bio text */}
              <div className="md:col-span-3 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={bioVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">About data.</h2>
                  
                  <p className="text-gray-300">
                    Hello! I'm a 14-year-old self-taught programmer with a passion for web development and coding. Even though I'm still young, I've been fascinated by technology and programming since I was 10, spending my free time learning various languages and building personal projects.
                  </p>
                  
                  <p className="text-gray-300">
                    I started with HTML and CSS basics and gradually expanded my skills to JavaScript, Python, and other languages. I enjoy both frontend development with its visual creativity and backend logic that makes applications work. Though I haven't had professional experience yet, I'm constantly working on personal projects to improve my skills.
                  </p>
                  
                  <p className="text-gray-300">
                    When I'm not coding, I'm exploring online tutorials, participating in coding forums, and learning from open-source projects. I'm particularly interested in game development, web applications, and automation tools. My goal is to continue growing my skills while balancing school and eventually pursue computer science in college.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills section */}
        <section ref={skillsRef} className="px-6 sm:px-12 py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Skills & Learning Progress</h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={skillsVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
            >
              {skillsData.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ width: 0 }}
                  animate={skillsVisible ? { width: '100%' } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={skillsVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Timeline section */}
        <section className="px-6 sm:px-12 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Learning Journey</h2>
            
            <div ref={timelineRef} className="relative pl-8 md:pl-0">
              {/* Vertical line for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-px"></div>
              
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item relative mb-16 md:mb-0 ${
                    index % 2 === 0 ? 'md:pr-1/2 text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Vertical line for mobile */}
                  <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-gray-800"></div>
                  
                  {/* Circle indicator */}
                  <div className={`absolute top-0 w-4 h-4 rounded-full border-2 border-white bg-black ${
                    index % 2 === 0 
                      ? 'md:right-0 md:translate-x-1/2 -left-[8px] md:left-auto' 
                      : 'md:left-0 md:-translate-x-1/2 -left-[8px] md:left-auto'
                  }`}></div>
                  
                  <div className={`md:w-[calc(100%-20px)] ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                    <span className="inline-block mb-2 px-3 py-1 bg-gray-800 text-sm rounded-full">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <h4 className="text-gray-400 mb-2">{item.company}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Projects section */}
        <section className="px-6 sm:px-12 py-20 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">Personal Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300 bg-black/30">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">A responsive personal portfolio built with React, Tailwind CSS, and Framer Motion, featuring custom animations and a modern design.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">React</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Tailwind CSS</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Framer Motion</span>
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300 bg-black/30">
                <h3 className="text-xl font-bold mb-2">Space Shooter Game</h3>
                <p className="text-gray-300 mb-4">A simple 2D space shooter game developed with Lua and the LÖVE framework, featuring custom graphics and sound effects.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Lua</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">LÖVE</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Game Development</span>
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300 bg-black/30">
                <h3 className="text-xl font-bold mb-2">Discord Bot</h3>
                <p className="text-gray-300 mb-4">A multi-purpose Discord bot created with Python that can play music, moderate chats, and run simple games in Discord servers.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Python</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Discord API</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Bot Development</span>
                </div>
              </div>
              
              <div className="border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300 bg-black/30">
                <h3 className="text-xl font-bold mb-2">Automation Scripts</h3>
                <p className="text-gray-300 mb-4">Collection of AutoHotkey and PowerShell scripts for automating routine tasks on Windows, including file organization and text processing.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">AHK</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">PowerShell</span>
                  <span className="text-xs bg-white/10 rounded-full px-2 py-1">Automation</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About; 