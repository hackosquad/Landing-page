import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from '../assets/HackosquadAdmin.png';

const HeroSection = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 0.92, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.to(imgRef.current, {
              y: '+=24',
              repeat: -1,
              yoyo: true,
              duration: 2.2,
              ease: "power1.inOut"
            });
          }
        }
      );
    }
  }, []);

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

      {/* gsap image floating animation only */}
      <div className="relative flex w-full items-center justify-center z-10 mt-8">
        <div className="w-full max-w-3xl flex items-center justify-center">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full h-[60vh] rounded-3xl border-4 border-gray-700 bg-black mx-auto"
            ref={imgRef}
            style={{ borderRadius: '24px' }}
          />
        </div>
      </div>

      {/* separation line */}
      <div className="w-full flex justify-center mt-8">
        <hr className="w-full max-w-8xl border-t-2 border-red-600 opacity-60" />
      </div>
      <div>
        gdgfgd
      </div>
    </div>
  );
}

export default HeroSection;