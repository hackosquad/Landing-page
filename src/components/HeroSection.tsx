import { useRef, useState } from 'react';
import heroImg from '../assets/HackosquadAdmin.png'
import labs from '../assets/labs.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // 3D tilt effect on mouse move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max tilt in degrees
    const maxTilt = 18;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-11 max-w-6xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
          The ultimate platform to{' '}
          <span className="text-red-600 relative">
            enhance
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-800 rounded"></div>
          </span>{' '}
          your{' '}
          <span className="text-red-600 relative">
            cybersecurity
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-800 rounded"></div>
          </span>{' '} skills
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          A personalized cybersecurity learning platform for all skill levels — from beginners to experts — packed with curated content to help you grow.
        </p>
      </div>

      {/* Framer Motion 3D interactive image */}
      <div
        className="relative flex w-full items-center justify-center z-10 mt-8"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
      >
        <motion.img
          src={heroImg}
          alt="Hero"
          className="max-w-5xl h-[60vh] rounded-3xl border-4 border-gray-900 bg-black mx-auto select-none"
          style={{ borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
          initial={{ opacity: 0, scale: 0.95, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
          animate={{
            rotateX: rotate.x,
            rotateY: rotate.y,
            scale: 1,
            opacity: 1,
            boxShadow: [
              '0 8px 32px 0 rgba(0,0,0,0.45)',
              '0 16px 48px 0 rgba(255,0,60,0.25)',
              '0 8px 32px 0 rgba(0,0,0,0.45)'
            ]
          }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 18,
            mass: 0.7,
            opacity: { duration: 0.7 },
            scale: { duration: 1.1 },
            boxShadow: {
              duration: 2.2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }
          }}
          draggable={false}
        />
      </div>

      {/* separation line */}
      <div className="w-full flex justify-center mt-8">
        <hr
          className="w-full max-w-8xl border-t-2 opacity-80"
          style={{
            borderImage: 'linear-gradient(90deg, #111 0%, #222 10%, #ff003c 50%, #222 90%, #111 100%) 1',
            borderTop: '2px solid',
            borderLeft: 0,
            borderRight: 0,
            borderBottom: 0,
          }}
        />
      </div>


      {/* contents */}

      {/* Hackosquad branding */}
      <div className="w-full flex flex-col items-center mt-12">
        <span
          className="font-extrabold text-5xl md:text-6xl tracking-widest bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent drop-shadow-lg select-none"
          style={{ letterSpacing: '0.25em', fontFamily: 'Montserrat, sans-serif' }}
        >
          HACKOSQUAD
        </span>
        {/* Additional contents below branding */}
        <div className="mt-6 max-w-3xl text-center">
          <p className="text-lg md:text-xl text-gray-300 mb-4">
            Welcome to Hackosquad — your gateway to mastering cybersecurity skills, challenges, and real-world scenarios.
          </p>
        </div>
      </div>

      {/* listing of features in the divisions */}
       <div className="features pt-20   ">

        <div className="interactive w-full pt-3 px-11 flex items-center ">
          <div className="text  ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Pracitce Labs
          </h2>
          <p className="text-lg w-3/4  md:text-xl text-gray-300 mb-8">
           Practice Labs are interactive, hands-on environments where you can apply your cybersecurity skills in real-world scenarios. These labs cover a wide range of topics, from basic security concepts to advanced penetration testing techniques.
          </p>
          </div>
          <div className="image">

            <img className="border rounded-xl border-red-500" src={labs} alt="" />

          </div>
          {/* Add more feature details here */}

          
        </div>
       </div>
    </div>
  );
}

export default HeroSection;