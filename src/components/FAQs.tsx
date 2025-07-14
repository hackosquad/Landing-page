import { useState } from "react";

const faqs = [
  {
    question: "What is Hackosquad?",
    answer:
      "Hackosquad is a next-generation cybersecurity learning platform offering real-world labs, expert community support, and hands-on challenges for all skill levels."
  },
  {
    question: "Who can join Hackosquad?",
    answer:
      "Anyone interested in cybersecurity—from beginners to professionals—can join Hackosquad to learn, practice, and connect with a global community."
  },
  {
    question: "What kind of labs and challenges are available?",
    answer:
      "We offer a wide range of labs and challenges, including penetration testing, digital forensics, red/blue team scenarios, and more, all designed to simulate real-world threats."
  },
  {
    question: "Is there a free trial or demo?",
    answer:
      "Yes! You can start with a free trial to explore our labs, community, and resources before committing to a subscription."
  },
  {
    question: "How does the community support work?",
    answer:
      "Our real-time community support includes Discord channels, expert Q&A, and peer-to-peer help so you're never stuck on a challenge."
  },
  {
    question: "Can I use Hackosquad to prepare for certifications?",
    answer:
      "Absolutely! Our labs and learning paths are designed to help you prepare for popular certifications like CEH, OSCP, CompTIA Security+, and more."
  },
  {
    question: "How do I get started?",
    answer:
      "Simply sign up, join our Discord, and start exploring labs and challenges. Our onboarding will guide you every step of the way."
  },
  {
    question: "Is my progress tracked?",
    answer:
      "Yes, your progress, achievements, and skill growth are tracked on your profile so you can see your improvement over time."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-black py-2 px-2 sm:px-4">
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-full max-w-xs sm:max-w-2xl h-1 rounded-full bg-gradient-to-r from-black via-red-600 to-black shadow-[0_0_16px_2px_rgba(255,0,0,0.25)] relative">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-32 h-2 bg-red-600 rounded-full blur-md opacity-60 animate-pulse" />
        </div>
      </div>
      <div className="max-w-xs sm:max-w-4xl mx-auto">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white mb-6 sm:mb-10 text-center font-poppins">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-red-900/40 pb-3 sm:pb-4"
            >
              <button
                className="w-full text-left flex justify-between items-center text-base sm:text-lg md:text-xl font-semibold text-white focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <span className={`ml-4 transition-transform duration-200 ${openIndex === i ? 'rotate-180 text-red-500' : 'text-red-600'}`}>▼</span>
              </button>
              {openIndex === i && (
                <div className="mt-2 sm:mt-3 text-gray-300 text-sm sm:text-base md:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs; 