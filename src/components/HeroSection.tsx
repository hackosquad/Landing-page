import { useRef, useState } from 'react';
import heroImg from '../assets/HackosquadAdmin.png';
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
          className="w-full h-[60vh] rounded-3xl border-4 border-gray-700 bg-black mx-auto select-none"
          style={{ borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
          animate={{ rotateX: rotate.x, rotateY: rotate.y, scale: 1 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.7 }}
          draggable={false}
        />
      </div>

      {/* separation line */}
      <div className="w-full flex justify-center mt-8">
        <hr className="w-full max-w-8xl border-t-2 border-red-600 opacity-60" />
      </div>
      {/* Remove stray debug text */}
    </div>
  );
}

export default HeroSection;