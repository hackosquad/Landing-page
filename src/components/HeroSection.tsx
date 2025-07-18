import { useRef, useState } from 'react';
import heroImg from '../assets/HackosquadAdmin.png';
import { AnimatePresence, motion } from "framer-motion";


const HeroSection = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showToast, setShowToast] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 18;
    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-32 sm:pt-40 px-2 sm:px-0">

      {/* Toast Notification */}
       <AnimatePresence>
  {showToast && (
    <motion.div
      key="toast"
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-[50px] right-[20px] z-50 bg-red-600 text-white px-3 py-2 sm:py-4 sm:px-5 rounded-xl shadow-lg flex items-center gap-2 text-sm sm:text-base max-w-[90vw] sm:max-w-md font-bold"
    >
      <span className="flex-1">
      For now, Hackosquad is completely <span className="font-extrabold">FREE</span> to use!
      </span>
      <button
        onClick={() => setShowToast(false)}
        className="ml-3 text-white hover:text-gray-300 font-extrabold text-3xl sm:text-4xl leading-none"
      >
        &times;
      </button>
    </motion.div>
  )}
</AnimatePresence>



      {/* Background Gradient Circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 text-center px-3 sm:px-11 max-w-2xl sm:max-w-6xl">
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
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
        <p className="text-base sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xs sm:max-w-4xl mx-auto">
          A personalized cybersecurity learning platform for all skill levels — from beginners to experts — packed with curated content to help you grow.
        </p>
      </div>

      {/* Get Started Button */}
      <div className='justify-center flex py-6 sm:py-8'>
        <button className="bg-red-600 text-white py-2 px-5 sm:py-3 sm:px-6 rounded-lg font-bold transition duration-300 transform hover:scale-110 hover:bg-red-700 focus:outline-none text-base sm:text-lg">
          Get Started Now
        </button>
      </div>

      {/* Hero Image with 3D tilt */}
      <div
        className="relative flex w-full items-center justify-center z-10 mt-6 sm:mt-8"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1200 }}
      >
        <motion.img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-[90vw] sm:max-w-[75vw] h-auto max-h-[60vh] sm:max-h-[70vh] rounded-3xl border-4 border-gray-700 bg-black mx-auto select-none object-contain"
          style={{ borderRadius: '24px', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.45)' }}
          initial={{ opacity: 0, scale: 0.95 }}
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

    </div>
  );
}

export default HeroSection;
