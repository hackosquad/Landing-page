import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaCheckCircle, FaDiscord } from "react-icons/fa";

const benefits = [
  {
    icon: "🛡️",
    text: "Real-World Security Labs"
  },
  {
    icon: "⚡",
    text: "Instant Skill Progression"
  },
  {
    icon: "🤝",
    text: "Expert Community Support"
  },
  {
    icon: "💬",
    text: "Real-Time Community Support"
  }
];

const ConclusionAlt = () => {
  return (
    <section className="relative w-full py-16 sm:py-28 px-2 sm:px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-[#18181b] to-black">
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs sm:max-w-3xl mx-auto">
        <div className="uppercase tracking-widest text-red-500 font-semibold text-xs sm:text-sm mb-2 sm:mb-4 font-poppins">Why join Hackosquad?</div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 font-poppins drop-shadow-lg">
          Ready to join the next generation of cybersecurity?
        </h2>
        <p className="text-base sm:text-lg md:text-2xl text-gray-300 mb-6 sm:mb-10 font-poppins max-w-xs sm:max-w-2xl mx-auto">
          Start your journey with <span className="text-red-600 font-semibold">Hackosquad</span> today. Empower your skills, connect with experts, and secure your digital future—one challenge at a time.
        </p>
        {/* Benefits Row */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-10">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-2 text-base sm:text-lg text-gray-200 font-poppins">
              <span className="text-xl sm:text-2xl">{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
        {/* Soft Divider */}
        <div className="w-16 sm:w-24 h-1 rounded-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 opacity-40 mb-6 sm:mb-10 mx-auto" />
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-2 sm:mb-4">
          <a
            href="#signup"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-lg transition-all duration-200 text-lg sm:text-xl font-poppins"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="inline-block border border-red-600 text-red-600 
              hover:border-red-500 hover:text-red-500 
              hover:shadow-[0_0_10px_3px_rgba(239,68,68,0.7)] 
              font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full 
              transition-all duration-200 text-lg sm:text-xl font-poppins"
          >
            Contact Us
          </a>
        </div>
        {/* Discord CTA */}
        <a
          href="https://discord.gg/your-community-link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 sm:gap-3 bg-[#5865F2] hover:bg-[#4752c4] text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full shadow-md transition-all duration-200 text-lg sm:text-xl font-poppins"
          style={{ minHeight: '48px' }}
        >
          <svg className="text-xl sm:text-2xl" fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.393-.405-.874-.617-1.249a.07.07 0 00-.073-.035c-1.471.249-3.22.83-4.885 1.515a.064.064 0 00-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 00.031.056c2.052 1.507 4.042 2.422 5.992 3.029a.077.077 0 00.084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.104c-.652-.247-1.27-.549-1.872-.892a.077.077 0 01-.008-.127c.126-.094.252-.192.371-.291a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.245.198.372.292a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.891.076.076 0 00-.04.105c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.607 3.951-1.522 6.003-3.029a.077.077 0 00.03-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/></svg>
          Join our Discord Community
        </a>
      </div>
    </section>
  );
};

export default ConclusionAlt; 