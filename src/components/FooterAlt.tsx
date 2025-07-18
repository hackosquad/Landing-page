
import { FaDiscord, FaLinkedin } from "react-icons/fa";

const platformLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing & Plans" },
  { href: "#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "#account", label: "Account" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#licensing", label: "Licensing" },
];

const FooterAlt = () => (
  <footer className="w-full bg-black text-white pb-6 sm:pb-8 pt-6 sm:pt-8 shadow-lg">    
    <div className="max-w-7xl mx-auto px-3 sm:px-0">
      <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-12 py-8 sm:py-12">
        {/* Columns */}
        <div className="flex-1 mb-6 md:mb-0">
          <span className="block font-bold text-xl sm:text-2xl text-red-600 mb-4 sm:mb-6">Hacko<span className="text-white">Squad</span></span>
          <p className="text-white text-base sm:text-lg max-w-xs mb-0">Empowering the next generation of cybersecurity.</p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-6 sm:gap-10 justify-between">
          <div>
            <span className="block font-semibold text-white mb-2 sm:mb-4 text-base sm:text-lg">Platform</span>
            <ul className="space-y-1 sm:space-y-2">
              {platformLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white text-sm sm:text-base">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block font-semibold text-white mb-2 sm:mb-4 text-base sm:text-lg">Resources</span>
            <ul className="space-y-1 sm:space-y-2">
              {resourceLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white text-sm sm:text-base">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block font-semibold text-white mb-2 sm:mb-4 text-base sm:text-lg">Legals</span>
            <ul className="space-y-1 sm:space-y-2">
              {legalLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white text-sm sm:text-base">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-red-900/40 mb-0"></div>
      <div className="flex flex-col md:flex-row justify-between items-center py-4 sm:py-6 gap-2 sm:gap-4">
        <span className="text-white text-xs sm:text-sm">Follow and join us on:</span>
        <div className="flex gap-4 sm:gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-lg sm:text-xl" aria-label="Twitter"><FaLinkedin /></a>
          <a href="https://discore.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-lg sm:text-xl" aria-label="Facebook"><FaDiscord /></a>
          
        </div>
      </div>
    </div>
  </footer>
);

export default FooterAlt; 