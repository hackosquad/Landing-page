import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const platformLinks = [
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing & Plans" },
  { href: "#contact", label: "Contact" },
];

const resourceLinks = [
  { href: "#account", label: "Account" },
  { href: "#tools", label: "Tools" },
  { href: "#newsletter", label: "Newsletter" },
  { href: "#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "#guides", label: "Guides" },
  { href: "#terms", label: "Terms & Conditions" },
  { href: "#privacy", label: "Privacy Policy" },
  { href: "#licensing", label: "Licensing" },
];

const FooterAlt = () => (
  <footer className="w-full bg-black text-white pb-8 pt-8 shadow-lg">    
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-12 py-12">
        {/* Columns */}
        <div className="flex-1">
          <span className="block font-bold text-2xl text-red-600 mb-6">Hacko<span className="text-white">Squad</span></span>
          <p className="text-white text-lg max-w-xs mb-0">Empowering the next generation of cybersecurity.</p>
        </div>
        <div className="flex-1 flex flex-col md:flex-row gap-10 justify-between">
          <div>
            <span className="block font-semibold text-white mb-4">Platform</span>
            <ul className="space-y-2">
              {platformLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block font-semibold text-white mb-4">Resources</span>
            <ul className="space-y-2">
              {resourceLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="block font-semibold text-white mb-4">Legals</span>
            <ul className="space-y-2">
              {legalLinks.map((link, i) => (
                <li key={i}><a href={link.href} className="hover:text-red-500 transition text-white">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-red-900/40 mb-0"></div>
      <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4">
        <span className="text-white text-sm">Follow us on:</span>
        <div className="flex gap-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-xl" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-xl" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-xl" aria-label="Instagram"><FaInstagram /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterAlt; 